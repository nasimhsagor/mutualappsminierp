import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Login Auth
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../core/services/authfake.service';
import { first } from 'rxjs/operators';
import { ToastService } from './toast-service';
import {UserInfo} from './../../user-info'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login Component
 */
export class LoginComponent implements OnInit {

  // Login Form
  loginForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;
  // set the current year
  year: number = new Date().getFullYear();

  constructor(private formBuilder: UntypedFormBuilder, private authenticationService: AuthenticationService, private router: Router,
    private authFackservice: AuthfakeauthenticationService, private route: ActivatedRoute, public toastService: ToastService) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    
    localStorage.clear();
    localStorage.clear();
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }
    /**
     * Form Validatyion
     */
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    localStorage.clear();
    localStorage.clear();
    //Login Api
    this.authenticationService.login(this.f['email'].value, this.f['password'].value).subscribe((data: any) => {
      if (data.token != null && data.token != '')  {    
        //console.log(data.loginResponseDetails );
        localStorage.setItem('toast', 'true');
        localStorage.setItem('currentUser', JSON.stringify(data.loginResponseDetails ));
        localStorage.setItem('token', data.token );
        localStorage.setItem('intEnroll', data.loginResponseDetails.intEnroll) ;
        localStorage.setItem('strCode', data.loginResponseDetails.strCode) ;
        localStorage.setItem('strName', data.loginResponseDetails.strName) ;
        localStorage.setItem('strDepatrmentName', data.loginResponseDetails.strDepatrmentName) ;
        localStorage.setItem('strDesignationName', data.loginResponseDetails.strDesignationName) ;
        localStorage.setItem('strJobStationName', data.loginResponseDetails.strJobStationName) ;
        localStorage.setItem('strJobtypeName', data.loginResponseDetails.strJobtypeName) ;
        localStorage.setItem('dteAppointmentDate', data.loginResponseDetails.dteAppointmentDate) ;
        localStorage.setItem('strEmail', data.loginResponseDetails.strEmail) ;
        localStorage.setItem('strPhoneno', data.loginResponseDetails.strPhoneno) ;
        localStorage.setItem('strSupervisor', data.loginResponseDetails.strSupervisor) ;
        localStorage.setItem('strUnit', data.loginResponseDetails.strUnit) ;        
        localStorage.setItem('intUnitID', data.loginResponseDetails.intUnit) ;  


        
        localStorage.setItem('toast', 'true');
        localStorage.setItem('currentUser', JSON.stringify(data.loginResponseDetails ));
        localStorage.setItem('token', data.token );
        localStorage.setItem('intEnroll', data.loginResponseDetails.intEnroll) ;
        localStorage.setItem('strCode', data.loginResponseDetails.strCode) ;
        localStorage.setItem('strName', data.loginResponseDetails.strName) ;
        localStorage.setItem('strDepatrmentName', data.loginResponseDetails.strDepatrmentName) ;
        localStorage.setItem('strDesignationName', data.loginResponseDetails.strDesignationName) ;
        localStorage.setItem('strJobStationName', data.loginResponseDetails.strJobStationName) ;
        localStorage.setItem('strJobtypeName', data.loginResponseDetails.strJobtypeName) ;
        localStorage.setItem('dteAppointmentDate', data.loginResponseDetails.dteAppointmentDate) ;
        localStorage.setItem('strEmail', data.loginResponseDetails.strEmail) ;
        localStorage.setItem('strPhoneno', data.loginResponseDetails.strPhoneno) ;
        localStorage.setItem('strSupervisor', data.loginResponseDetails.strSupervisor) ;
        localStorage.setItem('strUnit', data.loginResponseDetails.strUnit) ;        
        localStorage.setItem('intUnitID', data.loginResponseDetails.intUnit) ;   
        //UserInfo.intEnroll= data.loginResponseDetails.intEnroll
        //  console.log(data.loginResponseDetails);      
        //  console.log(data.loginResponseDetails.intUnit);    
        
        // setTimeout(() => { 
        // }, 1000);
        this.router.navigate(['/']);

      } else {
        this.toastService.show("Faild to Login", { classname: 'bg-danger text-white', delay: 15000 });
      }
    });

    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //   return;
    // } else {
    //   if (environment.defaultauth === 'firebase') {
    //     this.authenticationService.login(this.f['email'].value, this.f['password'].value).then((res: any) => {
    //       this.router.navigate(['/']);
    //     })
    //       .catch(error => {
    //         this.error = error ? error : '';
    //       });
    //   } else {
    //     this.authFackservice.login(this.f['email'].value, this.f['password'].value).pipe(first()).subscribe(data => {
    //           this.router.navigate(['/']);
    //         },
    //         error => {
    //           this.error = error ? error : '';
    //         });
    //   }
    // }
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  

}
