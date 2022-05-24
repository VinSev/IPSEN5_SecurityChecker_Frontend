import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import { authenticationService } from "./authentication.Service";

describe('HttpService', () => {
  let service: authenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule ],
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(authenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should create 3 localstorages for a token, email, role`, () => {
      service.saveAuthenticatedAdminInLocalStorage('admin','unit@test.com','giventoken')
      expect(localStorage.getItem('email')).toEqual("unit@test.com");
      expect(localStorage.getItem('role')).toEqual("admin");
      expect(localStorage.getItem('token')).toEqual("giventoken");
  });
});
