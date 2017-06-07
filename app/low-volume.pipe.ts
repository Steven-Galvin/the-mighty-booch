import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "lowvolume",
  pure: false
})

export class LowVolumePipe implements PipeTransform {
  transform(input: Keg[], sortKeg) {
    var output: Keg[] = [];
    if(sortKeg === "lessThanTen") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].volume <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
