# Wave Repair Inspection Notes

- `pasted_file_RDYfEn_image.png`, left crop: the navy-to-mustard boundary is broadly smooth, but the cyan stroke is visibly flattened into a short horizontal shelf near the crest.
- `pasted_file_RDYfEn_image.png`, center crop: the trough is smooth; the artifact is not a general raster issue and appears tied to SVG path geometry near extrema or joins.
- `pasted_file_RDYfEn_image.png`, right crop: a second short flat shelf appears near the crest, confirming the squared effect repeats where the curve reaches an extreme.
- `pasted_file_m58G8i_image.png`, left crop: the mustard-to-navy divider shows the same flattened upper-side crest while the lower cyan boundary remains visually smooth.
- `pasted_file_m58G8i_image.png`, center crop: the broad trough remains continuous, again isolating the visible defect to the crest geometry rather than the cyan stroke thickness.
- `pasted_file_m58G8i_image.png`, right crop: the opposite crest repeats the short horizontal shelf. The repair should replace the current repeated curve with cubic Bézier segments whose tangent transitions stay continuous through each crest and trough.

## Rendered repair verification

- The Home hero now has a visible cyan seam before `WHAT BRINGS YOU TO SOL` at desktop and mobile sizes.
- The repaired curve remains inside the SVG viewport, so its cyan stroke no longer clips into horizontal shelves at the upper crests.
- The Home decision cards have additional clearance before their divider; the Club cards have expanded clearance above and below and use orange, teal, and blue rather than the decision-card sequence.
