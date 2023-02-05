import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AppService {
    constructor(
        private http: HttpClient
    ) { }

    public requestEntity(
        method: string,
        apiLink: string,
        body: any = {},
        showMessage: boolean = true
      ) {
        return this.http.request(
          method,
          apiLink,
          {
            body,
            params: method === 'GET' && Object.keys(body).length > 0 ? new HttpParams({fromObject: body}) : {},
          }
        )
          .pipe(
            catchError((e: any) => {
              if (showMessage) {
                // this.handleErrorMessages(e.error);
              }
              return throwError(() => e.error || '');
            }),
            map((response: any) => {
              try {
                const isError = (response?.status >= 400 && response?.status <= 500);
                // if (showMessage && response?.message && response?.message?.toLowerCase() !== 'success') {
                //   this.showMessage(response.message, isError ? 'error' : 'success');
                // }
                return response;
              } catch (e) {
                return response;
              }
            }),
          );
      }
}