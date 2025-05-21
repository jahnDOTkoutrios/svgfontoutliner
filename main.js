// Color palettes
const COLOR_PALETTES = {
  neon: [
    "#00ff00", // Neon Green
    "#ff00ff", // Neon Pink
    "#00ffff", // Neon Cyan
    "#ff0000", // Neon Red
    "#ffff00", // Neon Yellow
    "#ff8800", // Neon Orange
  ],
  pastel: [
    "#ffb3ba", // Pastel Pink
    "#baffc9", // Pastel Green
    "#bae1ff", // Pastel Blue
    "#ffffba", // Pastel Yellow
    "#ffdfba", // Pastel Orange
    "#e8baff", // Pastel Purple
  ],
  monochrome: [
    "#000000", // Black
    "#333333", // Dark Gray
    "#666666", // Medium Gray
    "#999999", // Light Gray
    "#cccccc", // Lighter Gray
    "#ffffff", // White
  ],
  rainbow: [
    "#ff0000", // Red
    "#ff7f00", // Orange
    "#ffff00", // Yellow
    "#00ff00", // Green
    "#0000ff", // Blue
    "#4b0082", // Indigo
    "#9400d3", // Violet
  ],
  earth: [
    "#8b4513", // Saddle Brown
    "#a0522d", // Sienna
    "#6b8e23", // Olive Drab
    "#556b2f", // Dark Olive Green
    "#808000", // Olive
    "#bdb76b", // Dark Khaki
  ],
  ocean: [
    "#000080", // Navy
    "#0000cd", // Medium Blue
    "#1e90ff", // Dodger Blue
    "#00bfff", // Deep Sky Blue
    "#87ceeb", // Sky Blue
    "#b0e0e6", // Powder Blue
  ],
  sunset: [
    "#ff4500", // Orange Red
    "#ff6347", // Tomato
    "#ff7f50", // Coral
    "#ffa07a", // Light Salmon
    "#ffd700", // Gold
    "#ffa500", // Orange
  ],
  forest: [
    "#006400", // Dark Green
    "#008000", // Green
    "#228b22", // Forest Green
    "#32cd32", // Lime Green
    "#90ee90", // Light Green
    "#98fb98", // Pale Green
  ],
  desert: [
    "#deb887", // Burlywood
    "#d2691e", // Chocolate
    "#cd853f", // Peru
    "#d2b48c", // Tan
    "#f4a460", // Sandy Brown
    "#d2691e", // Chocolate
  ],
  arctic: [
    "#f0f8ff", // Alice Blue
    "#e6e6fa", // Lavender
    "#f5f5f5", // White Smoke
    "#faf0e6", // Linen
    "#f0fff0", // Honeydew
    "#f5fffa", // Mint Cream
  ],
  red: ["#FF0000"],
  green: ["#00FF00"],
  blue: ["#0000FF"],
  white: ["#FFFFFF"],
  black: ["#000000"],
  pink: ["#FFC0CB", "#FFB6C1", "#FF69B4", "#FF1493"],
  nature: ["#2D5A27", "#8B4513", "#1E4D2B", "#A0522D", "#006400", "#8FBC8F"],
  mountains: ["#2C3E50", "#34495E", "#7F8C8D", "#95A5A6", "#BDC3C7", "#ECF0F1"],
  beach: [
    "#1ABC9C",
    "#16A085",
    "#F1C40F",
    "#F39C12",
    "#E67E22",
    "#D35400",
    "#3498DB",
  ],
  mondrian: ["#FF0000", "#0000FF", "#FFFF00", "#FFFFFF", "#000000"],
  fire: ["#FF0000", "#FF4500", "#FF8C00", "#FFA500", "#FFD700"],
  ice: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5"],
  // New palettes
  retro: [
    "#FF6B6B", // Coral Red
    "#4ECDC4", // Turquoise
    "#45B7D1", // Sky Blue
    "#96CEB4", // Sage Green
    "#FFEEAD", // Cream
    "#D4A5A5", // Dusty Rose
  ],
  cyberpunk: [
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FF0000", // Red
    "#00FF00", // Green
    "#FFFF00", // Yellow
    "#0000FF", // Blue
  ],
  autumn: [
    "#D35400", // Pumpkin
    "#E67E22", // Carrot
    "#F39C12", // Orange
    "#F1C40F", // Sunflower
    "#D4AC0D", // Golden
    "#B7950B", // Bronze
  ],
  spring: [
    "#FF69B4", // Hot Pink
    "#FF1493", // Deep Pink
    "#FFB6C1", // Light Pink
    "#98FB98", // Pale Green
    "#87CEEB", // Sky Blue
    "#DDA0DD", // Plum
  ],
  winter: [
    "#B0E0E6", // Powder Blue
    "#ADD8E6", // Light Blue
    "#E0FFFF", // Light Cyan
    "#F0FFFF", // Azure
    "#F5F5F5", // White Smoke
    "#E6E6FA", // Lavender
  ],
  metallic: [
    "#C0C0C0", // Silver
    "#BDB76B", // Dark Khaki
    "#DAA520", // Goldenrod
    "#CD853F", // Peru
    "#D2B48C", // Tan
    "#DEB887", // Burlywood
  ],
  jewel: [
    "#4B0082", // Indigo
    "#800080", // Purple
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FFD700", // Gold
    "#C0C0C0", // Silver
  ],
  vintage: [
    "#8B4513", // Saddle Brown
    "#A0522D", // Sienna
    "#CD853F", // Peru
    "#DEB887", // Burlywood
    "#D2B48C", // Tan
    "#F5DEB3", // Wheat
  ],
  neon2: [
    "#FF1493", // Deep Pink
    "#00FF7F", // Spring Green
    "#1E90FF", // Dodger Blue
    "#FFD700", // Gold
    "#FF4500", // Orange Red
    "#9400D3", // Dark Violet
  ],
};

let fontData = {};
let charColors = {};
const svgContainer = document.getElementById("svgContainer");
const textInput = document.getElementById("textInput");
const textInput2 = document.getElementById("textInput2");
const fontSizeSlider = document.getElementById("fontSize");
const dotDensitySlider = document.getElementById("dotDensity");
const dotSizeSlider = document.getElementById("dotSize");
const strokeWidthSlider = document.getElementById("strokeWidth");
const showPathSwitch = document.getElementById("showPath");
const colorModeSwitch = document.getElementById("colorMode");
const crossThicknessSlider = document.getElementById("crossThickness");
const rotateSwitch = document.getElementById("rotate");
const rotate45Switch = document.getElementById("rotate45");
const spacingSlider = document.getElementById("spacing");
const darkModeSwitch = document.getElementById("darkMode");
const gridSizeSlider = document.getElementById("gridSize");
const gridPullSlider = document.getElementById("gridPull");
const animSpeedSlider = document.getElementById("animSpeed");
const animAmpSlider = document.getElementById("animAmp");
const animRotAmpSlider = document.getElementById("animRotAmp");
const animColorAmpSlider = document.getElementById("animColorAmp");
const animTypeSelect = document.getElementById("animType");
const animGridSizeSlider = document.getElementById("animGridSize");
const animGridPullSlider = document.getElementById("animGridPull");
const gradientFillSwitch = document.getElementById("gradientFill");
const invertGradientSwitch = document.getElementById("invertGradient");
const individualColorsSwitch = document.getElementById("individualColors");
const orderedColorsSwitch = document.getElementById("orderedColors");
const colorCountSlider = document.getElementById("colorCount");
const customMarkerInput = document.getElementById("customMarker");
const morphAmountSlider = document.getElementById("morphAmount");
const individualMorphSwitch = document.getElementById("individualMorph");
const morphSpeedSlider = document.getElementById("morphSpeed");
const yOffsetSlider = document.getElementById("yOffset");
const pathColorSelect = document.getElementById("pathColor");
const pathZIndexSwitch = document.getElementById("pathZIndex");
const showMarkersSwitch = document.getElementById("showMarkers");
const strokeJoinSelect = document.getElementById("strokeJoin");
const showGridSwitch = document.getElementById("showGrid");
const gridColorSelect = document.getElementById("gridColor");
const gridStrokeSlider = document.getElementById("gridStroke");
const gridOffsetSwitch = document.getElementById("gridOffset");
const nibAngleSlider = document.getElementById("nibAngle");
const savePresetBtn = document.getElementById("savePreset");
const loadPresetBtn = document.getElementById("loadPreset");
const presetFile = document.getElementById("presetFile");
const preset1Btn = document.getElementById("preset1");
const preset2Btn = document.getElementById("preset2");
const preset3Btn = document.getElementById("preset3");
const preset4Btn = document.getElementById("preset4");
const preset5Btn = document.getElementById("preset5");
const preset6Btn = document.getElementById("preset6");
const preset7Btn = document.getElementById("preset7");
let customMarkerSVG = null;
let animationFrame = null;
let startTime = null;
let morphAnimationFrame = null;
let morphStartTime = null;
let morphDirection = 1;

const exportStaticBtn = document.getElementById("exportStatic");

