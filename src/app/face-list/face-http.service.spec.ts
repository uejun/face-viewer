/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FaceHttpService } from './face-http.service';

describe('Service: FaceHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaceHttpService]
    });
  });

  it('should ...', inject([FaceHttpService], (service: FaceHttpService) => {
    expect(service).toBeTruthy();
  }));
});
