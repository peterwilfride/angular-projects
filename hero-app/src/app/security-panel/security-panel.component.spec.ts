import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPanelComponent } from './security-panel.component';

describe('SecurityPanelComponent', () => {
  let component: SecurityPanelComponent;
  let fixture: ComponentFixture<SecurityPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityPanelComponent]
    });
    fixture = TestBed.createComponent(SecurityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
