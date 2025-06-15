// Simple function approach - no modules needed
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

// Convert RGB to HSL
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

// Get color name (basic color names)
function getColorName(hex) {
  const colorNames = {
    '#FF0000': 'Red', '#00FF00': 'Lime', '#0000FF': 'Blue',
    '#FFFF00': 'Yellow', '#FF00FF': 'Magenta', '#00FFFF': 'Cyan',
    '#FFFFFF': 'White', '#000000': 'Black', '#808080': 'Gray',
    '#800000': 'Maroon', '#008000': 'Green', '#000080': 'Navy',
    '#808000': 'Olive', '#800080': 'Purple', '#008080': 'Teal',
    '#C0C0C0': 'Silver', '#FFA500': 'Orange', '#A52A2A': 'Brown',
    '#FFC0CB': 'Pink', '#FFFACD': 'Lemon Chiffon', '#667eea': 'Periwinkle'
  };

  return colorNames[hex.toUpperCase()] || 'Custom Color';
}

// Generate a random color
function generateRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}