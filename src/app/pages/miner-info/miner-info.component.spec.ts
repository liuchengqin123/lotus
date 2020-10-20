import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinerInfoComponent } from './miner-info.component';

describe('MinerInfoComponent', () => {
  let component: MinerInfoComponent;
  let fixture: ComponentFixture<MinerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