// Update display on input changes
fontSizeSlider.addEventListener("input", updateDisplay);
dotDensitySlider.addEventListener("input", updateDisplay);
dotSizeSlider.addEventListener("input", updateDisplay);
strokeWidthSlider.addEventListener("input", updateDisplay);
showPathSwitch.addEventListener("change", updateDisplay);
colorModeSwitch.addEventListener("change", () => {
  generateColors();
  updateDisplay();
});
crossThicknessSlider.addEventListener("input", updateDisplay);
rotateSwitch.addEventListener("change", updateDisplay);
rotate45Switch.addEventListener("change", updateDisplay);
spacingSlider.addEventListener("input", updateDisplay);
nibAngleSlider.addEventListener("input", updateDisplay);
darkModeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
gridSizeSlider.addEventListener("input", updateDisplay);
gridPullSlider.addEventListener("input", updateDisplay);
showGridSwitch.addEventListener("change", updateDisplay);
gridColorSelect.addEventListener("change", updateDisplay);
gridStrokeSlider.addEventListener("input", updateDisplay);
gridOffsetSwitch.addEventListener("change", updateDisplay);
animSpeedSlider.addEventListener("input", () => {
  if (parseFloat(animSpeedSlider.value) === 0) {
    cancelAnimationFrame(animationFrame);
    updateDisplay();
  } else {
    startAnimation();
  }
});
animAmpSlider.addEventListener("input", updateDisplay);
animRotAmpSlider.addEventListener("input", () => {
  // Enable rotate switch when ROT value is greater than 0
  if (parseFloat(animRotAmpSlider.value) > 0) {
    rotateSwitch.checked = true;
    // If current marker type is dots (0), switch to squares (4)
    if (markerType === 0) {
      markerType = 4;
      updateMarkerTypeUI();
    }
  }
  updateDisplay();
});
animColorAmpSlider.addEventListener("input", updateDisplay);
animTypeSelect.addEventListener("change", updateDisplay);
animGridSizeSlider.addEventListener("input", updateDisplay);
animGridPullSlider.addEventListener("input", updateDisplay);
gradientFillSwitch.addEventListener("change", updateDisplay);
invertGradientSwitch.addEventListener("change", () => {
  if (invertGradientSwitch.checked) {
    gradientFillSwitch.checked = true;
  }
  updateDisplay();
});
individualColorsSwitch.addEventListener("change", () => {
  generateColors();
  updateDisplay();
});
orderedColorsSwitch.addEventListener("change", () => {
  generateColors();
  updateDisplay();
});
colorCountSlider.addEventListener("input", () => {
  generateColors();
  updateDisplay();
});
customMarkerInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(
        event.target.result,
        "image/svg+xml"
      );
      customMarkerSVG = svgDoc.querySelector("svg");
      markerType = 2;
      updateMarkerTypeUI();
      updateDisplay();
    };
    reader.readAsText(file);
  }
});
textInput2.addEventListener("input", (e) => {
  generateColors();
  updateDisplay();
});
morphAmountSlider.addEventListener("input", updateDisplay);
individualMorphSwitch.addEventListener("change", updateDisplay);
morphSpeedSlider.addEventListener("input", () => {
  if (parseFloat(morphSpeedSlider.value) === 0) {
    cancelAnimationFrame(morphAnimationFrame);
  } else {
    startMorphAnimation();
  }
});
yOffsetSlider.addEventListener("input", updateDisplay);
pathColorSelect.addEventListener("change", updateDisplay);
pathZIndexSwitch.addEventListener("change", updateDisplay);
showMarkersSwitch.addEventListener("change", updateDisplay);
strokeJoinSelect.addEventListener("change", updateDisplay);

// Handle text input
textInput.addEventListener("input", (e) => {
  generateColors();
  updateDisplay();
});

textInput2.addEventListener("input", (e) => {
  generateColors();
  updateDisplay();
});

function interpolateColor(color1, color2, factor) {
  const r1 = parseInt(color1.slice(1, 3), 16);
  const g1 = parseInt(color1.slice(3, 5), 16);
  const b1 = parseInt(color1.slice(5, 7), 16);

  const r2 = parseInt(color2.slice(1, 3), 16);
  const g2 = parseInt(color2.slice(3, 5), 16);
  const b2 = parseInt(color2.slice(5, 7), 16);

  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);

  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

function getEffectivePalette(palette, targetCount) {
  // If target count is less than or equal to palette length, use direct colors
  if (targetCount <= palette.length) {
    return palette.slice(0, targetCount);
  }

  // Only interpolate if we need more colors than the palette provides
  const effectivePalette = [];
  const steps = targetCount - 1;
  const segments = palette.length - 1;

  for (let i = 0; i < targetCount; i++) {
    const position = i / steps;
    const segmentIndex = Math.floor(position * segments);
    const segmentPosition = position * segments - segmentIndex;

    const color1 = palette[segmentIndex];
    const color2 = palette[(segmentIndex + 1) % palette.length];

    effectivePalette.push(interpolateColor(color1, color2, segmentPosition));
  }

  return effectivePalette;
}

function getRandomColor() {
  let palette = COLOR_PALETTES[colorPaletteSelect.value];
  if (!palette) palette = COLOR_PALETTES["neon"];
  const colorCount = parseInt(colorCountSlider.value);
  const time = startTime ? (performance.now() - startTime) / 1000 : 0;
  const speed = parseFloat(animSpeedSlider.value) / 50;
  const colorAmp = parseFloat(animColorAmpSlider.value) / 20;
  const colorOffset = (time * speed * colorAmp) % 1;

  // If color count is less than or equal to palette length, use direct colors
  if (colorCount <= palette.length) {
    const offsetIndex = Math.floor(colorOffset * colorCount);
    return palette[offsetIndex % colorCount];
  }

  const effectivePalette = getEffectivePalette(palette, colorCount);

  if (orderedColorsSwitch.checked && individualColorsSwitch.checked) {
    const offsetIndex = Math.floor(colorOffset * effectivePalette.length);
    return effectivePalette[offsetIndex % effectivePalette.length];
  }
  return effectivePalette[Math.floor(Math.random() * effectivePalette.length)];
}

function generateColors() {
  charColors = {};
  if (colorModeSwitch.checked) {
    Array.from(textInput.value).forEach((char) => {
      if (fontData[char]) {
        if (individualColorsSwitch.checked) {
          const points = getPointsAlongPaths(
            fontData[char].paths,
            parseFloat(dotDensitySlider.value)
          );
          charColors[char] = {};
          let palette = COLOR_PALETTES[colorPaletteSelect.value];
          if (!palette) palette = COLOR_PALETTES["neon"];
          const colorCount = parseInt(colorCountSlider.value);
          const effectivePalette = getEffectivePalette(palette, colorCount);
          const time = startTime ? (performance.now() - startTime) / 1000 : 0;
          const speed = parseFloat(animSpeedSlider.value) / 50;
          const colorAmp = parseFloat(animColorAmpSlider.value) / 20;
          const colorOffset = (time * speed * colorAmp) % 1;

          for (let i = 0; i < points.length; i++) {
            if (orderedColorsSwitch.checked) {
              // Cycle through palette colors in order with offset
              const offsetIndex = Math.floor(
                (i + colorOffset * effectivePalette.length) %
                  effectivePalette.length
              );
              charColors[char][i] = effectivePalette[offsetIndex];
            } else {
              charColors[char][i] = getRandomColor();
            }
          }
        } else {
          charColors[char] = getRandomColor();
        }
      }
    });
  }
}

// Load and parse the SVG font
fetch("240415_Chesa.svg")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then((svgText) => {
    // Parse the SVG document
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgText, "image/svg+xml");

    // Find all glyph elements
    const glyphs = svgDoc.querySelectorAll("glyph");

    // Extract path data for each character
    glyphs.forEach((glyph) => {
      const unicode = glyph.getAttribute("unicode");
      if (unicode && unicode.length === 1) {
        const char = unicode;
        const path = glyph.getAttribute("d");
        const width = parseFloat(glyph.getAttribute("horiz-adv-x") || "1000");

        if (path) {
          // Split the path data into individual paths
          const paths = path.split(/(?=M)/).filter((p) => p.trim());

          fontData[char] = {
            paths: paths,
            width: width,
          };
        }
      }
    });

    generateColors();
    updateDisplay();
  })
  .catch((error) => {
    console.error("Error loading SVG font:", error);
  });

// Load the default font
loadFont("240415_Chesa.svg");

function getPointsAlongPaths(paths, spacing) {
  if (!paths || paths.length === 0) return [];

  const allPoints = [];

  paths.forEach((path) => {
    const pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute("d", path);
    const length = pathElement.getTotalLength();

    // Invert and scale the spacing value for wider range, with a minimum spacing of 0.001
    const adjustedSpacing = Math.max(0.001, (51 - spacing) * 1.5); // Convert from 0.1-50.999 to 75-0.0015
    const numPoints = Math.ceil(length / adjustedSpacing);
    const points = [];

    // Always add the start point
    points.push(pathElement.getPointAtLength(0));

    // Calculate the exact step size for even distribution between start and end
    const step = length / (numPoints - 1);

    // Get points at regular intervals (excluding start and end)
    for (let i = 1; i < numPoints - 1; i++) {
      const point = pathElement.getPointAtLength(i * step);
      points.push(point);
    }

    // Always add the end point
    points.push(pathElement.getPointAtLength(length));

    allPoints.push(...points);
  });

  return allPoints;
}

const colorPaletteSelect = document.getElementById("colorPalette");
const fontSelect = document.getElementById("fontSelect");

// Add font selection handler
fontSelect.addEventListener("change", () => {
  const selectedFont = fontSelect.value;
  loadFont(selectedFont);
});

// Function to load a font
function loadFont(fontName) {
  const fontPath =
    fontName === "240415_Chesa.svg" ? fontName : `hershey/${fontName}`;
  fetch(fontPath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((svgText) => {
      // Parse the SVG document
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, "image/svg+xml");

      // Find all glyph elements
      const glyphs = svgDoc.querySelectorAll("glyph");

      // Clear existing font data
      fontData = {};

      // Extract path data for each character
      glyphs.forEach((glyph) => {
        const unicode = glyph.getAttribute("unicode");
        if (unicode && unicode.length === 1) {
          const char = unicode;
          const path = glyph.getAttribute("d");
          const width = parseFloat(glyph.getAttribute("horiz-adv-x") || "1000");

          if (path) {
            // Split the path data into individual paths
            const paths = path.split(/(?=M)/).filter((p) => p.trim());

            fontData[char] = {
              paths: paths,
              width: width,
            };
          }
        }
      });

      generateColors();
      updateDisplay();
    })
    .catch((error) => {
      console.error("Error loading SVG font:", error);
    });
}

colorPaletteSelect.addEventListener("change", () => {
  generateColors();
  updateDisplay();
});

function getAnimationOffset(x, y, time, speed, amplitude, type) {
  if (speed === 0 || amplitude === 0) return { x: 0, y: 0 };

  const normalizedSpeed = speed / 10;
  const normalizedAmp = amplitude / 20;

  switch (type) {
    case "wave":
      const phaseX = x * 0.02;
      const phaseY = y * 0.02;
      return {
        x: Math.sin(time * normalizedSpeed + phaseX) * normalizedAmp,
        y: Math.cos(time * normalizedSpeed + phaseY) * normalizedAmp,
      };

    case "pulse":
      const phase = (x + y) * 0.01;
      const pulse = Math.sin(time * normalizedSpeed + phase) * normalizedAmp;
      return {
        x: pulse,
        y: pulse,
      };

    case "spiral":
      const angle = time * normalizedSpeed + (x + y) * 0.01;
      const radius =
        normalizedAmp * (1 + Math.sin(time * normalizedSpeed * 0.5) * 0.5);
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };

    case "bounce":
      const bounceX =
        Math.abs(Math.sin(time * normalizedSpeed + x * 0.01)) * normalizedAmp;
      const bounceY =
        Math.abs(Math.sin(time * normalizedSpeed * 1.2 + y * 0.01)) *
        normalizedAmp;
      return {
        x: bounceX,
        y: bounceY,
      };

    case "random":
      const randomX =
        Math.sin(time * normalizedSpeed + x * 0.01) *
        Math.cos(time * normalizedSpeed * 0.7 + y * 0.01) *
        normalizedAmp;
      const randomY =
        Math.cos(time * normalizedSpeed + y * 0.01) *
        Math.sin(time * normalizedSpeed * 0.7 + x * 0.01) *
        normalizedAmp;
      return {
        x: randomX,
        y: randomY,
      };

    default:
      return { x: 0, y: 0 };
  }
}

