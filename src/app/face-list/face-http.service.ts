import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Image} from "./image";

interface IServerResponse {
  images: Image[];
  total: number;
}

@Injectable()
export class FaceHttpService {

  BASE_URL = "https://bplnevme1i.execute-api.ap-northeast-1.amazonaws.com/prod/images";

  constructor(private http: Http) { }

  retrieveFaces(currentPage: number, perPage: number): Observable<Image[]> {
    var url = this.BASE_URL + "?current_page=" + currentPage + "&per_page=" + perPage;
    return this.http.get(url)
      .map(
        (r: Response) => r.json()
      )

  }

}
