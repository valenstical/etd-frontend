import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  static BASE_URL = "";

  constructor(private http: HttpClient) {}

  request<T>(
    endpoint: string,
    params: any,
    method: string
  ): Observable<T> | any {
    return this.http[method](`${HttpService.BASE_URL}/${endpoint}`, params);
  }

  get(endpoint: string, data = {}): Observable<any> {
    return this.request(endpoint, { params: data }, "get");
  }
}