function getAnimationRotation(time, speed, amplitude, type, x, y) {
  if (speed === 0 || amplitude === 0) return 0;

  const normalizedSpeed = speed / 30; // Reduced from 10 to 30 for slower rotation
  const normalizedAmp = amplitude / 20;

  switch (type) {
    case "wave":
      return (
        Math.sin(time * normalizedSpeed + (x + y) * 0.01) * normalizedAmp * 30
      );
    case "pulse":
      return (
        Math.sin(time * normalizedSpeed + (x + y) * 0.01) * normalizedAmp * 30
      );
    case "spiral":
      return time * normalizedSpeed * 180 + (x + y) * 0.01;
    case "bounce":
      return (
        Math.abs(Math.sin(time * normalizedSpeed + (x + y) * 0.01)) *
        normalizedAmp *
        30
      );
    case "random":
      return (
        Math.sin(time * normalizedSpeed + x * 0.01) *
        Math.cos(time * normalizedSpeed * 0.7 + y * 0.01) *
        normalizedAmp *
        30
      );
    default:
      return 0;
  }
}

function createMarker(
  x,
  y,
  size,
  isCross,
  color,
  crossThickness,
  rotate,
  pathAngle
) {
  if (markerType === 5) {
    // Create nib marker
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

    let transform = "";
    if (rotate) {
      const time = startTime ? (performance.now() - startTime) / 1000 : 0;
      const animSpeed = parseFloat(animSpeedSlider.value);
      const animRotAmp = parseFloat(animRotAmpSlider.value);
      const animationType = animTypeSelect.value;
      const animRotation = getAnimationRotation(
        time,
        animSpeed,
        animRotAmp,
        animationType,
        x,
        y
      );
      transform += `rotate(${(pathAngle || 0) + animRotation},${x},${y})`;
    }
    if (rotate45Switch.checked) {
      transform += ` rotate(45,${x},${y})`;
    }
    if (transform) {
      group.setAttribute("transform", transform);
    }

    // Create nib rectangle
    const nib = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    const nibWidth = size * 4; // Make nib wider than tall
    const nibHeight = size * 0.5; // Make nib thin
    nib.setAttribute("x", x - nibWidth / 2);
    nib.setAttribute("y", y - nibHeight / 2);
    nib.setAttribute("width", nibWidth);
    nib.setAttribute("height", nibHeight);
    nib.setAttribute("rx", size * 0.2); // Slightly rounded corners
    nib.setAttribute("ry", size * 0.2);

    // Apply base rotation for nib angle
    const nibAngle = parseFloat(nibAngleSlider.value);
    nib.setAttribute("transform", `rotate(${nibAngle},${x},${y})`);

    if (gradientFillSwitch.checked) {
      // Create a unique ID for the gradient
      const gradientId = `gradient-${x}-${y}-nib`;

      // Create the gradient definition
      const gradient = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "radialGradient"
      );
      gradient.setAttribute("id", gradientId);
      gradient.setAttribute("cx", "50%");
      gradient.setAttribute("cy", "50%");
      gradient.setAttribute("r", "50%");
      gradient.setAttribute("fx", "50%");
      gradient.setAttribute("fy", "50%");

      // Add gradient stops
      const stop1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "stop"
      );
      stop1.setAttribute("offset", "0%");
      stop1.setAttribute("stop-color", color);
      stop1.setAttribute(
        "stop-opacity",
        invertGradientSwitch.checked ? "0.3" : "1"
      );

      const stop2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "stop"
      );
      stop2.setAttribute("offset", "100%");
      stop2.setAttribute("stop-color", color);
      stop2.setAttribute(
        "stop-opacity",
        invertGradientSwitch.checked ? "1" : "0.3"
      );

      gradient.appendChild(stop1);
      gradient.appendChild(stop2);

      // Add gradient to defs
      const defs = svgContainer.querySelector("svg defs");
      defs.appendChild(gradient);

      // Apply gradient to nib
      nib.setAttribute("fill", `url(#${gradientId})`);
    } else {
      nib.setAttribute("fill", color);
    }

    group.appendChild(nib);
    return group;
  } else if (markerType === 3 && customMarkerSVG) {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

    // Get the viewBox of the original SVG
    const viewBox = customMarkerSVG.getAttribute("viewBox");
    let width, height, viewBoxX, viewBoxY;

    if (viewBox) {
      [viewBoxX, viewBoxY, width, height] = viewBox.split(" ").map(Number);
    } else {
      // Fallback to bounding box if no viewBox
      const bbox = customMarkerSVG.getBBox();
      width = bbox.width;
      height = bbox.height;
      viewBoxX = bbox.x;
      viewBoxY = bbox.y;
    }

    // Calculate center point of the viewBox
    const centerX = viewBoxX + width / 2;
    const centerY = viewBoxY + height / 2;

    // Calculate scale to fit the specified size
    const maxDimension = Math.max(width, height);
    const scale = size / maxDimension;

    // Create a new SVG element with the same viewBox
    const newSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    if (viewBox) newSvg.setAttribute("viewBox", viewBox);

    // Function to recursively process SVG elements
    const processElement = (element) => {
      const newElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        element.tagName
      );

      // Copy all attributes
      Array.from(element.attributes).forEach((attr) => {
        newElement.setAttribute(attr.name, attr.value);
      });

      // Set fill color or gradient for all elements except those with fill="none"
      if (element.getAttribute("fill") !== "none") {
        if (gradientFillSwitch.checked) {
          // Create a unique ID for the gradient
          const gradientId = `gradient-${x}-${y}-${element.tagName}`;

          // Create the gradient definition
          const gradient = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "radialGradient"
          );
          gradient.setAttribute("id", gradientId);
          gradient.setAttribute("cx", "50%");
          gradient.setAttribute("cy", "50%");
          gradient.setAttribute("r", "50%");
          gradient.setAttribute("fx", "50%");
          gradient.setAttribute("fy", "50%");

          // Add gradient stops
          const stop1 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "stop"
          );
          stop1.setAttribute("offset", "0%");
          stop1.setAttribute("stop-color", color);
          stop1.setAttribute(
            "stop-opacity",
            invertGradientSwitch.checked ? "0.3" : "1"
          );

          const stop2 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "stop"
          );
          stop2.setAttribute("offset", "100%");
          stop2.setAttribute("stop-color", color);
          stop2.setAttribute(
            "stop-opacity",
            invertGradientSwitch.checked ? "1" : "0.3"
          );

          gradient.appendChild(stop1);
          gradient.appendChild(stop2);

          // Add gradient to defs
          const defs = svgContainer.querySelector("svg defs");
          defs.appendChild(gradient);

          // Apply gradient to element
          newElement.setAttribute("fill", `url(#${gradientId})`);
        } else {
          newElement.setAttribute("fill", color);
        }
      }

      // Remove stroke attributes
      newElement.removeAttribute("stroke");
      newElement.removeAttribute("stroke-width");

      // Process child elements
      Array.from(element.children).forEach((child) => {
        newElement.appendChild(processElement(child));
      });

      return newElement;
    };

    // Process the original SVG
    const processedSvg = processElement(customMarkerSVG);
    newSvg.appendChild(processedSvg);

    // Set transform-box and transform-origin for proper centering
    newSvg.style.transformBox = "fill-box";
    newSvg.setAttribute("transform-origin", "center");

    // Set the transform on the group to position and scale, accounting for the center point
    let transform = `translate(${x - centerX * scale},${
      y - centerY * scale
    }) scale(${scale})`;
    if (rotate) {
      const time = startTime ? (performance.now() - startTime) / 1000 : 0;
      const animSpeed = parseFloat(animSpeedSlider.value);
      const animRotAmp = parseFloat(animRotAmpSlider.value);
      const animationType = animTypeSelect.value;
      const animRotation = getAnimationRotation(
        time,
        animSpeed,
        animRotAmp,
        animationType,
        x,
        y
      );
      transform += ` rotate(${(pathAngle || 0) + animRotation},${x},${y})`;
    }
    if (rotate45Switch.checked) {
      transform += ` rotate(45,${x},${y})`;
    }
    group.setAttribute("transform", transform);
    group.appendChild(newSvg);

    return group;
  } else if (markerType === 2) {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

    // Create heart shape
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const scale = size / 20; // Scale the heart to match the size parameter

    // Heart path data
    path.setAttribute(
      "d",
      `M${x},${y - 5 * scale} 
            C${x - 5 * scale},${y - 10 * scale} 
            ${x - 10 * scale},${y - 5 * scale} 
            ${x - 10 * scale},${y} 
            C${x - 10 * scale},${y + 5 * scale} 
            ${x},${y + 10 * scale} 
            ${x},${y + 10 * scale} 
            C${x},${y + 10 * scale} 
            ${x + 10 * scale},${y + 5 * scale} 
            ${x + 10 * scale},${y} 
            C${x + 10 * scale},${y - 5 * scale} 
            ${x + 5 * scale},${y - 10 * scale} 
            ${x},${y - 5 * scale} 
            Z`
    );

    let transform = "";
    if (rotate) {
      const time = startTime ? (performance.now() - startTime) / 1000 : 0;
      const animSpeed = parseFloat(animSpeedSlider.value);
      const animRotAmp = parseFloat(animRotAmpSlider.value);
      const animationType = animTypeSelect.value;
      const animRotation = getAnimationRotation(
        time,
        animSpeed,
        animRotAmp,
        animationType,
        x,
        y
      );
      transform += `rotate(${(pathAngle || 0) + animRotation},${x},${y})`;
    }
    if (rotate45Switch.checked) {
      transform += ` rotate(45,${x},${y})`;
    }
    if (transform) {
      group.setAttribute("transform", transform);
    }

    if (gradientFillSwitch.checked) {
      // Create a unique ID for the gradient
      const gradientId = `gradient-${x}-${y}-heart`;

      // Create the gradient definition
      const gradient = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "radialGradient"
      );
      gradient.setAttribute("id", gradientId);
      gradient.setAttribute("cx", "50%");
      gradient.setAttribute("cy", "50%");
      gradient.setAttribute("r", "50%");
      gradient.setAttribute("fx", "50%");
      gradient.setAttribute("fy", "50%");

      // Add gradient stops
      const stop1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "stop"
      );
      stop1.setAttribute("offset", "0%");
      stop1.setAttribute("stop-color", color);
      stop1.setAttribute(
        "stop-opacity",
        invertGradientSwitch.checked ? "0.3" : "1"
      );

      const stop2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "stop"
      );
      stop2.setAttribute("offset", "100%");
      stop2.setAttribute("stop-color", color);
      stop2.setAttribute(
        "stop-opacity",
        invertGradientSwitch.checked ? "1" : "0.3"
      );

      gradient.appendChild(stop1);
      gradient.appendChild(stop2);

      // Add gradient to defs
      const defs = svgContainer.querySelector("svg defs");
      defs.appendChild(gradient);

      // Apply gradient to path
      path.setAttribute("fill", `url(#${gradientId})`);
    } else {
      path.setAttribute("fill", color);
    }

    group.appendChild(path);
    return group;
  } else if (markerType === 1) {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

    let transform = "";
    if (rotate) {
      const time = startTime ? (performance.now() - startTime) / 1000 : 0;
      const animSpeed = parseFloat(animSpeedSlider.value);
      const animRotAmp = parseFloat(animRotAmpSlider.value);
      const animationType = animTypeSelect.value;
      const animRotation = getAnimationRotation(
        time,
        animSpeed,
        animRotAmp,
        animationType,
        x,
        y
      );
      transform += `rotate(${(pathAngle || 0) + animRotation},${x},${y})`;
    }
    if (rotate45Switch.checked) {
      transform += ` rotate(45,${x},${y})`;
    }
    if (transform) {
      group.setAttribute("transform", transform);
    }

    // Create horizontal line
    const line1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    line1.setAttribute("x1", x - size);
    line1.setAttribute("y1", y);
    line1.setAttribute("x2", x + size);
    line1.setAttribute("y2", y);
    line1.setAttribute("stroke", color);
    line1.setAttribute("stroke-width", crossThickness);

    // Create vertical line
    const line2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    line2.setAttribute("x1", x);
    line2.setAttribute("y1", y - size);
    line2.setAttribute("x2", x);
    line2.setAttribute("y2", y + size);
    line2.setAttribute("stroke", color);
    line2.setAttribute("stroke-width", crossThickness);

    group.appendChild(line1);
    group.appendChild(line2);
    return group;
  } else if (markerType === 4) {
    // Create square marker
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

    let transform = "";
    if (rotate) {
      const time = startTime ? (performance.now() - startTime) / 1000 : 0;
      const animSpeed = parseFloat(animSpeedSlider.value);
      const animRotAmp = parseFloat(animRotAmpSlider.value);
      const animationType = animTypeSelect.value;
      const animRotation = getAnimationRotation(
        time,
        animSpeed,
        animRotAmp,
        animationType,
        x,
        y
      );
      transform += `rotate(${(pathAngle || 0) + animRotation},${x},${y})`;
    }
    if (rotate45Switch.checked) {
      transform += ` rotate(45,${x},${y})`;
    }
    if (transform) {
      group.setAttribute("transform", transform);
    }

    const square = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    const squareSize = size * 2; // Make squares slightly larger than dots
    square.setAttribute("x", x - squareSize / 2);
    square.setAttribute("y", y - squareSize / 2);
    square.setAttribute("width", squareSize);
    square.setAttribute("height", squareSize);

    if (gradientFillSwitch.checked) {
      // Create a unique ID for the gradient
      const gradientId = `gradient-${x}-${y}-square`;

      // Create the gradient definition
      const gradient = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "radialGradient"
      );
      gradient.setAttribute("id", gradientId);
      gradient.setAttribute("cx", "50%");
      gradient.setAttribute("cy", "50%");
      gradient.setAttribute("r", "50%");
      gradient.setAttribute("fx", "50%");
      gradient.setAttribute("fy", "50%");

      // Add gradient stops
      const stop1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "stop"
      );
      stop1.setAttribute("offset", "0%");
      stop1.setAttribute("stop-color", color);
      stop1.setAttribute(
        "stop-opacity",
        invertGradientSwitch.checked ? "0.3" : "1"
      );

      const stop2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "stop"
      );
      stop2.setAttribute("offset", "100%");
      stop2.setAttribute("stop-color", color);
      stop2.setAttribute(
        "stop-opacity",
        invertGradientSwitch.checked ? "1" : "0.3"
      );

      gradient.appendChild(stop1);
      gradient.appendChild(stop2);

      // Add gradient to defs
      const defs = svgContainer.querySelector("svg defs");
      defs.appendChild(gradient);

      // Apply gradient to square
      square.setAttribute("fill", `url(#${gradientId})`);
    } else {
      square.setAttribute("fill", color);
    }

    group.appendChild(square);
    return group;
  } else {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", size);

    // Apply color or gradient before any rotation
    if (gradientFillSwitch.checked) {
      // Create a unique ID for the gradient
      const gradientId = `gradient-${x}-${y}`;

      // Create the gradient definition
      const gradient = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "radialGradient"
      );
      gradient.setAttribute("id", gradientId);
      gradient.setAttribute("cx", "50%");
      gradient.setAttribute("cy", "50%");
      gradient.setAttribute("r", "50%");
      gradient.setAttribute("fx", "50%");
      gradient.setAttribute("fy", "50%");

      // Add gradient stops
      const stop1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "stop"
      );
      stop1.setAttribute("offset", "0%");
      stop1.setAttribute("stop-color", color);
      stop1.setAttribute(
        "stop-opacity",
        invertGradientSwitch.checked ? "0.3" : "1"
      );

      const stop2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "stop"
      );
      stop2.setAttribute("offset", "100%");
      stop2.setAttribute("stop-color", color);
      stop2.setAttribute(
        "stop-opacity",
        invertGradientSwitch.checked ? "1" : "0.3"
      );

      gradient.appendChild(stop1);
      gradient.appendChild(stop2);

      // Add gradient to defs
      const defs = svgContainer.querySelector("svg defs");
      defs.appendChild(gradient);

      // Apply gradient to circle
      circle.setAttribute("fill", `url(#${gradientId})`);
    } else {
      circle.setAttribute("fill", color);
    }

    if (rotate || rotate45Switch.checked) {
      const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      let transform = "";
      if (rotate) {
        const time = startTime ? (performance.now() - startTime) / 1000 : 0;
        const animSpeed = parseFloat(animSpeedSlider.value);
        const animRotAmp = parseFloat(animRotAmpSlider.value);
        const animationType = animTypeSelect.value;
        const animRotation = getAnimationRotation(
          time,
          animSpeed,
          animRotAmp,
          animationType,
          x,
          y
        );
        transform += `rotate(${(pathAngle || 0) + animRotation},${x},${y})`;
      }
      if (rotate45Switch.checked) {
        transform += ` rotate(45,${x},${y})`;
      }
      group.setAttribute("transform", transform);
      group.appendChild(circle);
      return group;
    }

    return circle;
  }
}

