# Fabrique une variante de la police où le zéro n'est pas barré.
# Usage : python3 tools/police-zero.py "AtkinsonHyperlegibleNext[wght].ttf" sortie.ttf   (demande fontTools)
# Ensuite : pyftsubset sortie.ttf --flavor=woff … pour obtenir fonts/atkinson-cahier.woff
# Le « trou » du zéro est redessiné comme une copie réduite du contour extérieur, à chaque graisse de référence.
import sys
from fontTools.ttLib import TTFont
from fontTools.ttLib.tables._g_l_y_f import GlyphCoordinates
from fontTools.ttLib.tables.TupleVariation import TupleVariation
from fontTools.ttLib.tables import ttProgram
from fontTools.varLib.models import supportScalar
from fontTools.varLib.iup import iup_delta

SRC, DST = sys.argv[1], sys.argv[2]
vf = TTFont(SRC)
glyf = vf['glyf']
NOM = 'zero'

coords, controls = glyf._getCoordinatesAndControls(NOM, vf['hmtx'].metrics, getattr(vf.get('vmtx'), 'metrics', None))
defaut = [tuple(p) for p in coords]            # points + 4 points fantômes
ends = list(controls.endPts)
flags = list(glyf[NOM].flags)
assert len(ends) == 3, ends
n = len(defaut) - 4

tvs = vf['gvar'].variations[NOM]
pleins = []
for tv in tvs:
    d = list(tv.coordinates)
    if None in d:
        d = iup_delta(d, coords, ends)
    pleins.append([tuple(p) for p in d])

def maitre(loc):
    pts = [list(p) for p in defaut]
    for tv, d in zip(tvs, pleins):
        s = supportScalar(loc, tv.axes)
        if s:
            for i, (dx, dy) in enumerate(d):
                pts[i][0] += s * dx; pts[i][1] += s * dy
    return [tuple(p) for p in pts]

def bbox(pts):
    xs = [p[0] for p in pts]; ys = [p[1] for p in pts]
    return min(xs), min(ys), max(xs), max(ys)

def redessine(pts):
    """pts : les points d'un maître (sans fantômes). Renvoie contour extérieur + nouveau trou."""
    ext = pts[:ends[0] + 1]
    dedans = pts[ends[0] + 1:n]
    ox0, oy0, ox1, oy1 = bbox(ext)
    ix0, iy0, ix1, iy1 = bbox(dedans)
    sx = (ix1 - ix0) / (ox1 - ox0); sy = (iy1 - iy0) / (oy1 - oy0)
    trou = [(ix0 + (x - ox0) * sx, iy0 + (y - oy0) * sy) for (x, y) in ext]
    return ext + list(reversed(trou))

nouveau_defaut = [(round(x), round(y)) for x, y in redessine(defaut[:n])]
fl_ext = flags[:ends[0] + 1]
nouveaux_flags = fl_ext + list(reversed(fl_ext))

nouvelles = []
for i, tv in enumerate(tvs):
    loc = {tag: peak for tag, (_, peak, _) in tv.axes.items()}
    # à ce sommet, seul ce tuple doit agir
    for j, autre in enumerate(tvs):
        s = supportScalar(loc, autre.axes)
        assert (s == 1) if i == j else (s == 0), (i, j, s)
    m = maitre(loc)
    nm = redessine(m[:n])
    ds = [(round(mx - dx), round(my - dy)) for (mx, my), (dx, dy) in zip(nm, nouveau_defaut)]
    fantomes = [(round(a), round(b)) for a, b in pleins[i][-4:]]
    nouvelles.append(TupleVariation(dict(tv.axes), ds + fantomes))
    print('maître', loc, 'bbox trou', bbox(nm[ends[0] + 1:]))

g = glyf[NOM]
g.coordinates = GlyphCoordinates(nouveau_defaut)
g.endPtsOfContours = [ends[0], len(nouveau_defaut) - 1]
g.flags = type(g.flags)(nouveaux_flags)
g.numberOfContours = 2
if hasattr(g, 'program'):
    g.program = ttProgram.Program(); g.program.fromBytecode(b'')
g.recalcBounds(glyf)
vf['gvar'].variations[NOM] = nouvelles

for rec in vf['name'].names:
    if rec.nameID in (1, 4, 16):
        rec.string = rec.toUnicode() + ' Cahier'
    elif rec.nameID == 6:
        rec.string = rec.toUnicode() + 'Cahier'
    elif rec.nameID == 3:
        rec.string = rec.toUnicode() + ';zero-non-barre'
vf.save(DST)
print('écrit', DST)
