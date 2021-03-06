import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  public baseUrl = '';
  constructor(private http: HttpClient) { }

  //Fan 1
  fan1on() {
    this.http.get(this.baseUrl + '/fan1on').subscribe();
  }

  fan1off() {
    this.http.get(this.baseUrl + '/fan1off').subscribe();
  }
  //Fan 2
  fan2on() {
    this.http.get(this.baseUrl + '/fan2on').subscribe();

  }

  fan2off() {
    this.http.get(this.baseUrl + '/fan2off').subscribe();

  }

  light1on() {
    this.http.get(this.baseUrl + '/light1on').subscribe();

  }

  light1off() {
    this.http.get(this.baseUrl + '/light1off').subscribe();

  }

  light2on() {
    this.http.get(this.baseUrl + '/light2on').subscribe();

  }

  light2off() {
    this.http.get(this.baseUrl + '/light2off').subscribe();

  }

  allon() {
    this.http.get(this.baseUrl + '/allon').subscribe();

  }

  alloff() {
    this.http.get(this.baseUrl + '/alloff').subscribe();

  }
  getStatus(): Observable<string> {
    return this.http.get<string>(this.baseUrl + '/status');
  }

  scanDevices(){
    for (let index = 1; index < 255; index++) {
      const ipUrl = 'http://192.168.1.' + index;
      this.http.get<string>(ipUrl+'/discovery').subscribe((device: any)=>{
        console.log('found ip', ipUrl);
        this.baseUrl = ipUrl;
      }, err=>{
        console.log('error', ipUrl, err);
      });
    }
  }
}