// Update the marker type state and event listeners
let markerType = 0; // 0 = dots, 1 = crosses, 2 = heart, 3 = custom SVG, 4 = squares, 5 = nib
const markerTypeDots = document.getElementById("markerTypeDots");
const markerTypeCrosses = document.getElementById("markerTypeCrosses");
const markerTypeHeart = document.getElementById("markerTypeHeart");
const markerTypeSquares = document.getElementById("markerTypeSquares");
const markerTypeNib = document.getElementById("markerTypeNib");
const markerTypeCustom = document.querySelector('label[for="customMarker"]');

function updateMarkerTypeUI() {
  markerTypeDots.classList.toggle("active", markerType === 0);
  markerTypeCrosses.classList.toggle("active", markerType === 1);
  markerTypeHeart.classList.toggle("active", markerType === 2);
  markerTypeSquares.classList.toggle("active", markerType === 4);
  markerTypeNib.classList.toggle("active", markerType === 5);
  markerTypeCustom.classList.toggle("active", markerType === 3);
}

markerTypeNib.addEventListener("click", () => {
  markerType = 5;
  updateMarkerTypeUI();
  updateDisplay();
});

markerTypeDots.addEventListener("click", () => {
  markerType = 0;
  updateMarkerTypeUI();
  updateDisplay();
});

markerTypeCrosses.addEventListener("click", () => {
  markerType = 1;
  updateMarkerTypeUI();
  updateDisplay();
});

markerTypeHeart.addEventListener("click", () => {
  markerType = 2;
  updateMarkerTypeUI();
  updateDisplay();
});

markerTypeSquares.addEventListener("click", () => {
  markerType = 4;
  updateMarkerTypeUI();
  updateDisplay();
});

markerTypeCustom.addEventListener("click", () => {
  if (customMarkerSVG) {
    markerType = 3;
    updateMarkerTypeUI();
    updateDisplay();
  }
});

customMarkerInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(
        event.target.result,
        "image/svg+xml"
      );
      customMarkerSVG = svgDoc.querySelector("svg");
      markerType = 2;
      updateMarkerTypeUI();
      updateDisplay();
    };
    reader.readAsText(file);
  }
});

// Initialize UI
updateMarkerTypeUI();

function snapToGrid(x, y, gridSize, pullStrength) {
  if (pullStrength === 0) return { x, y };

  const gridX = Math.round(x / gridSize) * gridSize;
  const gridY = Math.round(y / gridSize) * gridSize;

  // Calculate the pull based on strength (0-100)
  const pull = pullStrength / 100;

  return {
    x: x + (gridX - x) * pull,
    y: y + (gridY - y) * pull,
  };
}

function startAnimation() {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
  startTime = performance.now();
  animate();
}

function animate() {
  // Update color offset based on time and color amplitude
  const time = (performance.now() - startTime) / 1000;
  const speed = parseFloat(animSpeedSlider.value) / 50;
  const colorAmp = parseFloat(animColorAmpSlider.value) / 20;

  // Always regenerate colors if color mode is on and we have animation
  if (colorModeSwitch.checked && (colorAmp > 0 || speed > 0)) {
    generateColors();
  }

  updateDisplay();
  animationFrame = requestAnimationFrame(animate);
}

