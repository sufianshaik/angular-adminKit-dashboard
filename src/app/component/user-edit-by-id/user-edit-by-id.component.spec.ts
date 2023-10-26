import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditByIdComponent } from './user-edit-by-id.component';

describe('UserEditByIdComponent', () => {
  let component: UserEditByIdComponent;
  let fixture: ComponentFixture<UserEditByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditByIdComponent]
    });
    fixture = TestBed.createComponent(UserEditByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
