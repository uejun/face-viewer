import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FaceHttpService} from "./face-http.service";
import {Input} from "@angular/core/src/metadata/directives";
import {Image} from "./image";
import {Observable} from "rxjs";

declare var Viewer: any;

@Component({
  selector: 'app-face-list',
  templateUrl: './face-list.component.html',
  styleUrls: ['./face-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaceListComponent implements OnInit {

  // @Input('data') imgList: Image[] = [
  //   {url: "https://s3-ap-northeast-1.amazonaws.com/sympathy01/faces/1/lfw/Aaron_Eckhart/Aaron_Eckhart_0001_1.jpg",},
  //   {url: "https://s3-ap-northeast-1.amazonaws.com/sympathy01/faces/1/lfw/Aaron_Eckhart/Aaron_Eckhart_0001_1.jpg"},
  //   {url: "https://s3-ap-northeast-1.amazonaws.com/sympathy01/faces/1/lfw/Aaron_Eckhart/Aaron_Eckhart_0001_1.jpg"},
  //   {url: "https://s3-ap-northeast-1.amazonaws.com/sympathy01/faces/1/lfw/Aaron_Eckhart/Aaron_Eckhart_0001_1.jpg"},
  //   {url: "https://s3-ap-northeast-1.amazonaws.com/sympathy01/faces/1/lfw/Aaron_Eckhart/Aaron_Eckhart_0001_1.jpg"},
  //   {url: "https://s3-ap-northeast-1.amazonaws.com/sympathy01/faces/1/lfw/Aaron_Eckhart/Aaron_Eckhart_0001_1.jpg"},
  //   {url: "https://s3-ap-northeast-1.amazonaws.com/sympathy01/faces/1/lfw/Aaron_Eckhart/Aaron_Eckhart_0001_1.jpg"},
  //   {url: "https://s3-ap-northeast-1.amazonaws.com/sympathy01/faces/1/lfw/Aaron_Eckhart/Aaron_Eckhart_0001_1.jpg"},
  //   {url: "https://s3-ap-northeast-1.amazonaws.com/sympathy01/faces/1/lfw/Aaron_Eckhart/Aaron_Eckhart_0001_1.jpg"}
  // ];

  asyncImages: Observable<Image[]>;
  p: number = 1;
  total: number = 100;
  loading: boolean;

  constructor(private faceHttpService: FaceHttpService) {
    //var viewer = new Viewer(document.getElementById('images'));
  }


  ngOnInit() {
    this.getPage(1);
  }

  getPage(page) {
    this.loading = true;
    this.asyncImages = this.faceHttpService.retrieveFaces(page, 8)
      .do(res => {
        this.p = page;
        this.loading = false;
      })
  }

}
