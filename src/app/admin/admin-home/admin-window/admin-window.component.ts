import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-admin-window',
  templateUrl: './admin-window.component.html',
  styleUrls: ['./admin-window.component.scss']
})
export class AdminWindowComponent implements OnInit {
  constructor(public adminService : AdminService) { }

  ngOnInit(): void {
  }
}
