import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { SharedService } from '../shared/service/SharedService';
import { Constant } from '../shared/constant/Contant';
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('100ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('100ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class LayoutComponent implements OnInit {
  //Toogle Variable for the sidenav.
  ToggleVariable = true;
  //Toogle variable for searchbar.
  ToggledSearch = false;

  ShowLoading = false;
  loginEmpId : string = "";
  empName : string;
  loginEmpRole : string = "";
  empRoleId : string;
  tenentId = "";
  button = "";
  public isDashMenuShow : boolean = false;
  public isReportMenuShow : boolean = false;
  public menuTopList = [];
  public menuList = [];
  constructor(private router : Router,private sharedService : SharedService,
    private titleService : Title) { 
    this.empName = localStorage.getItem("empName");
    this.button = localStorage.getItem("button");
    this.loginEmpRole = localStorage.getItem("loginEmpRole");
    this.tenentId = localStorage.getItem("tenentId");
  }

  ngOnInit(): void {

  }

  setPageTitle(pageTitle : string){
    this.titleService.setTitle("Tepayroll | "+pageTitle);
  }

  Logout() {
    let isConfirm = confirm("Do you want to logout ?");
    if(isConfirm){
      // localStorage.clear();
      this.router.navigate(['/login']);
    }
  }

  openAnyModal(modalId){
    $("#"+modalId).modal({
      backdrop : 'static',
      keyboard : false
    });
  }

  closeAnyModal(modalName){
    $("#"+modalName).modal("hide");
  }

}
