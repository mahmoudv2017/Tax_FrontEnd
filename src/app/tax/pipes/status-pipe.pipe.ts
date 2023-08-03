import { Pipe, PipeTransform } from '@angular/core';
import { ActionStatus } from 'src/app/shared/models/TaxStatus';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    return ActionStatus[value];
  }

}
