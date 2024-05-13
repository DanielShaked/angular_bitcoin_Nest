import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) {


  }

  public getRate(coins: number) {
    return this.http.get<{ answer: string }>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
      .pipe(
        retry(1),
        catchError(this._handleError)
      )
  }

  private _handleError(err: HttpErrorResponse) {
    console.log('err:', err)
    return throwError(() => err)
  }

}
