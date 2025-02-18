import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanchangService {
  private apiUrl = 'https://api.astroapi.dev/vedic/v0/kundali/';
  private apiToken = '2d7f197b67fe999dc98da82949e327ada87e1a94'; // Store securely!

  constructor(private http: HttpClient) {}

  getPanchangDetails(date: Date): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.apiToken}`,
      'Content-Type': 'application/json',
    });

    const requestBody = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: 12, // Noon for accuracy
      minute: 0,
      second: 0,
      timezone: 'Asia/Kolkata',
      dst: false,
      lat: 23.3301, // Default: Modify as needed
      lon: 77.7843,
    };

    return this.http.post<any>(this.apiUrl, requestBody, { headers });
  }
}
