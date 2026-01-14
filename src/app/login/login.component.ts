import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared/service/SharedService';
import { Constant } from '../shared/constant/Contant';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { CommonFunction } from '../shared/service/CommonFunction';
import { AuthenticateModel } from './model/AuthenticateModel';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ServiceName = 'LoginUser';
  ShowLoading = false;
  public loginModel : AuthenticateModel;

  //HIDING THE SHOW BUTTON BY DEFAULT.
  hide = true;
  invalid = false;
  tagLine = "Connecting Millions…..Where They Live, Work and Travel";
  facebookLink = "https://www.facebook.com/trinitymobileapp";
  linkedInLink = "https://www.linkedin.com/company/trinity-mobile-app-lab-pvt-ltd/";
  twitterLink = "https://twitter.com/trinity_app";
  loginPage = "#6699ff";
  button = "#f28f05";
  color1 = "#0384f9";
  color2 = "#843dff";
  mobileNumber = "";
  otpNumber = "";
  newPassword = "";
  confirmPassword = "";
  validOTPNumber = "";
  isOTP_Validate : boolean = false;

  constructor(private sharedService : SharedService, private router:Router, private toastr: ToastrService,
    private titleService : Title) { 
      localStorage.clear();
      this.loginModel = new AuthenticateModel();
      this.titleService.setTitle("Tepayroll | Login")
    }

  ngOnInit(): void {
    this.getAppUrl();
    let browser = CommonFunction.getBrowserName();
    localStorage.setItem("browser",browser);
  }

  getAppUrl(){
      localStorage.setItem("loginPage",this.loginPage);
      localStorage.setItem("button",this.button);
      localStorage.setItem("color1",this.color1);
      localStorage.setItem("color2",this.color2);
  }

  OnSubmitting() {
    this.ShowLoading = true
    this.sharedService.authenticate(this.loginModel)
    .subscribe( (response) =>{
      this.ShowLoading = false
         if(response.code === Constant.SUCCESSFUL_STATUS_CODE){
          localStorage.setItem("empName",response.resultList[0].empName);
          localStorage.setItem("empMobile",this.loginModel.mobile);
          localStorage.setItem(btoa("isValidToken"),btoa(Constant.CREST_PRIVATE_KEY));
          this.router.navigate(['/layout']);
        }
        else if(response.code === Constant.NO_RECORDS_FOUND_CODE){
          this.toastr.warning(response.message, 'Alert',{timeOut : Constant.TOSTER_FADEOUT_TIME});
        }
        else{
          this.toastr.warning('Invalid Login Credentials...', 'Alert',{timeOut : Constant.TOSTER_FADEOUT_TIME});
        }
  },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("authenticate"),"Alert !",{timeOut : Constant.TOSTER_FADEOUT_TIME});
      this.ShowLoading = false;
    })
  }

}
