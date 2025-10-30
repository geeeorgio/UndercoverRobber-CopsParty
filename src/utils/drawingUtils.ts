import type { DrawingPoint } from 'src/redux/slices/drawing/slice';

export const pointsToSvgPath = (points: DrawingPoint[]): string => {
  if (points.length === 0) {
    return '';
  }

  let d = `M${points[0].x},${points[0].y}`;

  for (let i = 1; i < points.length; i++) {
    d += `L${points[i].x},${points[i].y}`;
  }

  return d;
};