function updateDisplay() {
  if (Object.keys(fontData).length === 0) return;

  // Clear previous content
  svgContainer.innerHTML = "";

  // Create a new SVG element
  const newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  newSvg.setAttribute("width", "100%");
  newSvg.setAttribute("height", "100%");
  newSvg.setAttribute("viewBox", "0 0 1200 600");
  newSvg.setAttribute("preserveAspectRatio", "xMidYMid meet");

  // Create defs element for gradients if gradient fill is enabled
  if (gradientFillSwitch.checked) {
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    newSvg.appendChild(defs);
  }

  svgContainer.appendChild(newSvg);

  // Calculate total width of both words
  let totalWidth1 = 0;
  let totalWidth2 = 0;

  Array.from(textInput.value).forEach((char) => {
    if (char === " ") {
      totalWidth1 +=
        ((200 * parseFloat(fontSizeSlider.value)) / 1000) *
        parseFloat(spacingSlider.value);
    } else if (fontData[char]) {
      totalWidth1 +=
        ((fontData[char].width * parseFloat(fontSizeSlider.value)) / 1000) *
        parseFloat(spacingSlider.value);
    }
  });

  Array.from(textInput2.value).forEach((char) => {
    if (char === " ") {
      totalWidth2 +=
        ((200 * parseFloat(fontSizeSlider.value)) / 1000) *
        parseFloat(spacingSlider.value);
    } else if (fontData[char]) {
      totalWidth2 +=
        ((fontData[char].width * parseFloat(fontSizeSlider.value)) / 1000) *
        parseFloat(spacingSlider.value);
    }
  });

  // Calculate center positions for both words
  const centerX1 = 600 - totalWidth1 / 2;
  const centerX2 = 600 - totalWidth2 / 2;
  const y = document.body.classList.contains("fullscreen-output")
    ? 400 + parseFloat(yOffsetSlider.value)
    : 300 + parseFloat(yOffsetSlider.value); // Adjust Y position for fullscreen
  const fontSize = parseFloat(fontSizeSlider.value);
  const scale = fontSize / 1000;
  const dotSpacing = parseFloat(dotDensitySlider.value);
  const dotSize = parseFloat(dotSizeSlider.value);
  const strokeWidth = parseFloat(strokeWidthSlider.value);
  const isCross = markerType === 1;
  const showPath = showPathSwitch.checked;
  const isRGB = colorModeSwitch.checked;
  const crossThickness = parseFloat(crossThicknessSlider.value);
  const rotate = rotateSwitch.checked;
  let gridSize = parseFloat(gridSizeSlider.value);
  let gridPull = parseFloat(gridPullSlider.value);
  const animSpeed = parseFloat(animSpeedSlider.value);
  const animAmp = parseFloat(animAmpSlider.value);
  const animRotAmp = parseFloat(animRotAmpSlider.value);
  const animColorAmp = parseFloat(animColorAmpSlider.value);
  const animationType = animTypeSelect.value;
  const animGridSize = parseFloat(animGridSizeSlider.value);
  const animGridPull = parseFloat(animGridPullSlider.value);
  const time = startTime ? (performance.now() - startTime) / 1000 : 0;
  const morphAmount = parseFloat(morphAmountSlider.value) / 100;

  // Create morphed points
  const morphedPoints = [];

  if (
    individualMorphSwitch.checked &&
    textInput.value.length === textInput2.value.length
  ) {
    // Individual letter morphing
    let currentPoints1 = [];
    let currentPoints2 = [];

    // Split points into letters for first word
    let currentX1 = centerX1;
    Array.from(textInput.value).forEach((char) => {
      if (char === " ") {
        currentX1 += 200 * scale * parseFloat(spacingSlider.value);
      } else if (fontData[char]) {
        const charWidth =
          fontData[char].width * scale * parseFloat(spacingSlider.value);
        const charPoints = getPointsAlongPaths(
          fontData[char].paths,
          dotSpacing
        );
        currentPoints1.push({
          points: charPoints.map((p) => ({
            x: currentX1 + p.x * scale,
            y: y - p.y * scale,
          })),
          width: charWidth,
          char: char,
        });
        currentX1 += charWidth;
      }
    });

    // Split points into letters for second word
    let currentX2 = centerX2;
    Array.from(textInput2.value).forEach((char) => {
      if (char === " ") {
        currentX2 += 200 * scale * parseFloat(spacingSlider.value);
      } else if (fontData[char]) {
        const charWidth =
          fontData[char].width * scale * parseFloat(spacingSlider.value);
        const charPoints = getPointsAlongPaths(
          fontData[char].paths,
          dotSpacing
        );
        currentPoints2.push({
          points: charPoints.map((p) => ({
            x: currentX2 + p.x * scale,
            y: y - p.y * scale,
          })),
          width: charWidth,
          char: char,
        });
        currentX2 += charWidth;
      }
    });

    // Only proceed with morphing if we have points in both words
    if (currentPoints1.length > 0 && currentPoints2.length > 0) {
      // Morph each letter individually
      for (let i = 0; i < currentPoints1.length; i++) {
        const letter1 = currentPoints1[i];
        const letter2 = currentPoints2[i];

        // Calculate individual letter morph amount based on position
        const letterProgress = i / currentPoints1.length;
        const staggerAmount = 0.3;
        const letterMorphAmount = Math.max(
          0,
          Math.min(
            1,
            (morphAmount - letterProgress * staggerAmount) / (1 - staggerAmount)
          )
        );

        // Ensure both letters have the same number of points
        const maxPoints = Math.max(
          letter1.points.length,
          letter2.points.length
        );

        for (let j = 0; j < maxPoints; j++) {
          const point1 = letter1.points[j % letter1.points.length];
          const point2 = letter2.points[j % letter2.points.length];

          let dotColor = "black";
          if (isRGB) {
            if (individualColorsSwitch.checked) {
              const pointIndex = j % letter1.points.length;
              if (
                charColors[letter1.char] &&
                charColors[letter1.char][pointIndex]
              ) {
                dotColor = charColors[letter1.char][pointIndex];
              } else {
                dotColor = charColors[letter1.char] || "black";
              }
            } else {
              dotColor = charColors[letter1.char] || "black";
            }
          }

          morphedPoints.push({
            x: point1.x + (point2.x - point1.x) * letterMorphAmount,
            y: point1.y + (point2.y - point1.y) * letterMorphAmount,
            color: dotColor,
          });
        }
      }
    }
  } else {
    // Regular morphing
    let x1 = centerX1;
    let x2 = centerX2;

    // Get points for both words
    const points1 = [];
    const points2 = [];

    // Collect points for first word
    Array.from(textInput.value).forEach((char) => {
      if (char === " ") {
        x1 += 200 * scale * parseFloat(spacingSlider.value);
      } else if (fontData[char]) {
        const charWidth =
          fontData[char].width * scale * parseFloat(spacingSlider.value);
        const charPoints = getPointsAlongPaths(
          fontData[char].paths,
          dotSpacing
        );
        charPoints.forEach((point, pointIndex) => {
          points1.push({
            x: x1 + point.x * scale,
            y: y - point.y * scale,
            char: char,
            pointIndex: pointIndex,
          });
        });
        x1 += charWidth;
      }
    });

    // Collect points for second word
    Array.from(textInput2.value).forEach((char) => {
      if (char === " ") {
        x2 += 200 * scale * parseFloat(spacingSlider.value);
      } else if (fontData[char]) {
        const charWidth =
          fontData[char].width * scale * parseFloat(spacingSlider.value);
        const charPoints = getPointsAlongPaths(
          fontData[char].paths,
          dotSpacing
        );
        charPoints.forEach((point) => {
          points2.push({
            x: x2 + point.x * scale,
            y: y - point.y * scale,
          });
        });
        x2 += charWidth;
      }
    });

    // Only proceed with morphing if we have points in both words
    if (points1.length > 0 && points2.length > 0) {
      // Regular morphing
      const maxPoints = Math.max(points1.length, points2.length);

      for (let i = 0; i < maxPoints; i++) {
        const point1 = points1[i % points1.length];
        const point2 = points2[i % points2.length];

        let dotColor = "black";
        if (isRGB) {
          if (individualColorsSwitch.checked) {
            if (
              charColors[point1.char] &&
              charColors[point1.char][point1.pointIndex]
            ) {
              dotColor = charColors[point1.char][point1.pointIndex];
            } else {
              dotColor = charColors[point1.char] || "black";
            }
          } else {
            dotColor = charColors[point1.char] || "black";
          }
        }

        morphedPoints.push({
          x: point1.x + (point2.x - point1.x) * morphAmount,
          y: point1.y + (point2.y - point1.y) * morphAmount,
          color: dotColor,
        });
      }
    }
  }

  // Get path color
  let pathColor = "black";
  switch (pathColorSelect.value) {
    case "white":
      pathColor = "#FFFFFF";
      break;
    case "red":
      pathColor = "#FF0000";
      break;
    case "blue":
      pathColor = "#0000FF";
      break;
    case "green":
      pathColor = "#00FF00";
      break;
    default:
      pathColor = "#000000";
  }

  // Create markers for morphed points
  if (showMarkersSwitch.checked) {
    morphedPoints.forEach((point, index) => {
      let dotX = point.x;
      let dotY = point.y;

      // Calculate path angle for rotation if needed
      let pathAngle = 0;
      if (rotate) {
        // Find the start and end of the current path within the letter
        let pathStart = index;
        let pathEnd = index;

        // Find the start of this path
        while (
          pathStart > 0 &&
          morphedPoints[pathStart].char === morphedPoints[pathStart - 1].char &&
          morphedPoints[pathStart].pathIndex ===
            morphedPoints[pathStart - 1].pathIndex
        ) {
          pathStart--;
        }

        // Find the end of this path
        while (
          pathEnd < morphedPoints.length - 1 &&
          morphedPoints[pathEnd].char === morphedPoints[pathEnd + 1].char &&
          morphedPoints[pathEnd].pathIndex ===
            morphedPoints[pathEnd + 1].pathIndex
        ) {
          pathEnd++;
        }

        if (index === pathStart) {
          // First point of path - use next point
          const nextPoint = morphedPoints[index + 1];
          const dx = nextPoint.x - point.x;
          const dy = nextPoint.y - point.y;
          pathAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        } else if (index === pathEnd) {
          // Last point of path - use previous point
          const prevPoint = morphedPoints[index - 1];
          const dx = point.x - prevPoint.x;
          const dy = point.y - prevPoint.y;
          pathAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        } else {
          // Middle point - use next point
          const nextPoint = morphedPoints[index + 1];
          const dx = nextPoint.x - point.x;
          const dy = nextPoint.y - point.y;
          pathAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        }
      }

      // Apply grid snapping if pull strength > 0
      if (gridPull > 0 || animGridPull > 0) {
        const currentGridSize =
          animGridSize > 0
            ? gridSize + Math.sin(time * animSpeed * 0.5) * animGridSize
            : gridSize;
        const currentGridPull =
          animGridPull > 0
            ? gridPull + Math.sin(time * animSpeed * 0.5) * animGridPull
            : gridPull;
        const snapped = snapToGrid(
          dotX,
          dotY,
          currentGridSize,
          currentGridPull
        );
        dotX = snapped.x;
        dotY = snapped.y;
      }

      // Apply position animation if enabled
      if (animSpeed > 0 && animAmp > 0) {
        const animOffset = getAnimationOffset(
          dotX,
          dotY,
          time,
          animSpeed,
          animAmp,
          animationType
        );
        dotX += animOffset.x;
        dotY += animOffset.y;
      }

      // Apply rotation animation
      if (animSpeed > 0 && animRotAmp > 0) {
        const animRotation = getAnimationRotation(
          time,
          animSpeed,
          animRotAmp,
          animationType,
          dotX,
          dotY
        );
        pathAngle += animRotation;
      }

      // Apply color animation
      if (animSpeed > 0 && animColorAmp > 0) {
        const colorOffset = ((time * animSpeed * animColorAmp) / 1000) % 1;
        // Don't call generateColors() here
        // The color will be updated in the next frame
      }

      const marker = createMarker(
        dotX,
        dotY,
        dotSize,
        isCross,
        point.color,
        crossThickness,
        rotate,
        pathAngle
      );
      newSvg.appendChild(marker);
    });
  }

  // Create path if showPath is enabled
  if (showPathSwitch.checked) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let pathData = "";
    let currentLetterPoints = [];
    let currentLetter = null;
    let currentPathIndex = 0;

    morphedPoints.forEach((point, index) => {
      let x = point.x;
      let y = point.y;

      // Apply grid snapping if needed
      if (gridPull > 0 || animGridPull > 0) {
        const currentGridSize =
          animGridSize > 0
            ? gridSize + Math.sin(time * animSpeed * 0.5) * animGridSize
            : gridSize;
        const currentGridPull =
          animGridPull > 0
            ? gridPull + Math.sin(time * animSpeed * 0.5) * animGridPull
            : gridPull;
        const snapped = snapToGrid(x, y, currentGridSize, currentGridPull);
        x = snapped.x;
        y = snapped.y;
      }

      // Apply animation if needed
      if (animSpeed > 0 && animAmp > 0) {
        const animOffset = getAnimationOffset(
          x,
          y,
          time,
          animSpeed,
          animAmp,
          animationType
        );
        x += animOffset.x;
        y += animOffset.y;
      }

      // Check if we're starting a new letter
      if (point.char !== currentLetter) {
        // If we have points from the previous letter, add them to the path
        if (currentLetterPoints.length > 0) {
          pathData += currentLetterPoints
            .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
            .join("");
        }
        // Start new letter
        currentLetter = point.char;
        currentLetterPoints = [];
        currentPathIndex = 0;
      }

      // Add point to current letter's points
      currentLetterPoints.push({ x, y });

      // If this is the last point of a path within a letter, add a move command
      if (
        point.pathIndex !== undefined &&
        point.pathIndex !== currentPathIndex
      ) {
        pathData += currentLetterPoints
          .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
          .join("");
        currentLetterPoints = [];
        currentPathIndex = point.pathIndex;
      }
    });

    // Add the last letter's points
    if (currentLetterPoints.length > 0) {
      pathData += currentLetterPoints
        .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
        .join("");
    }

    path.setAttribute("d", pathData);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", pathColor);
    path.setAttribute("stroke-width", strokeWidthSlider.value);
    path.setAttribute("stroke-linejoin", strokeJoinSelect.value);

    // Add path to SVG based on z-index setting
    if (pathZIndexSwitch.checked) {
      // Path in front
      newSvg.appendChild(path);
    } else {
      // Path behind
      newSvg.insertBefore(path, newSvg.firstChild);
    }
  }

  // Create grid if showGrid is enabled
  if (showGridSwitch.checked) {
    const grid = document.createElementNS("http://www.w3.org/2000/svg", "g");

    // Get grid color
    let gridColor = "black";
    switch (gridColorSelect.value) {
      case "white":
        gridColor = "#FFFFFF";
        break;
      case "red":
        gridColor = "#FF0000";
        break;
      case "blue":
        gridColor = "#0000FF";
        break;
      case "green":
        gridColor = "#00FF00";
        break;
      default:
        gridColor = "#000000";
    }

    const gridStroke = parseFloat(gridStrokeSlider.value);
    const width = 1200;
    const height = 600;
    const padding = gridStroke;
    const offset = gridOffsetSwitch.checked ? gridSize / 2 : 0;

    // Create vertical lines
    for (
      let x = -padding + 1 + offset;
      x <= width + padding + 1;
      x += gridSize
    ) {
      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      line.setAttribute("x1", x);
      line.setAttribute("y1", 0);
      line.setAttribute("x2", x);
      line.setAttribute("y2", height);
      line.setAttribute("stroke", gridColor);
      line.setAttribute("stroke-width", gridStroke);
      grid.appendChild(line);
    }

    // Create horizontal lines
    for (
      let y = -padding + 1 + offset;
      y <= height + padding + 1;
      y += gridSize
    ) {
      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      line.setAttribute("x1", 0);
      line.setAttribute("y1", y);
      line.setAttribute("x2", width);
      line.setAttribute("y2", y);
      line.setAttribute("stroke", gridColor);
      line.setAttribute("stroke-width", gridStroke);
      grid.appendChild(line);
    }

    // Add grid to SVG
    newSvg.insertBefore(grid, newSvg.firstChild);
  }
}

