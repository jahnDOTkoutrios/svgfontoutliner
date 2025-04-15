# SVG Font Outliner

A web-based tool for creating and animating SVG text with customizable markers, morphing effects, and grid systems.

## Features

### Basics

- **Text Input**: Two text fields for creating morphing effects
- **Font Size**: Adjustable from 50 to 1000
- **Spacing**: Control letter spacing (0.5 to 2)
- **Y-Offset**: Vertical position adjustment (-200 to 200)
- **Morph Controls**:
  - Morph amount (0-100%)
  - Morph speed
  - Individual letter morphing
- **Caps Lock**: Toggle uppercase text
- **Markers**: Toggle visibility of markers

### Markers

- **Types**:
  - Dots
  - Crosses
  - Hearts
  - Custom SVG
- **Density**: Adjust marker density (1-50)
- **Size**: Control marker size (1-50)
- **Cross Thickness**: Adjust cross marker thickness (1-50)
- **Stroke Width**: Control path stroke width (0.1-20)
- **Stroke Join**: Choose between round, miter, or bevel joins
- **Path Color**: Select from multiple colors
- **Path Z-Index**: Toggle path position (front/back)
- **Path Visibility**: Toggle path display
- **Rotation**: Enable/disable marker rotation
- **Gradient Fill**: Toggle gradient effects
- **Gradient Inversion**: Invert gradient direction

### Grid

- **Size**: Adjust grid cell size (5-50)
- **Pull**: Control grid attraction strength (0-100%)
- **Visibility**: Toggle grid display
- **Color**: Choose from multiple colors
- **Stroke Width**: Adjust grid line thickness (0.1-2)
- **Offset**: Toggle grid offset (centers markers in cells)

### Animation

- **Speed**: Control animation speed (0-100)
- **Amplitude**: Adjust animation range (0-500)
- **Types**:
  - Wave
  - Pulse
  - Spiral
  - Bounce
  - Random
- **Position**: Toggle position animation
- **Grid Size**: Animate grid size
- **Grid Pull**: Animate grid pull strength
- **Color Offset**: Animate through color palette

### Theme

- **Color Mode**: Toggle color effects
- **Palettes**:
  - Neon
  - Red
  - Green
  - Blue
  - White
  - Black
  - Pastel
  - Nature
  - Mountains
  - Beach
  - Mondrian
  - Sunset
  - Ocean
  - Forest
  - Rainbow
  - Fire
  - Ice
  - Pink
  - Heart
- **Color Count**: Adjust number of colors (2-200)
- **Individual Colors**: Toggle per-marker coloring
- **Ordered Colors**: Toggle ordered color cycling
- **Dark Mode**: Toggle dark/light theme

## Export Options

- **SVG Export**: Export current design as SVG with timestamp
- **Settings Log**: Export current settings as JSON with timestamp

## Usage

1. Enter text in the input fields
2. Adjust settings in the control panels
3. Use the animation controls to create dynamic effects
4. Export your design as SVG or save settings

## Technical Details

### Morphing Modes

#### Normal Morph

- Treats entire text as one shape
- Creates smooth, fluid transitions
- All points morph simultaneously
- Best for abstract transitions

#### Individual Morph (i-morph)

- Morphs each letter independently
- Maintains character boundaries
- Includes stagger effect
- Best for readable transitions

### Grid System

- Centered markers in grid cells
- Adjustable cell size and pull strength
- Optional offset for centered alignment
- Customizable appearance

### Color System

- Multiple predefined palettes
- Gradient support
- Individual or grouped coloring
- Animated color cycling

## Browser Compatibility

- Modern browsers with SVG support
- Chrome, Firefox, Safari, Edge

## License

Free to use for personal and commercial projects.
