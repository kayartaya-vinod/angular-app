import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dt: string, flag: number = 1): string {
    if (!dt) return null;
    // if (flag > 3 || flag < 1) flag = 1;
    flag = (flag > 3 || flag < 1) ? 1 : flag;

    let ageInMillis = Date.now() - new Date(dt).getTime();
    let ageInDate = new Date(ageInMillis);
    let y = ageInDate.getFullYear() - 1970;
    let m = ageInDate.getMonth();
    let d = ageInDate.getDate();

    switch (flag) {
      case 3: return `${y} years, ${m} months and ${d} days.`;
      case 2: return `${y} years and ${m} months`;
      default: return `${y} years`;
    }
  }

}
