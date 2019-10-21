import { Injectable } from "@angular/core";
import { HttpService } from "library";
import { Observable } from "rxjs";
import { DOMStorageStrategy } from "ngx-cacheable/common/DOMStorageStrategy";
import { Cacheable } from "ngx-cacheable";
import { ResponseData } from "../models/responseData";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class DocumentsService {
  constructor(private httpService: HttpService) {
    HttpService.BASE_URL = environment.API_URL;
  }

  @Cacheable({
    maxCacheCount: 5,
    storageStrategy: DOMStorageStrategy
  })
  getDepartments(): Observable<ResponseData> {
    return this.httpService.get("departments");
  }

  @Cacheable({
    maxCacheCount: 1000
  })
  getDocuments(param = {}): Observable<ResponseData> {
    return this.httpService.get("documents", param);
  }
}
