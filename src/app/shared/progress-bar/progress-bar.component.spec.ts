/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProgressBarComponent } from './progress-bar.component';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProgressBarComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.css('.progress-bar-progress'));
    fixture.detectChanges();
  });

  it('should default width to 0%', () => {
    expect(element.styles['width']).toBe('0%');
  });

  it('should set the correct width', () => {
    component.value = 30;
    fixture.detectChanges();
    expect(element.styles['width']).toBe('30%', 'value 30 / 100');

    component.max = 5;
    component.value = 2;
    fixture.detectChanges();
    expect(element.styles['width']).toBe('40%', 'value 2 / 5');

    component.max = 5;
    component.value = 5;
    fixture.detectChanges();
    expect(element.styles['width']).toBe('100%', 'value 5 / 5');
  });
});
