import { TestBed } from '@angular/core/testing';

import { PizzaPiecesService } from './pizza-pieces.service';

describe('PizzaPiecesService', () => {
  let service: PizzaPiecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaPiecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
