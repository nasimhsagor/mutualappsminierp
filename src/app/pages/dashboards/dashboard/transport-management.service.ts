import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { GlobalComponent } from 'src/app/global-component';

const API_URL = GlobalComponent.API_URL;
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('token')})
};

@Injectable({
  providedIn: 'root'
})
export class TransportManagementService {

  constructor(private http: HttpClient) { }


  //getVehicleRegistration(VendorReg:any): Observable<any>{
  getVehicleRegistration(intEnroll:any,intUnitID:any,intBusinessID:any, strErpCode:any, strCompanyName:any, strCompanyOwnerName:any, strOwnerAddress:any,strOwnerEmail:any,strOwnerPhoneNumber:any,strContactPersonName:any, strContactPersonEmail:any, strContactPersonPhone:any,channel:any,deviceinfo:any): Observable<any>{
     return this.http.post(API_URL + 'TransportVendor/transportVendorCreate', {
      // VendorReg
        intEnroll,intUnitID,intBusinessID, strErpCode,strCompanyName, strCompanyOwnerName,strOwnerAddress,strOwnerEmail,strOwnerPhoneNumber,strContactPersonName,strContactPersonEmail,strContactPersonPhone,channel,deviceinfo
   }, httpOptions).pipe(
       map((response: any) => {
           const data = response;
           return data;
       }),
       catchError((error: any) => {
           const errorMessage = 'No Vehicle Found'; // Customize the error message as needed
           return throwError(errorMessage);
       })
 
 
   );
   }
}
