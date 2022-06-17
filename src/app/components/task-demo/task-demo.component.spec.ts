import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDemoComponent } from './task-demo.component';

describe('TaskDemoComponent', () => {
  let component: TaskDemoComponent;
  let fixture: ComponentFixture<TaskDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
