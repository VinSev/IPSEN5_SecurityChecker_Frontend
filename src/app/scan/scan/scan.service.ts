import {Injectable} from '@angular/core';
import {ScanCategoryType} from "../../shared/models/scan-category.type";
import {Iterator} from "../../shared/models/iterator.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {userValidation} from "../../shared/models/user-validation.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  private _name: string = "";
  private _email: string = "";
  private _website: string = "";
  private _ownership: boolean = false;
  private _scanCategories: ScanCategoryType[] = [];

  constructor(private http: HttpClient,
              private httpService: HttpService,
              private router: Router,
              private toastr: ToastrService) {
    this._scanCategories.push({title: "Headers", path: "", loading: false});
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get website(): string {
    return this._website;
  }

  set website(value: string) {
    this._website = value;
  }

  get ownership(): boolean {
    return this._ownership;
  }

  set ownership(value: boolean) {
    this._ownership = value;
  }

  get scanCategories(): ScanCategoryType[] {
    return this._scanCategories;
  }

  set scanCategories(value: ScanCategoryType[]) {
    this._scanCategories = value;
  }

  private filterWebsite() {
    let searchValues: string[] = [
      "https://",
      "http://"
    ]
    for (let searchValue of searchValues) {
      if(this.website.startsWith(searchValue)) {
        this.website = this.website.slice(searchValue.length, this.website.length - 1)
      }
    }
    let pathIndex = this.website.indexOf("/") > -1 ? this.website.indexOf("/") : this.website.length;
    this.website = this.website.slice(0, pathIndex);
  }

  public start(): void {
    this.filterWebsite();
    let iterator: Iterator<ScanCategoryType> = new Iterator<ScanCategoryType>(this._scanCategories);
    this.scan(iterator);
  }

  private async scan(iterator: Iterator<ScanCategoryType>): Promise<void> {
    if (!iterator.hasNext()) {
      return;
    }
    let scanCategory = iterator.next();
    scanCategory.loading = true;

    // this.headerScan(scanCategory);

    this.scan(iterator);
  }



  public startScan(){
    this.filterWebsite();
    let validationUser = new userValidation();
    validationUser.name = this._name;
    validationUser.email = this._email;
    validationUser.website = this._website;
    validationUser.ownership = this._ownership;

    this.httpService.post<any>('/test/test', validationUser)
    .subscribe((data) => {
      if(data.response == 'SUCCESS'){
        this.toastr.success("Uw gegevens zijn juist verstuurd!", "", {
          tapToDismiss: true,
          positionClass: "toast-bottom-right",
          timeOut: 1500
        });
        console.log(data.response.scanCategories)
        this.router.navigate(["scan"]);
      }else{
        this.toastr.error("Het versturen van uw gegevens is niet gelukt. Controleer uw ingevoerde gegevens!", "", {
          tapToDismiss: true,
          positionClass: "toast-bottom-right",
          timeOut: 1500
        });
        }
    })

  }

  public sendMail() {
    let body: any = {
      name: this.name,
      email: this.email,
      website: this.website,
      owners: this.ownership,
      scanCategories: this.scanCategories
    }
    this.httpService.post("/mail", body)
      .subscribe();
  }


}
