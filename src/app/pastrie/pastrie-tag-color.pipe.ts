import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastrieTagColor'
})
export class PastrieTagColorPipe implements PipeTransform {

  /*
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/
  transform(tag: string) : string {
    let color: string;
    switch(tag) {
      case "sucré" : 
        color = "bg-red";
        break;
      case "yummy":
        color = "bg-blue";
        break;
      case "dessert" : 
        color = "bg-orange";
        break;
      case "chocolat":
        color = "bg-green";
        break;
      case "framboise" : 
        color = "bg-pink";
        break;
      case "poires":
        color = "bg-purple";
        break;
      case "fruits":
        color = "bg-gray";
        break;
      case "bananes":
        color = "bg-yellow";
        break;
      default:
        color = "bg-skyblue";
    }

    return `${color}`;
  }

}
