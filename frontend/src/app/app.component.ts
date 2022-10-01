import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NastepneToDo';

  public tasks!: Task[];
  public deleteTask!: Task;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
      this.getTasks();
  }

  public getTasks(): void {
    this.taskService.getTasks().subscribe( // sprawdzamy co dzieje sie 
      (response: Task[]) => {             // gdy dostaniemy dane, jesli
        this.tasks = response;           // response to Task, zapisujemy
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // public onOpenModal(task: Task, mode: string): void {
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal')
  //   if (mode === 'add') {
  //     button.setAttribute('data-target', '#addEmployeeModal')
  //   }
  // }

  public onAddTask(addForm: NgForm): void {
    this.taskService.addTask(addForm.value).subscribe(
      (response: Task) => {
        console.log(response);
        this.getTasks();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
      );
  }

  public onUpdateTask(taskId: number): void {
    
  }

  public onDeleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe(
      (response: void) => {
        console.log(response);
        this.getTasks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
      );
  }

  deleteTodo(id: number) {
    this.tasks = this.tasks.filter((v, i) => i !== id);
    this.taskService.deleteTask(id);
  }

}
