module.exports = function hsbToRgb(h, s, b) {
  s = s / 255;
  b = b / 255;
  h = (360 * h) / 65535;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(b, 1 - b);
  const f = (n) =>
    Math.round(
      255 * (b - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1))))
    );
  return [f(0), f(8), f(4)];
};
