import { Component, OnInit } from '@angular/core';
import { Constant } from '../shared/constant/Contant';
import { CommonFunction } from '../shared/service/CommonFunction';
import { EmployeeTableSetting } from '../shared/tableSettings/EmployeeTableSetting';
import { Router } from '@angular/router';
import { SharedService } from '../shared/service/SharedService';
import { ToastrService } from 'ngx-toastr';
import { LayoutComponent } from '../layout/layout.component';
declare var $: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  alertFadeoutTime = 0;
  monthList = [];
  employeeList = [];
  uanNo = "";
  epfNo = "";
  esiNo = "";
  bankName = "";
  ifscCode = "";
  accountNo = "";
  catogoryCode = "";
  name = "";
  fatherName = "";
  category = "";
  deptt = "";
  dob = "";
  doj = "";
  basicWages = "";
  hra = "";
  conveyance = "";
  mediAll = "";
  arries = "";
  splAll = "";
  isDoAnyChange : boolean = true;
  employeeTableSettings = EmployeeTableSetting.setting;
  loginEmpId = "";
  loginEmpRole = "";
  button = "";
  color1 = "";
  color2 = "";
  multiSelectdropdownSettings = {};
  singleSelectdropdownSettings = {};
  constructor(private router: Router,private sharedService : SharedService,
    private toastr: ToastrService, private layoutComponent : LayoutComponent) { 
      this.alertFadeoutTime = Constant.ALERT_FADEOUT_TIME;
      this.button = localStorage.getItem("button");
      this.color1 = localStorage.getItem("color1");
      this.color2 = localStorage.getItem("color2");
      this.layoutComponent.setPageTitle("Employee");
    }

  ngOnInit() {
    this.multiSelectdropdownSettings = {
      singleSelection: false,
      idField: 'paramCode',
      textField: 'paramDesc',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 0,
      allowSearchFilter: true
    };
    this.singleSelectdropdownSettings = {
      singleSelection: true,
      idField: 'paramCode',
      textField: 'paramDesc',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true,
      closeDropDownOnSelection : true
    };
    setTimeout(() => {
      $("ng2-smart-table thead").css('background-color',this.color1);
    }, 100);
    this.getMonthList();
    this.getAllEmployeeList();
  }

  getMonthList(){
    for (var i = 0; i < 12; i++) {
      var d = new Date();
      d.setMonth(d.getMonth() - i);
      var month = d.toLocaleString("default", { month: "short" });
      var year = d.getFullYear();
      this.monthList.push(month+"-"+year);
    }
  }

  getMonthDays(){
    let mySplit = this.monthYear.split("-")
    let month = mySplit[0];
    let year = mySplit[1];
    let monthNumber = new Date(Date.parse(month +" 1, "+year)).getMonth()+1;
    let noOfDays = new Date(parseInt(year), monthNumber, 0).getDate();
    $(".wd").val(noOfDays);
  }
  

  getAllEmployeeList(){
    this.employeeList = [];
    let jsonData = {
      catogoryCode : "",
    }
    this.layoutComponent.ShowLoading = true;
    this.sharedService.getAllListBySelectType(jsonData,"employee")
    .subscribe((response) =>{
      this.employeeList = response.resultList;
      this.layoutComponent.ShowLoading = false;
      
    },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("getAllEmployeeList"),"Alert !",{timeOut : Constant.TOSTER_FADEOUT_TIME});
      this.layoutComponent.ShowLoading = false;
    });
  }

  submitEmployeeData(){
    
    if(this.uanNo == ""){
      this.toastr.warning("please enter `UAN NO` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.epfNo == ""){
      this.toastr.warning("please enter `EPF NO.` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.esiNo == ""){
      this.toastr.warning("please enter `ESI NO` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.bankName == ""){
      this.toastr.warning("please enter `Bank Name` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.ifscCode == ""){
      this.toastr.warning("please enter `IFSC CODE` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.accountNo == ""){
      this.toastr.warning("please enter `ACCOUNT NO` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.catogoryCode == ""){
      this.toastr.warning("please enter `Catogory Code` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.name == ""){
      this.toastr.warning("please enter `Name of contract Labour` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.fatherName == ""){
      this.toastr.warning("please enter `FATHERS NAME` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.category == ""){
      this.toastr.warning("please enter `Category` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.deptt == ""){
      this.toastr.warning("please enter `Deptt` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.dob == ""){
      this.toastr.warning("please enter `DOB` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.doj == ""){
      this.toastr.warning("please enter `DOJ` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.basicWages == ""){
      this.toastr.warning("please enter `Basic wages` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.hra == ""){
      this.toastr.warning("please enter `HRA` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.conveyance == ""){
      this.toastr.warning("please enter `CONVEYANCE` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.mediAll == ""){
      this.toastr.warning("please enter `Medical Allowance` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.arries == ""){
      this.toastr.warning("please enter `Arrier` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    else if(this.splAll == ""){
      this.toastr.warning("please enter `SPL ALLOWENCE` value","Alert !",{timeOut : this.alertFadeoutTime});
      return ;
    }
    

    let jsonData = {
      srNo: this.srNo,
      uanNo : this.uanNo,
      epfNo : this.epfNo,
      esiNo : this.esiNo,
      bankName : this.bankName,
      ifscCode : this.ifscCode,
      accountNo : this.accountNo,
      catogoryCode : this.catogoryCode,
      name : this.name,
      fatherName : this.fatherName,
      category : this.category,
      deptt : this.deptt,
      dob : this.dob,
      doj : this.doj,
      basicWages : this.basicWages,
      hra : this.hra,
      conveyance : this.conveyance,
      mediAll : this.mediAll,
      arries : this.arries,
      splAll : this.splAll
    }
    this.layoutComponent.ShowLoading = true;
    this.sharedService.insertDataByInsertType(jsonData, "employee")
    .subscribe((response) =>{
      if(response.code == Constant.SUCCESSFUL_STATUS_CODE){
        this.toastr.success(response.message,"Alert !",{timeOut : this.alertFadeoutTime});
        this.setDefaultAllField();
        this.getAllEmployeeList();
      }
      else{
        this.toastr.warning(response.message,"Alert !",{timeOut : this.alertFadeoutTime});
      }
      this.layoutComponent.ShowLoading = false;
      
    },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("submitEmployeeData"),"Alert !",{timeOut : Constant.TOSTER_FADEOUT_TIME});
      this.layoutComponent.ShowLoading = false;
    });
  }

  setDefaultAllField(){
    $(".form-control").val("");
    this.srNo="";
    this.uanNo = "";
    this.epfNo = "";
    this.esiNo = "";
    this.bankName = "";
    this.ifscCode = "";
    this.accountNo = "";
    this.catogoryCode = "";
    this.name = "";
    this.fatherName = "";
    
    this.category = "";
    this.deptt = ""
    this.dob = "";
    this.doj = "";
    this.basicWages = "";
    this.hra = "";
    this.conveyance = "";
    this.mediAll = "";
    this.arries = "";
    this.splAll = "";

    this.monthYear = "";
  }

  onCustomAction(event) {
    switch (event.action) {
      case 'editrecord':
        this.editEmployee(event);
        break;
      case 'getSalaryData':
        this.getSalaryData(event);
        break;
    }
  }

  salaryList = [];
  empObj:any = {};
  getSalaryData(event){
    this.empObj = event.data;
    this.salaryList = [];
    let catogoryCode = this.empObj.catogoryCode;
    let jsonData = {
      catogoryCode: catogoryCode
    }
    this.layoutComponent.ShowLoading = true;
    this.sharedService.getAllListBySelectType(jsonData,"salaryData")
    .subscribe((response) =>{
      this.salaryList = response.resultList;
      this.layoutComponent.ShowLoading = false;
      this.openAnyModal("salaryModal");
    },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("getAllEmployeeList"),"Alert !",{timeOut : Constant.TOSTER_FADEOUT_TIME});
      this.layoutComponent.ShowLoading = false;
    });
  }

  generateSalaryPdf(slObj){
    let catogoryCode = slObj.catogoryCode;
    let monthYear = slObj.monthYear;
    let url = Constant.phpServiceURL+"tepayroll2.php?catogoryCode="+catogoryCode+"&monthYear="+monthYear;
    window.open(url);
  }

  srNo = "";
  editEmployee(event){
    this.srNo = event.data.srNo;
    this.uanNo = event.data.uanNo;
    this.epfNo = event.data.epfNo;
    this.esiNo = event.data.esiNo;
    this.bankName = event.data.bankName;
    this.ifscCode = event.data.ifscCode;
    this.accountNo = event.data.accountNo;
    this.catogoryCode = event.data.catogoryCode;
    this.name = event.data.name;
    this.fatherName = event.data.fatherName;
    this.category = event.data.category;
    this.deptt = event.data.deptt;
    this.dob = event.data.dob;
    this.doj = event.data.doj;
    this.basicWages = event.data.basicWages;
    this.hra = event.data.hra;
    this.conveyance = event.data.conveyance;
    this.mediAll = event.data.mediAll;
    this.arries = event.data.arries;
    this.splAll = event.data.splAll;
    this.openAnyModal("createEmployeeModal");
    
  }


  exportData(){
    if(this.employeeList.length != 0 ){
      let columnKeyArr:any = ["srNo","uanNo","epfNo","esiNo","bankName","ifscCode","accountNo","catogoryCode",
        "name","fatherName","category","deptt", "dob","doj", "basicWages", "hra", "conveyance",
        "mediAll","arries","splAll"
      ];
      let columnTitleArr:any = ["S.NO","UAN NO","EPF NO.","ESI NO","Bank Name","IFSC CODE","ACCOUNT NO","Catogory Code",
        "Name of contract Labour", "FATHERS NAME", "Category", "Deptt", "DOB", "DOJ", "Basic wages", "HRA", "CONVEYANCE", 
        "Medical Allowance", "Arrier","SPL ALLOWENCE"
      ];
      CommonFunction.downloadFile(this.employeeList,
        'Customer_Report.csv', 
        columnKeyArr, 
        columnTitleArr)
    }
    else{
      alert("No data for export");
    }
  }

  salaryReport(){
    let url = Constant.phpServiceURL+"report1.php";
    window.open(url);
  }
  
  closeAnyModal(modalName){
    this.setDefaultAllField();
    $("#"+modalName).modal("hide");
  }
  openAnyModal(modalName){
    $("#"+modalName).modal({
      backdrop : 'static',
      keyboard : false
    });
  }


  workingDaysTable = [];
  workingDays(){
    $("#workingDaysModal").modal({
      backdrop : 'static',
      keyboard : false
    });

    this.workingDaysTable = this.employeeList;
  }

  monthYear = "";
  submitWorkingData(){
    if(this.monthYear == ""){
      this.toastr.warning("Please select month year","Alert !",{timeOut : this.alertFadeoutTime});
      $(".monthYear").focus();
      return;
    }
    let wdData = [];
    for(let i=0;i<this.workingDaysTable.length;i++){
      let obj = this.workingDaysTable[i];
      let srNo = obj.srNo;
      let catogoryCode = obj.catogoryCode;
      let wd = $(".wd"+srNo).val();
      let noa = $(".noa"+srNo).val();
      if(noa == ""){
        this.toastr.warning("Please enter `No of Attendance` value","Alert !",{timeOut : this.alertFadeoutTime});
        $(".noa"+srNo).focus();
        return;
      }
      else if(parseInt(noa) > parseInt(wd)){
        this.toastr.warning("`No of Attendance`("+noa+") can not be greater then `Working Days`("+wd+")","Alert !",{timeOut : this.alertFadeoutTime});
        $(".noa"+srNo).focus();
        return;
      }
      wd = wd == "" ? 0 : wd;
      noa = noa == "" ? 0 : noa;
      let wdJson = {
        catogoryCode:catogoryCode,
        wd:wd,
        noa:noa
      }
      wdData.push(wdJson);
    }

    let jsonData = {
      monthYear: this.monthYear,
      wdData: wdData
    }

    this.layoutComponent.ShowLoading = true;
    this.sharedService.updateDataByUpdateType(jsonData,"workingDaysBulk")
    .subscribe((response) =>{
      if(response.code == Constant.SUCCESSFUL_STATUS_CODE){
        this.toastr.success(response.message,"Alert !",{timeOut : this.alertFadeoutTime});
        this.closeAnyModal("workingDaysModal");
        this.setDefaultAllField();
      }
      else{
        this.toastr.warning(response.message,"Alert !",{timeOut : this.alertFadeoutTime});
      }
      this.layoutComponent.ShowLoading = false;
      
    },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("submitWorkingData"),"Alert !",{timeOut : Constant.TOSTER_FADEOUT_TIME});
      this.layoutComponent.ShowLoading = false;
    });
  }

  submitWorkingDays(wdObj:any){
    if(this.monthYear == ""){
      this.toastr.warning("Please select month year","Alert !",{timeOut : this.alertFadeoutTime});
      $(".monthYear2").focus();
      return;
    }
    let srNo = wdObj.srNo;
    let catogoryCode = wdObj.catogoryCode;
    let wd = $(".wd"+srNo).val();
    let noa = $(".noa"+srNo).val();
    if(noa == ""){
      this.toastr.warning("Please enter `No of Attendance` value","Alert !",{timeOut : this.alertFadeoutTime});
      return;
    }
    else if(parseInt(noa) > parseInt(wd)){
      this.toastr.warning("`No of Attendance`("+noa+") can not be greater then `Working Days`("+wd+")","Alert !",{timeOut : this.alertFadeoutTime});
      return;
    }
    wd = wd == "" ? 0 : wd;
    noa = noa == "" ? 0 : noa;
    
    let jsonData = {
      monthYear: this.monthYear,
      catogoryCode:catogoryCode,
      workingDays:wd,
      noOfAttendance:noa
    }
    this.layoutComponent.ShowLoading = true;
    this.sharedService.updateDataByUpdateType(jsonData,"workingDays")
    .subscribe((response) =>{
      if(response.code == Constant.SUCCESSFUL_STATUS_CODE){
        this.toastr.success(response.message,"Alert !",{timeOut : this.alertFadeoutTime});
        this.salaryList = response.resultList;
      }
      else{
        this.toastr.warning(response.message,"Alert !",{timeOut : this.alertFadeoutTime});
      }
      this.layoutComponent.ShowLoading = false;
      
    },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("submitWorkingDays"),"Alert !",{timeOut : Constant.TOSTER_FADEOUT_TIME});
      this.layoutComponent.ShowLoading = false;
    });
  }
 
}
