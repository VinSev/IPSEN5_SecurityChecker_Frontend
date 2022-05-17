import {ScanCategoryType} from "./scan-category.type";

export class Scan {
  private _name: string;
  private _email: string;
  private _website: string;
  private _ownership: boolean;
  private _scanCategories: ScanCategoryType[];


  constructor(website: string, ownership: boolean) {
    this._name = "";
    this._email = "";
    this._website = website;
    this._ownership = ownership;
    this._scanCategories = [];
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
}
