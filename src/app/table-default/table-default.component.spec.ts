import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDefaultComponent } from './table-default.component';

describe('TableDefaultComponent', () => {
  let component: TableDefaultComponent;
  let fixture: ComponentFixture<TableDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
