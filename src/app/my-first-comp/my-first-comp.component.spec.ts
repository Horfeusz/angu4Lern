import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstCompComponent } from './my-first-comp.component';

describe('MyFirstCompComponent', () => {
  let component: MyFirstCompComponent;
  let fixture: ComponentFixture<MyFirstCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
