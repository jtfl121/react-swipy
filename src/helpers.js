export const getDirection = offset => (offset > 0 ? "down" : "up");
export const getOffset = (start, end) => -((start - end) * 0.75);
export const getEvent = e => (e.touches ? e.touches[0] : e);
export const withY = fn => e => fn(getEvent(e).pageY);
export const getLimitOffset = (limit, direction) =>
  direction === "up" ? limit : -limit;
export const getOpacity = (offset, limit, min) =>
  1 -
  (Math.abs(offset) < min
    ? 0
    : (Math.abs(offset) - min) / Math.abs(limit - min));
