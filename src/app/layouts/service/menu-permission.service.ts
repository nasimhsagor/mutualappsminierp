import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { GlobalComponent } from 'src/app/global-component';

const API_URL = GlobalComponent.API_URL;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') })
};
@Injectable({
  providedIn: 'root'
})
export class MenuPermissionService {

  constructor(private http: HttpClient) { }

  MenuPermission(intEnroll: any, channel: any, deviceinfo: any): Observable<any> {
    return this.http.post(API_URL + 'MenuPermission/menuPermissionListByEnroll', {
      intEnroll, channel, deviceinfo
    }, httpOptions).pipe(
      map((response: any) => {
        const data = response;
        return data;
      }),
      catchError((error: any) => {
        const errorMessage = 'Fail'; // Customize the error message as needed
        return throwError(errorMessage);
      })

    );
  }
  MenuUrlPermissionCheck(urlPath:any,intEnroll: any, channel: any, deviceinfo: any): Observable<any> {
    return this.http.post(API_URL + 'MenuPermission/GlobalUrlControl', {
      intEnroll, channel, deviceinfo
    }, httpOptions).pipe(
      map((response: any) => {
        const data = response;
        return data;
      }),
      catchError((error: any) => {
        const errorMessage = 'Fail'; // Customize the error message as needed
        return throwError(errorMessage);
      })

    );
  }
}
