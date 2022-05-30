import {Injectable, OnDestroy} from '@angular/core';
import {ScanCategoryType} from "../../shared/models/scan-category.type";
import {Iterator} from "../../shared/models/iterator.model";
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {RequestService} from "../../shared/requesten/request.service";
import {Scan} from "../../shared/models/scan.model";
import {UserScanService} from "../../shared/services/user-scan.service";
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {userValidation} from "../../shared/models/user-validation.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ScanService implements OnDestroy{
  private scanInfo: Scan = new Scan("", false);
  scanSubscription: Subscription = new Subscription();

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

  constructor(private http: HttpClient,
              private requestService: RequestService,
              private userScanService: UserScanService) {
    this.setSubscriptions();
  }

  private setSubscriptions() {
    this.scanSubscription = this.userScanService.userScan.subscribe(
      (userScan) => {
        this.scanInfo = userScan;
        this.scanInfo.scanCategories.push({title: "Headers", path: "", loading: false});
      }
    )
  }

  get name(): string {
      return this._name;
    }

    set name(value: string) {
      this._name = value;
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
      if (this.scanInfo.website.startsWith(searchValue)) {
        this.scanInfo.website = this.scanInfo.website.slice(searchValue.length, this.scanInfo.website.length - 1)
      }
    }
    let pathIndex = this.scanInfo.website.indexOf("/") > -1 ? this.scanInfo.website.indexOf("/") : this.scanInfo.website.length;
    this.scanInfo.website = this.scanInfo.website.slice(0, pathIndex);
  }

  public start(): void {
    this.requestService.requestToScan();
    this.filterWebsite();
    let iterator: Iterator<ScanCategoryType> = new Iterator<ScanCategoryType>(this.scanInfo.scanCategories);
    this.scan(iterator);
  }

  private async scan(iterator: Iterator<ScanCategoryType>): Promise<void> {
    if (!iterator.hasNext()) {
      return;
    }
    let scanCategory = iterator.next();
    scanCategory.loading = true;

    this.headerScan(scanCategory);

    this.scan(iterator);
  }

  private headerScan(scanCategory: ScanCategoryType): void {
    this.invokeHeaderScan()
      .subscribe( (value: any) => {
        let grades: {[key: string]: number} = {'A+': 10, 'A': 9.5, 'A-':9, 'B+': 8.5, 'B': 8, 'B-': 7.5, 'C+': 7, 'C': 6, 'C-': 5, 'D+': 4, 'D': 3, 'D-': 2, 'F': 1};
        let grade: string = value['grade'];
        scanCategory.grade = grades[grade];
        let scanId: number = value['scan_id'];
        return this.getHeaderScanResult(scanId)
          .subscribe((value: any) => {
            scanCategory.result = value;
          });
      });
  }

  private invokeHeaderScan(): Observable<any> {
    return this.http.get("https://http-observatory.security.mozilla.org/api/v1/analyze?host=" + this.scanInfo.website);
  }

  private getHeaderScanResult(scanId: any): Observable<any> {
    return this.http.get("https://http-observatory.security.mozilla.org/api/v1/getScanResults?scan=" + scanId);
  }

  getCurrentScan(): Scan {
    return this.scanInfo
  }

  ngOnDestroy(): void {
    this.scanSubscription.unsubscribe();
  }

  public postUserValidationToDatabase(){
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
