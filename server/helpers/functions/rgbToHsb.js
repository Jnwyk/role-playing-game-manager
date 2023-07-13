module.exports = function rgbToHsb(r, g, b) {
  r = r / 255;
  g = g / 255;
  b = b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let hue = 0;
  let saturation = 0;
  let brightness = (min + max) / 2;

  if (max === min) {
    return [hue, saturation, brightness];
  } else {
    const d = max - min;
    if (brightness > 0.5) {
      saturation = d / (2 - max - min);
    } else {
      saturation = d / (max + min);
    }

    switch (max) {
      case r:
        hue = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        hue = (b - r) / d + 2;
        break;
      case b:
        hue = (r - g) / d + 4;
        break;
    }

    hue = hue / 6;
  }

  hue = Math.round(hue * 65535);
  saturation = Math.round(saturation * 255);
  brightness = Math.round(brightness * 255);
  return [hue, saturation, brightness];
};
