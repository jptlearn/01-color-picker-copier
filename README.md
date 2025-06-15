# 🎨 Color Picker & Copier

A modern, feature-rich web-based color picker and copier tool built with vanilla HTML, CSS, and JavaScript. Pick colors, copy codes, and create beautiful designs with ease.

![Color Picker Preview](https://img.shields.io/badge/Project-Color%20Picker-blue?style=for-the-badge&logo=palette)

## ✨ Features

### 🎯 Core Functionality

- **Real-time Color Preview** - Large, beautiful color display with smooth animations
- **Multiple Color Formats** - Support for HEX, RGB, and HSL with instant conversion
- **One-Click Copy** - Copy any color format to clipboard with visual feedback
- **Color Name Detection** - Displays color names (e.g., "Periwinkle", "Coral Red")

### 🎨 Color Selection

- **Native Color Picker** - HTML5 color input for precise color selection
- **Preset Color Palette** - 8 beautiful curated colors (Coral Red, Turquoise, Sky Blue, etc.)
- **Color History** - Remembers your last 8 picked colors (persisted in browser)
- **Random Color Generator** - Generate random colors instantly

### ⌨️ Keyboard Shortcuts

- **Ctrl+C (Cmd+C)** - Quick copy HEX value
- **Ctrl+R (Cmd+R)** - Generate random color
- **Click History/Presets** - Instant color selection

### 🎭 User Experience

- **Smooth Animations** - Hover effects, button transitions, and status messages
- **Status Notifications** - Success/error messages with slide-in animations
- **Responsive Design** - Works perfectly on desktop and mobile
- **Modern UI** - Beautiful gradient backgrounds and glassmorphism effects
- **Helpful Tips** - Inline instructions and keyboard shortcut hints

## 🚀 Live Demo

Open `index.html` in your browser to start using the color picker immediately!

## 📁 Project Structure

```
01-color-picker-copier/
├── index.html              # Main HTML structure
├── css/
│   ├── styles.css          # Main styling and animations
│   └── responsive.css      # Mobile responsiveness
├── js/
│   ├── app.js              # Core application logic
│   └── colorUtils.js       # Color conversion utilities
├── assets/                 # Static assets (if any)
├── README.md              # Project documentation
└── .gitignore             # Git ignore rules
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and modern input types
- **CSS3** - Flexbox, Grid, Animations, and Gradients
- **Vanilla JavaScript** - ES6+ features, Local Storage, Clipboard API
- **No Dependencies** - Pure web technologies, no frameworks needed

## 🎨 Color Format Support

### HEX Format

```
#FF6B6B (Coral Red)
#667eea (Periwinkle)
```

### RGB Format

```
rgb(255, 107, 107)
rgb(102, 126, 234)
```

### HSL Format

```
hsl(0, 100%, 71%)
hsl(230, 75%, 66%)
```

## 🔧 Key Functions

### Color Conversion

- `hexToRgb(hex)` - Convert HEX to RGB values
- `rgbToHsl(r, g, b)` - Convert RGB to HSL values
- `getColorName(hex)` - Get color name from HEX value
- `generateRandomColor()` - Generate random HEX color

### Core Features

- **Color History Management** - Persistent storage of recent colors
- **Clipboard Integration** - Cross-browser copy functionality
- **Real-time Updates** - Synchronized color format display
- **Keyboard Event Handling** - Shortcut key support

## 🎯 How to Use

1. **Pick a Color**

   - Use the color picker input
   - Click on preset palette colors
   - Click on color history items
   - Use Ctrl+R for random colors

2. **Copy Color Codes**

   - Click any "Copy" button for different formats
   - Use Ctrl+C to quickly copy HEX value
   - Watch for success animations

3. **Browse History**
   - Your last 8 colors are automatically saved
   - Click any history color to reselect it
   - History persists between browser sessions

## 🎨 Preset Color Palette

The app includes 8 carefully selected colors:

- **Coral Red** (#FF6B6B)
- **Turquoise** (#4ECDC4)
- **Sky Blue** (#45B7D1)
- **Mint Green** (#96CEB4)
- **Warm Yellow** (#FFEAA7)
- **Plum** (#DDA0DD)
- **Seafoam** (#98D8C8)
- **Honey** (#F7DC6F)

_Clipboard API requires HTTPS or localhost for full functionality_

## 🔮 Future Enhancements

- [ ] Color harmony suggestions (complementary, triadic, etc.)
- [ ] Image color extraction with eyedropper
- [ ] Color palette export/import
- [ ] Accessibility contrast checker
- [ ] Custom color themes
- [ ] Color gradient generator

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a learning project from a 30-day development challenge. Feel free to fork, experiment, and make it your own!

---

**Made with ❤️ during a 30-day coding challenge**

_Day 1/30 - Color Picker & Copier Complete!_
