import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';
import {Manager} from "../../experience_design/model/manager";

describe('BaseService', () => {
  let service: BaseService<Manager>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
