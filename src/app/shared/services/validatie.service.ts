import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class ValidatieService {

    public validateInputOfInputfield(event: any){
          //create mask
    switch((event.target as HTMLInputElement).type){
      case "text":
        //Name input
        var mask = /[a-zA-Z áéóúíÁÉÓÚÍäëöüïÄËÖÜÏ-]/
        break;
      case "tell":
        //Phone input
        var mask = /[0-9+ ]/
        break;
      default:
        //Email input
        var mask = /[a-zA-Z0-9 áéóúíÁÉÓÚÍäëöüïÄËÖÜÏ+_~@-]/
        break;
    }

      var inp = String.fromCharCode(event.keyCode);

      if(mask.test(inp) || event.keyCode == 8 || event.keyCode == 16){
        return true;
      } else {
        event?.preventDefault();
        return false;
      }
    }
  }
