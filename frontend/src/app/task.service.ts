import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  
  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiServerUrl}/tasks/all`);
  }
  
  public addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiServerUrl}/tasks/add`, task);
  }
  
  public deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/tasks/delete/${taskId}`);
  }

    
}
