import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {CoordinateModel} from '../../grid-utility/coordinate.model';

export class ReferenceList {
  public a: CoordinateModel;
  public b: CoordinateModel[] = [];
}

@Injectable()
export class GitGraphDotService {

  positions = new ReferenceList();

  redrawSubject = new Subject<any>();
  positionSubject = new Subject<CoordinateModel>();
  positionsSubject = new Subject<ReferenceList>();

  addPosition(coordinateModel: CoordinateModel): void {
    if (this.positions.a === undefined) {
      this.positions.a = coordinateModel;
    } else if (this.positions.b.findIndex(i => i === coordinateModel) < 0) {
      this.positions.b.push(coordinateModel);
      this.positionsSubject.next(this.positions);
    }
  }
}
