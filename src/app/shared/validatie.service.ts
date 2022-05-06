import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class ValidatieService {

    public  validateInputOfInputfield(event: any, mask: RegExp){
      var inp = String.fromCharCode(event.keyCode);
  
      if(mask.test(inp)){
        return true;
      } else {
        event?.preventDefault();
        return false;
      }
    }
  }