// Initialize animation if speed is not zero
if (parseFloat(animSpeedSlider.value) > 0) {
  startAnimation();
}

// Set default values
darkModeSwitch.checked = false;
document.body.classList.remove("dark");

colorModeSwitch.checked = true;

function downloadSVG(svgString, filename) {
  const blob = new Blob([svgString], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function getCurrentSVG() {
  const svg = svgContainer.querySelector("svg");
  // Create a clone of the SVG to avoid affecting the display
  const exportSvg = svg.cloneNode(true);

  // Add timestamp to SVG
  const timestamp = new Date().toISOString();
  const comment = document.createComment(` Generated on ${timestamp} `);
  exportSvg.insertBefore(comment, exportSvg.firstChild);

  // Add viewBox and preserveAspectRatio attributes for better compatibility
  exportSvg.setAttribute("width", "1200");
  exportSvg.setAttribute("height", "600");
  exportSvg.setAttribute("viewBox", "0 0 1200 600");
  exportSvg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  exportSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  exportSvg.setAttribute("version", "1.1");

  return exportSvg ? exportSvg.outerHTML : "";
}

exportStaticBtn.addEventListener("click", () => {
  const svgString = getCurrentSVG();
  if (svgString) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    downloadSVG(svgString, `svg-export-${timestamp}.svg`);
  }
});

// Update colors when density changes
dotDensitySlider.addEventListener("input", () => {
  if (colorModeSwitch.checked && individualColorsSwitch.checked) {
    generateColors();
  }
  updateDisplay();
});

function startMorphAnimation() {
  if (morphAnimationFrame) {
    cancelAnimationFrame(morphAnimationFrame);
  }
  morphStartTime = performance.now();
  animateMorph();
}

function animateMorph() {
  // Use exponential scaling for speed to make higher values more dramatic
  const rawSpeed = parseFloat(morphSpeedSlider.value);
  const speed = Math.pow(rawSpeed / 50, 2) * 2; // Faster at higher values

  const time = (performance.now() - morphStartTime) / 1000;

  // Calculate morph amount using sine wave
  const morphAmount = (Math.sin(time * speed * Math.PI) + 1) / 2;

  // Update the morph slider value
  morphAmountSlider.value = morphAmount * 100;

  // Update the display
  updateDisplay();

  // Continue animation
  morphAnimationFrame = requestAnimationFrame(animateMorph);
}

// Update display on input changes
animGridSizeSlider.addEventListener("input", updateDisplay);
animGridPullSlider.addEventListener("input", updateDisplay);

// Add keyboard event listener for randomization
document.addEventListener("keydown", (e) => {
  // Don't trigger if the event is from a text input
  if (e.target.tagName === "INPUT" && e.target.type === "text") {
    return;
  }
  if (e.key.toLowerCase() === "r") {
    // Randomize settings
    fontSizeSlider.value = Math.floor(Math.random() * (1000 - 50) + 50);
    spacingSlider.value = (Math.random() * 1.5 + 0.5).toFixed(1);
    dotDensitySlider.value = (Math.random() * 49 + 1).toFixed(1);
    dotSizeSlider.value = (Math.random() * 49 + 1).toFixed(1);
    crossThicknessSlider.value = (Math.random() * 49 + 1).toFixed(1);
    strokeWidthSlider.value = (Math.random() * 19.9 + 0.1).toFixed(1);
    gridSizeSlider.value = Math.floor(Math.random() * 16 + 5);
    gridPullSlider.value = Math.floor(Math.random() * 101);
    animSpeedSlider.value = Math.floor(Math.random() * 101);
    animAmpSlider.value = Math.floor(Math.random() * 501);
    animRotAmpSlider.value = Math.floor(Math.random() * 501);
    animColorAmpSlider.value = Math.floor(Math.random() * 51);
    animGridSizeSlider.value = Math.floor(Math.random() * 101);
    animGridPullSlider.value = Math.floor(Math.random() * 101);
    morphAmountSlider.value = Math.floor(Math.random() * 101);
    morphSpeedSlider.value = Math.floor(Math.random() * 101);
    nibAngleSlider.value = Math.floor(Math.random() * 181);

    // Randomize switches
    showPathSwitch.checked = Math.random() > 0.5;
    rotateSwitch.checked = Math.random() > 0.5;
    rotate45Switch.checked = Math.random() > 0.5;
    gradientFillSwitch.checked = Math.random() > 0.5;
    invertGradientSwitch.checked = Math.random() > 0.5;
    individualColorsSwitch.checked = Math.random() > 0.5;
    orderedColorsSwitch.checked = Math.random() > 0.5;
    showGridSwitch.checked = Math.random() > 0.5;
    gridOffsetSwitch.checked = Math.random() > 0.5;
    individualMorphSwitch.checked = Math.random() > 0.5;
    colorModeSwitch.checked = Math.random() > 0.5;

    // Randomize selects
    const animTypes = ["wave", "pulse", "spiral", "bounce", "random"];
    animTypeSelect.value =
      animTypes[Math.floor(Math.random() * animTypes.length)];

    const strokeJoins = ["round", "miter", "bevel"];
    strokeJoinSelect.value =
      strokeJoins[Math.floor(Math.random() * strokeJoins.length)];

    const pathColors = ["black", "white", "red", "blue", "green"];
    pathColorSelect.value =
      pathColors[Math.floor(Math.random() * pathColors.length)];

    const gridColors = ["black", "white", "red", "blue", "green"];
    gridColorSelect.value =
      gridColors[Math.floor(Math.random() * gridColors.length)];

    const colorPalettes = Object.keys(COLOR_PALETTES);
    const randomPalette =
      colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    colorPaletteSelect.value = randomPalette;

    // Randomize marker type
    const markerTypes = [0, 1, 2, 4, 5]; // Exclude custom (3)
    markerType = markerTypes[Math.floor(Math.random() * markerTypes.length)];
    updateMarkerTypeUI();

    // Update display
    if (colorModeSwitch.checked) {
      generateColors();
    }
    updateDisplay();
  }
});

// Add keyboard event listener for fullscreen output
document.addEventListener("keydown", (e) => {
  // Don't trigger if the event is from a text input
  if (e.target.tagName === "INPUT" && e.target.type === "text") {
    return;
  }
  if (e.key.toLowerCase() === "f") {
    document.body.classList.toggle("fullscreen-output");
  }
});

// Function to apply settings from a preset
function applySettings(settings) {
  fontSizeSlider.value = settings.fontSize;
  spacingSlider.value = settings.spacing;
  dotDensitySlider.value = settings.dotDensity;
  dotSizeSlider.value = settings.dotSize;
  crossThicknessSlider.value = settings.crossThickness;
  strokeWidthSlider.value = settings.strokeWidth;
  gridSizeSlider.value = settings.gridSize;
  gridPullSlider.value = settings.gridPull;
  animSpeedSlider.value = settings.animSpeed;
  animAmpSlider.value = settings.animAmp;
  animRotAmpSlider.value = settings.animRotAmp;
  animColorAmpSlider.value = settings.animColorAmp;
  animGridSizeSlider.value = settings.animGridSize;
  animGridPullSlider.value = settings.animGridPull;
  morphAmountSlider.value = settings.morphAmount;
  morphSpeedSlider.value = settings.morphSpeed;
  nibAngleSlider.value = settings.nibAngle;
  showPathSwitch.checked = settings.showPath;
  rotateSwitch.checked = settings.rotate;
  rotate45Switch.checked = settings.rotate45;
  gradientFillSwitch.checked = settings.gradientFill;
  invertGradientSwitch.checked = settings.invertGradient;
  individualColorsSwitch.checked = settings.individualColors;
  orderedColorsSwitch.checked = settings.orderedColors;
  showGridSwitch.checked = settings.showGrid;
  gridOffsetSwitch.checked = settings.gridOffset;
  individualMorphSwitch.checked = settings.individualMorph;
  colorModeSwitch.checked = settings.colorMode;
  animTypeSelect.value = settings.animType;
  strokeJoinSelect.value = settings.strokeJoin;
  pathColorSelect.value = settings.pathColor;
  gridColorSelect.value = settings.gridColor;
  colorPaletteSelect.value = settings.colorPalette;
  markerType = settings.markerType;
  showMarkersSwitch.checked = settings.showMarkers;
  yOffsetSlider.value = settings.yOffset;
  gridStrokeSlider.value = settings.gridStroke;
  pathZIndexSwitch.checked = settings.pathZIndex;
  colorCountSlider.value = settings.colorCount;
  darkModeSwitch.checked = settings.darkMode;

  // Update marker type UI
  updateMarkerTypeUI();

  // Update dark mode
  if (settings.darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  // Generate colors if color mode is on
  if (settings.colorMode) {
    generateColors();
  }

  // Start morph animation if morph speed is non-zero
  if (parseFloat(settings.morphSpeed) > 0) {
    startMorphAnimation();
  } else {
    // Stop morph animation if speed is zero
    if (morphAnimationFrame) {
      cancelAnimationFrame(morphAnimationFrame);
    }
  }
}

// Simplified preset handling
const presets = {
  1: {
    fontSize: "240",
    spacing: "1",
    dotDensity: "25",
    dotSize: "3.5",
    crossThickness: "1",
    strokeWidth: "5",
    gridSize: "20",
    gridPull: "0",
    animSpeed: "20",
    animAmp: "0",
    animRotAmp: "110",
    animColorAmp: "0",
    animGridSize: "0",
    animGridPull: "0",
    morphAmount: "0",
    morphSpeed: "0",
    nibAngle: "0",
    showPath: false,
    rotate: false,
    rotate45: false,
    gradientFill: false,
    invertGradient: false,
    individualColors: true,
    orderedColors: true,
    showGrid: false,
    gridOffset: true,
    individualMorph: false,
    colorMode: true,
    animType: "wave",
    strokeJoin: "round",
    pathColor: "black",
    gridColor: "black",
    colorPalette: "neon",
    markerType: 0,
    showMarkers: true,
    yOffset: "0",
    gridStroke: "1.1",
    pathZIndex: false,
    colorCount: "8",
    darkMode: false,
  },
  2: {
    fontSize: "240",
    spacing: "1",
    dotDensity: "24",
    dotSize: "25.5",
    crossThickness: "1",
    strokeWidth: "5",
    gridSize: "20",
    gridPull: "0",
    animSpeed: "20",
    animAmp: "0",
    animRotAmp: "107",
    animColorAmp: "9",
    animGridSize: "0",
    animGridPull: "0",
    morphAmount: "78",
    morphSpeed: "25",
    nibAngle: "0",
    showPath: false,
    rotate: true,
    rotate45: true,
    gradientFill: true,
    invertGradient: true,
    individualColors: true,
    orderedColors: true,
    showGrid: false,
    gridOffset: true,
    individualMorph: true,
    colorMode: true,
    animType: "spiral",
    strokeJoin: "round",
    pathColor: "black",
    gridColor: "black",
    colorPalette: "pink",
    markerType: 2,
    showMarkers: true,
    yOffset: "0",
    gridStroke: "1.1",
    pathZIndex: false,
    colorCount: "88",
    darkMode: false,
  },
  3: {
    fontSize: "270",
    spacing: "1",
    dotDensity: "26",
    dotSize: "21.5",
    crossThickness: "1",
    strokeWidth: "5",
    gridSize: "20",
    gridPull: "0",
    animSpeed: "20",
    animAmp: "0",
    animRotAmp: "0",
    animColorAmp: "13",
    animGridSize: "0",
    animGridPull: "0",
    morphAmount: "0",
    morphSpeed: "0",
    nibAngle: "90",
    showPath: false,
    rotate: false,
    rotate45: false,
    gradientFill: false,
    invertGradient: false,
    individualColors: true,
    orderedColors: true,
    showGrid: false,
    gridOffset: true,
    individualMorph: false,
    colorMode: true,
    animType: "wave",
    strokeJoin: "round",
    pathColor: "black",
    gridColor: "black",
    colorPalette: "ocean",
    markerType: 5,
    showMarkers: true,
    yOffset: "23",
    gridStroke: "1.1",
    pathZIndex: false,
    colorCount: "77",
    darkMode: false,
  },
  4: {
    fontSize: "240",
    spacing: "1",
    dotDensity: "26",
    dotSize: "9.5",
    crossThickness: "6.5",
    strokeWidth: "5",
    gridSize: "20",
    gridPull: "100",
    animSpeed: "27",
    animAmp: "0",
    animRotAmp: "0",
    animColorAmp: "0",
    animGridSize: "0",
    animGridPull: "0",
    morphAmount: "46",
    morphSpeed: "28",
    nibAngle: "0",
    showPath: true,
    rotate: false,
    rotate45: true,
    gradientFill: true,
    invertGradient: true,
    individualColors: true,
    orderedColors: true,
    showGrid: false,
    gridOffset: true,
    individualMorph: false,
    colorMode: true,
    animType: "wave",
    strokeJoin: "round",
    pathColor: "black",
    gridColor: "black",
    colorPalette: "mondrian",
    markerType: 0,
    showMarkers: true,
    yOffset: "6",
    gridStroke: "1.1",
    pathZIndex: true,
    colorCount: "15",
    darkMode: false,
  },
  5: {
    fontSize: "240",
    spacing: "1",
    dotDensity: "25",
    dotSize: "14.5",
    crossThickness: "1",
    strokeWidth: "5",
    gridSize: "20",
    gridPull: "0",
    animSpeed: "11",
    animAmp: "0",
    animRotAmp: "305",
    animColorAmp: "0",
    animGridSize: "0",
    animGridPull: "0",
    morphAmount: "0",
    morphSpeed: "0",
    nibAngle: "0",
    showPath: false,
    rotate: true,
    rotate45: true,
    gradientFill: false,
    invertGradient: false,
    individualColors: true,
    orderedColors: true,
    showGrid: false,
    gridOffset: true,
    individualMorph: false,
    colorMode: true,
    animType: "spiral",
    strokeJoin: "round",
    pathColor: "black",
    gridColor: "black",
    colorPalette: "mountains",
    markerType: 1,
    showMarkers: true,
    yOffset: "0",
    gridStroke: "1.1",
    pathZIndex: false,
    colorCount: "8",
    darkMode: true,
  },
  6: {
    fontSize: "300",
    spacing: "1.1",
    dotDensity: "24",
    dotSize: "21",
    crossThickness: "1",
    strokeWidth: "5",
    gridSize: "20",
    gridPull: "0",
    animSpeed: "20",
    animAmp: "290",
    animRotAmp: "0",
    animColorAmp: "29",
    animGridSize: "0",
    animGridPull: "0",
    morphAmount: "0",
    morphSpeed: "0",
    nibAngle: "0",
    showPath: false,
    rotate: false,
    rotate45: false,
    gradientFill: true,
    invertGradient: true,
    individualColors: true,
    orderedColors: true,
    showGrid: false,
    gridOffset: true,
    individualMorph: false,
    colorMode: true,
    animType: "bounce",
    strokeJoin: "round",
    pathColor: "black",
    gridColor: "black",
    colorPalette: "rainbow",
    markerType: 5,
    showMarkers: true,
    yOffset: "23",
    gridStroke: "1.1",
    pathZIndex: false,
    colorCount: "23",
    darkMode: false,
  },
  7: {
    fontSize: "240",
    spacing: "0.9",
    dotDensity: "26",
    dotSize: "14.5",
    crossThickness: "1.5",
    strokeWidth: "5",
    gridSize: "11",
    gridPull: "100",
    animSpeed: "20",
    animAmp: "0",
    animRotAmp: "0",
    animColorAmp: "0",
    animGridSize: "0",
    animGridPull: "0",
    morphAmount: "1",
    morphSpeed: "18",
    nibAngle: "90",
    showPath: false,
    rotate: false,
    rotate45: false,
    gradientFill: false,
    invertGradient: false,
    individualColors: true,
    orderedColors: true,
    showGrid: false,
    gridOffset: true,
    individualMorph: true,
    colorMode: true,
    animType: "bounce",
    strokeJoin: "round",
    pathColor: "black",
    gridColor: "black",
    colorPalette: "white",
    markerType: 5,
    showMarkers: true,
    yOffset: "0",
    gridStroke: "1.1",
    pathZIndex: false,
    colorCount: "8",
    darkMode: true,
  },
  8: {
    fontSize: "380",
    spacing: "1",
    dotDensity: "28",
    dotSize: "1.5",
    crossThickness: "1",
    strokeWidth: "0.8",
    gridSize: "11",
    gridPull: "0",
    animSpeed: "20",
    animAmp: "0",
    animRotAmp: "110",
    animColorAmp: "0",
    animGridSize: "0",
    animGridPull: "0",
    morphAmount: "84",
    morphSpeed: "18",
    nibAngle: "0",
    showPath: true,
    rotate: false,
    rotate45: true,
    gradientFill: false,
    invertGradient: false,
    individualColors: true,
    orderedColors: true,
    showGrid: false,
    gridOffset: true,
    individualMorph: true,
    colorMode: true,
    animType: "bounce",
    strokeJoin: "bevel",
    pathColor: "blue",
    gridColor: "black",
    colorPalette: "green",
    markerType: 0,
    showMarkers: true,
    yOffset: "23",
    gridStroke: "1.1",
    pathZIndex: false,
    colorCount: "163",
    darkMode: true,
  },
};

// Simple function to load a preset
function loadPreset(presetNumber) {
  const preset = presets[presetNumber];
  if (preset) {
    applySettings(preset);
    // Update UI
    [
      preset1Btn,
      preset2Btn,
      preset3Btn,
      preset4Btn,
      preset5Btn,
      preset6Btn,
      preset7Btn,
      document.getElementById("preset8"),
    ].forEach((btn) => btn.classList.remove("active"));
    document.getElementById(`preset${presetNumber}`).classList.add("active");
    updateDisplay();
  }
}

// Simple function to save current settings as a preset
function savePreset(presetNumber) {
  const settings = {
    fontSize: fontSizeSlider.value,
    spacing: spacingSlider.value,
    dotDensity: dotDensitySlider.value,
    dotSize: dotSizeSlider.value,
    crossThickness: crossThicknessSlider.value,
    strokeWidth: strokeWidthSlider.value,
    gridSize: gridSizeSlider.value,
    gridPull: gridPullSlider.value,
    animSpeed: animSpeedSlider.value,
    animAmp: animAmpSlider.value,
    animRotAmp: animRotAmpSlider.value,
    animColorAmp: animColorAmpSlider.value,
    animGridSize: animGridSizeSlider.value,
    animGridPull: animGridPullSlider.value,
    morphAmount: morphAmountSlider.value,
    morphSpeed: morphSpeedSlider.value,
    nibAngle: nibAngleSlider.value,
    showPath: showPathSwitch.checked,
    rotate: rotateSwitch.checked,
    rotate45: rotate45Switch.checked,
    gradientFill: gradientFillSwitch.checked,
    invertGradient: invertGradientSwitch.checked,
    individualColors: individualColorsSwitch.checked,
    orderedColors: orderedColorsSwitch.checked,
    showGrid: showGridSwitch.checked,
    gridOffset: gridOffsetSwitch.checked,
    individualMorph: individualMorphSwitch.checked,
    colorMode: colorModeSwitch.checked,
    animType: animTypeSelect.value,
    strokeJoin: strokeJoinSelect.value,
    pathColor: pathColorSelect.value,
    gridColor: gridColorSelect.value,
    colorPalette: colorPaletteSelect.value,
    markerType: markerType,
    showMarkers: showMarkersSwitch.checked,
    yOffset: yOffsetSlider.value,
    gridStroke: gridStrokeSlider.value,
    pathZIndex: pathZIndexSwitch.checked,
    colorCount: colorCountSlider.value,
    darkMode: darkModeSwitch.checked,
  };
  presets[presetNumber] = settings;
}

// Update preset button click handlers
preset1Btn.addEventListener("click", (event) => {
  if (event.shiftKey) {
    savePreset(1);
  } else {
    loadPreset(1);
  }
});

preset2Btn.addEventListener("click", (event) => {
  if (event.shiftKey) {
    savePreset(2);
  } else {
    loadPreset(2);
  }
});

preset3Btn.addEventListener("click", (event) => {
  if (event.shiftKey) {
    savePreset(3);
  } else {
    loadPreset(3);
  }
});

preset4Btn.addEventListener("click", (event) => {
  if (event.shiftKey) {
    savePreset(4);
  } else {
    loadPreset(4);
  }
});

preset5Btn.addEventListener("click", (event) => {
  if (event.shiftKey) {
    savePreset(5);
  } else {
    loadPreset(5);
  }
});

preset6Btn.addEventListener("click", (event) => {
  if (event.shiftKey) {
    savePreset(6);
  } else {
    loadPreset(6);
  }
});

preset7Btn.addEventListener("click", (event) => {
  if (event.shiftKey) {
    savePreset(7);
  } else {
    loadPreset(7);
  }
});

// Load preset 1 on page load
document.addEventListener("DOMContentLoaded", () => {
  loadPreset(1);
});

// Add event listeners for save and load preset buttons
savePresetBtn.addEventListener("click", () => {
  const settings = {
    fontSize: fontSizeSlider.value,
    spacing: spacingSlider.value,
    dotDensity: dotDensitySlider.value,
    dotSize: dotSizeSlider.value,
    crossThickness: crossThicknessSlider.value,
    strokeWidth: strokeWidthSlider.value,
    gridSize: gridSizeSlider.value,
    gridPull: gridPullSlider.value,
    animSpeed: animSpeedSlider.value,
    animAmp: animAmpSlider.value,
    animRotAmp: animRotAmpSlider.value,
    animColorAmp: animColorAmpSlider.value,
    animGridSize: animGridSizeSlider.value,
    animGridPull: animGridPullSlider.value,
    morphAmount: morphAmountSlider.value,
    morphSpeed: morphSpeedSlider.value,
    nibAngle: nibAngleSlider.value,
    showPath: showPathSwitch.checked,
    rotate: rotateSwitch.checked,
    rotate45: rotate45Switch.checked,
    gradientFill: gradientFillSwitch.checked,
    invertGradient: invertGradientSwitch.checked,
    individualColors: individualColorsSwitch.checked,
    orderedColors: orderedColorsSwitch.checked,
    showGrid: showGridSwitch.checked,
    gridOffset: gridOffsetSwitch.checked,
    individualMorph: individualMorphSwitch.checked,
    colorMode: colorModeSwitch.checked,
    animType: animTypeSelect.value,
    strokeJoin: strokeJoinSelect.value,
    pathColor: pathColorSelect.value,
    gridColor: gridColorSelect.value,
    colorPalette: colorPaletteSelect.value,
    markerType: markerType,
    showMarkers: showMarkersSwitch.checked,
    yOffset: yOffsetSlider.value,
    gridStroke: gridStrokeSlider.value,
    pathZIndex: pathZIndexSwitch.checked,
    colorCount: colorCountSlider.value,
    darkMode: darkModeSwitch.checked,
  };

  // Create a blob with the settings
  const blob = new Blob([JSON.stringify(settings, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);

  // Create a download link
  const a = document.createElement("a");
  a.href = url;
  a.download = "preset.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

loadPresetBtn.addEventListener("click", () => {
  presetFile.click();
});

presetFile.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const settings = JSON.parse(event.target.result);
        applySettings(settings);
        updateDisplay();
      } catch (error) {
        console.error("Error loading preset:", error);
        alert(
          "Error loading preset file. Please make sure it's a valid preset file."
        );
      }
    };
    reader.readAsText(file);
  }
});

// Add hotkey support for presets
document.addEventListener("keydown", (e) => {
  // Don't trigger if we're in a text input
  if (e.target.tagName === "INPUT" && e.target.type === "text") {
    return;
  }

  // Check for number keys 1-7
  const presetNumber = parseInt(e.key);
  if (presetNumber >= 1 && presetNumber <= 7) {
    const presetButton = document.getElementById(`preset${presetNumber}`);
    if (presetButton) {
      presetButton.click();
    }
  }
});

// Add font upload functionality
const uploadFontBtn = document.getElementById("uploadFont");
const fontFile = document.getElementById("fontFile");

uploadFontBtn.addEventListener("click", () => {
  fontFile.click();
});

fontFile.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      // Parse the SVG document
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(
        event.target.result,
        "image/svg+xml"
      );

      // Find all glyph elements
      const glyphs = svgDoc.querySelectorAll("glyph");

      // Clear existing font data
      fontData = {};

      // Extract path data for each character
      glyphs.forEach((glyph) => {
        const unicode = glyph.getAttribute("unicode");
        if (unicode && unicode.length === 1) {
          const char = unicode;
          const path = glyph.getAttribute("d");
          const width = parseFloat(glyph.getAttribute("horiz-adv-x") || "1000");

          if (path) {
            // Split the path data into individual paths
            const paths = path.split(/(?=M)/).filter((p) => p.trim());

            fontData[char] = {
              paths: paths,
              width: width,
            };
          }
        }
      });

      // Update the display with the new font
      generateColors();
      updateDisplay();
    };
    reader.readAsText(file);
  }
});

// Add preset8 button event listener
document.getElementById("preset8").addEventListener("click", (event) => {
  if (event.shiftKey) {
    savePreset(8);
  } else {
    loadPreset(8);
  }
});

// Add hotkey for preset 8
document.addEventListener("keydown", (e) => {
  // Don't trigger if we're in a text input
  if (e.target.tagName === "INPUT" && e.target.type === "text") {
    return;
  }

  // Check for number keys 1-8
  const presetNumber = parseInt(e.key);
  if (presetNumber >= 1 && presetNumber <= 8) {
    const presetButton = document.getElementById(`preset${presetNumber}`);
    if (presetButton) {
      presetButton.click();
    }
  }
});
