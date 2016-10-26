import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Planet } from './Planet';

@Injectable()
export class SSolarService {
    private planetsUrl = 'https://apisystemsolar.azurewebsites.net/api/solarsystem';  // URL to web api

  constructor(private http: Http) { }

  getPlanets(): Observable<Planet[]> {
    return this.http.get(this.planetsUrl)
               .map((response: Response) => <Planet[]>response.json())
               .catch(this.handleError);
  }

  //error 
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
