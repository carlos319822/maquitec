import { TestBed } from '@angular/core/testing';

import { InterceptorService } from './interceptor.service';

describe('InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule ({
    providers:[
      InterceptorService
    ]
  
  }));

  it('should be created', () => {
    const interceptor: InterceptorService = TestBed.inject(InterceptorService)
    expect(interceptor).toBeTruthy();
  });
});
