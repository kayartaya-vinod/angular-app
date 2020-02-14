import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ar: Array<any>, term: string, fields: any = undefined): Array<any> {
    
    if (!ar) return ar;
    if (fields && (fields instanceof Array === false && typeof fields !== 'string')) return ar;

    if (typeof fields === 'string') {
      fields = [fields];
    }

    return ar.filter(elm => this.test(elm, term, fields));
  }

  test(obj, term, fields): boolean {
    console.log('fields', fields);
    if (!fields) {
      fields = Object.keys(obj);
    }
    let re = new RegExp(term, 'i');
    for (let i = 0; i < fields.length; i++) {
      let k = fields[i];
      if (re.test(obj[k])) return true;
    }
    return false;
  }

}
