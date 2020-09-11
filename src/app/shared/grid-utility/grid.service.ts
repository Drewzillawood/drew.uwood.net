import {Injectable} from '@angular/core';
import {CoordinateModel} from './coordinate.model';

@Injectable({ providedIn: 'root' })
export class GridService {

  distance(p1: CoordinateModel, p2: CoordinateModel): number {
    const xDelta = Math.pow(p2.x - p1.x, 2);
    const yDelta = Math.pow(p2.y - p1.y, 2);
    return Math.sqrt(xDelta + yDelta);
  }
}
