import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
export declare class HttpService {
    private http;
    static BASE_URL: string;
    constructor(http: HttpClient);
    request<T>(endpoint: string, params: any, method: string): Observable<T> | any;
    get(endpoint: string, data?: {}): Observable<any>;
}
