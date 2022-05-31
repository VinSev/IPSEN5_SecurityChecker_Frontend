import {Injectable, OnDestroy} from '@angular/core';
import {ScanCategoryType} from "../models/scan-category.type";
import {Iterator} from "../models/iterator.model";
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription, tap} from "rxjs";
import {Scan} from "../models/scan.model";
import {UserScanService} from "./user-scan.service";
import {HttpService} from 'src/app/shared/services/http.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {userValidation} from "../models/user-validation.model";

@Injectable({
  providedIn: 'root'
})
export class ScanService implements OnDestroy {
  private scanInfo: Scan = new Scan("", false);
  scanSubscription: Subscription = new Subscription();

  constructor(private http: HttpClient,
              private httpService: HttpService,
              private router: Router,
              private userScanService: UserScanService,
              private toastr: ToastrService) {
    this.userScanService.userScan.value.scanCategories.push({title: "Headers", path: "", loading: false});
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
    this.requestStartScan()
    this.filterWebsite();
    let iterator: Iterator<ScanCategoryType> = new Iterator<ScanCategoryType>(this.scanInfo.scanCategories);
    this.scan(iterator);
  }

  private requestStartScan() {
    return this.httpService.get<any>("/result/start",
      {url: this.userScanService.userScan.value.website}).pipe(
      tap(
        (scans: ScanCategoryType[]) => {
          for(let scan of scans)
          if (scan.title === "SEO"  && scan.grade != undefined && scan.grade !=  0) {
            this.userScanService.setScanToFinished(scans)
          }
        }));
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
    validationUser.name = this.userScanService.userScan.value.name;
    validationUser.email = this.userScanService.userScan.value.email;
    validationUser.website = this.userScanService.userScan.value.website;
    validationUser.ownership = this.userScanService.userScan.value.ownership;

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
      name: this.userScanService.userScan.value.name,
      email: this.userScanService.userScan.value.email,
      website: this.userScanService.userScan.value.website,
      owners: this.userScanService.userScan.value.ownership,
      scanCategories: this.userScanService.userScan.value.scanCategories
    }
    this.httpService.post("/mail", body)
      .subscribe();
  }


}
