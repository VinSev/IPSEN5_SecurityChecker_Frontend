import {Injectable, OnDestroy} from '@angular/core';
import {ScanCategoryType} from "../../shared/models/scan-category.type";
import {Iterator} from "../../shared/models/iterator.model";
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {RequestService} from "../../shared/requesten/request.service";
import {Scan} from "../../shared/models/scan.model";
import {UserScanService} from "../../shared/services/user-scan.service";

@Injectable({
  providedIn: 'root'
})
export class ScanService implements OnDestroy{
  private scanInfo: Scan = new Scan("", false);
  scanSubscription: Subscription = new Subscription();

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
}
