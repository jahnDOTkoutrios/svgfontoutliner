# SVG Font Outliner

A web-based tool for creative SVG font exploration, animation, and export.

## Features

- **Live SVG Font Outlining**: Type two words and see them visualized with animated markers and morphing effects.
- **Marker Types**: Choose from dots, crosses, hearts, squares, nibs, or upload a custom SVG marker.
- **Marker Controls**: Adjust density, size, stroke, join, and color. Toggle markers and path display.
- **Grid System**: Snap markers to a grid with adjustable size, pull, color (now with more color options: yellow, orange, purple, pink, gray, etc.), stroke, and offset.
- **Animation**: Animate position, rotation, color, grid size, and grid pull. Choose animation type (wave, pulse, spiral, bounce, random). Amplitude sliders for POS, ROT, COLOR, and more.
- **Color Palettes**: Many palettes (neon, pastel, rainbow, nature, fire, ice, etc.) for both markers and paths. Palette handling is robust and synchronized with the UI.
- **Theme**: Light/dark mode toggle, color mode, palette selection, color count, individual/ordered color modes.
- **Morphing**: Morph between two words, with global or per-letter morphing and adjustable speed.
- **Export**: Download SVG or settings JSON with a single click.
- **Randomization**: Press `R` to randomize most settings (except y-offset and show markers). Marker randomization never selects custom SVG. Color palette selection is robust.
- **Fullscreen/Output-Only Mode**: Press `F` to hide all UI and make the SVG output fill the window. Press `F` again to restore the UI.

### Export/Import Presets

- Click "SAVE PRESET" to download your current settings as a JSON file
- Click "LOAD PRESET" to import a previously saved preset file

## Keyboard Shortcuts

- `R`: Randomize most settings (except y-offset and show markers; custom marker is never selected).
- `F`: Toggle fullscreen/output-only mode.
- `1-7`: Toggle Presets.

## Customization

- Add your own SVG font or marker by uploading via the UI.

## Credits

- Hershey fonts from [@kamalmostafa/hershey-fonts](https://github.com/kamalmostafa/hershey-fonts)

## HOW TO EXPORT SVG FONTS

- SVG font export tool from [@jahnDOTkoutrios/svg_font_export](https://github.com/jahnDOTkoutrios/svg_font_export)
