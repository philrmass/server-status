export function toDuration(totalSec) {
  const secPerMin = 60;
  const minPerHr = 60;

  const totalMin = Math.floor(totalSec / secPerMin);
  const hr = Math.floor(totalMin / minPerHr);
  const min = totalMin - (hr * minPerHr);
  const sec = totalSec - (totalMin * secPerMin);

  const minPad = hr > 0 ? 2 : 1;
  const minStr = min.toFixed(0).padStart(minPad, '0');
  const secStr = sec.toFixed(0).padStart(2, '0');

  if (hr > 0) {
    return `${hr}:${minStr}:${secStr}`;
  }
  return `${minStr}:${secStr}`;
}
