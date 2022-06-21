import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-admin-window',
  templateUrl: './admin-window.component.html',
  styleUrls: ['./admin-window.component.scss']
})
export class AdminWindowComponent implements OnInit {
  currentDropDownStatus: string = '';
  items: string[] = [];

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
   this.adminService._dropDownLocation.subscribe((result) =>{
     this.currentDropDownStatus = result;
   });
  }
}
