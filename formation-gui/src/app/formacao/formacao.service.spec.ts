import { TestBed } from '@angular/core/testing';

import { FormacaoService } from './formacao.service';

describe('FormacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormacaoService = TestBed.get(FormacaoService);
    expect(service).toBeTruthy();
  });
});
