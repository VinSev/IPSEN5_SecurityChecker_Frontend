import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  //Werkt niet zoals behoeven.
  //Niet alle benodigde characters zitten erin.
  //Wordt tijdelijk niet gebruikt.
  //Aub eerst volledig testen voordat het weer gebruikt wordt.
  private getMask(event: any): RegExp {
    let mask: RegExp;
    switch((event.target as HTMLInputElement).type){
      case "text":
        mask = /[\ta-zA-Z áéóúíÁÉÓÚÍäëöüïÄËÖÜÏ-]/;
        break;
      case "phone":
        mask = /[\t0-9+ ]/;
        break;
      default:
        mask = /[\ta-zA-Z0-9 áéóúíÁÉÓÚÍäëöüïÄËÖÜÏ+_~@-]/;
        break;
    }
    return mask;
  }

  public validateInput(event: any){
    let mask = this.getMask(event);
    let input = String.fromCharCode(event.keyCode);

    if(mask.test(input) || event.keyCode === 8 || event.keyCode === 16){
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
}
