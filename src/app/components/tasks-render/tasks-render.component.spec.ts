import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksRenderComponent } from './tasks-render.component';

describe('TasksRenderComponent', () => {
  let component: TasksRenderComponent;
  let fixture: ComponentFixture<TasksRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
