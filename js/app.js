document.addEventListener('DOMContentLoaded', () => {
  // Get all the elements we need
  const colorInput = document.getElementById('colorInput');
  const colorPreview = document.getElementById('colorPreview');
  const hexValue = document.getElementById('hexValue');
  const rgbValue = document.getElementById('rgbValue');
  const hslValue = document.getElementById('hslValue');
  const colorName = document.getElementById('colorName');
  const copyBtns = document.querySelectorAll('.copy-btn');
  const statusMessage = document.getElementById('statusMessage');
  const colorHistory = document.getElementById('colorHistory');
  const presetColors = document.querySelectorAll('.preset-color');

  // Color history array
  let recentColors = JSON.parse(localStorage.getItem('colorHistory') || '[]');

  // Initialize with default color
  updateColorDisplay('#667eea');
  updateColorHistory();

  // Main color update function
  function updateColorDisplay(color) {
    const rgb = hexToRgb(color);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

    // Update preview
    colorPreview.style.backgroundColor = color;

    // Update values
    hexValue.value = color.toUpperCase();
    rgbValue.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    hslValue.value = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

    // Update color name
    colorName.textContent = getColorName(color);

    // Add to history
    addToHistory(color);
  }

  // Add color to history
  function addToHistory(color) {
    // Remove if already exists
    recentColors = recentColors.filter(c => c !== color);
    // Add to beginning
    recentColors.unshift(color);
    // Keep only last 8 colors
    recentColors = recentColors.slice(0, 8);
    // Save to localStorage
    localStorage.setItem('colorHistory', JSON.stringify(recentColors));
    // Update display
    updateColorHistory();
  }

  // Update color history display
  function updateColorHistory() {
    colorHistory.innerHTML = '';
    recentColors.forEach(color => {
      const colorDiv = document.createElement('div');
      colorDiv.className = 'history-color';
      colorDiv.style.backgroundColor = color;
      colorDiv.title = color;
      colorDiv.addEventListener('click', () => {
        colorInput.value = color;
        updateColorDisplay(color);
      });
      colorHistory.appendChild(colorDiv);
    });
  }

  // Color input change listener
  colorInput.addEventListener('input', (e) => {
    updateColorDisplay(e.target.value);
  });

  // Preset color listeners
  presetColors.forEach(preset => {
    preset.addEventListener('click', () => {
      const color = preset.dataset.color;
      colorInput.value = color;
      updateColorDisplay(color);
    });
  });

  // Copy button listeners
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const format = e.target.dataset.format;
      let value;

      switch (format) {
        case 'hex': value = hexValue.value; break;
        case 'rgb': value = rgbValue.value; break;
        case 'hsl': value = hslValue.value; break;
      }

      // Copy to clipboard
      navigator.clipboard.writeText(value).then(() => {
        showStatusMessage(`${format.toUpperCase()} copied to clipboard!`, 'success');
      }).catch(() => {
        showStatusMessage('Copy failed!', 'error');
      });
    });
  });

  // Enhanced status message function
  function showStatusMessage(message, type = 'success') {
    statusMessage.textContent = message;
    statusMessage.className = `status-message ${type}`;
    statusMessage.classList.add('show');

    setTimeout(() => {
      statusMessage.classList.remove('show');
    }, 2000);
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'c':
          if (e.target.tagName !== 'INPUT') {
            e.preventDefault();
            navigator.clipboard.writeText(hexValue.value);
            showStatusMessage('HEX copied with keyboard shortcut!', 'success');
          }
          break;
        case 'r':
          e.preventDefault();
          const randomColor = generateRandomColor();
          colorInput.value = randomColor;
          updateColorDisplay(randomColor);
          showStatusMessage('Random color generated!', 'success');
          break;
      }
    }
  });

  // Add helpful tooltips
  colorPreview.title = 'Click preset colors or use color picker to change';

  // Add instructions
  const instructions = document.createElement('div');
  instructions.className = 'instructions';
  instructions.innerHTML = `
    <small>💡 <strong>Tips:</strong> Ctrl+C to copy HEX | Ctrl+R for random color | Click history or presets</small>
  `;
  document.querySelector('.container').appendChild(instructions);
});
