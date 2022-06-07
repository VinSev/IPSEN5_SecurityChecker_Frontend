import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authenticationService } from 'src/app/shared/services/authentication.Service';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  constructor(
    private auth : authenticationService,
    private adminService : AdminService) { }

  ngOnInit(): void {
    this.adminService.readAllTips();
  }

  public activateAdminDropDown(dropDownChoice: string){
    this.adminService.changeDropDownLocation(dropDownChoice);    
  }

  public logOutAsUser(){
   this.auth.logOutAsUser();
  }
}
