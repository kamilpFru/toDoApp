package com.kamilp.toDoApp.service;

import com.kamilp.toDoApp.exceptions.TaskNotFoundException;
import com.kamilp.toDoApp.model.Task;
import com.kamilp.toDoApp.repo.TaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class TaskService {
    private final TaskRepo taskRepo;

    @Autowired
    public TaskService(TaskRepo taskRepo) {
        this.taskRepo = taskRepo;
    }

    public Task addTask(Task task) {
        System.out.println(task.toString());
        return taskRepo.save(task);
    }

    public void deleteTask(int id) {
        taskRepo.deleteTaskById(id);
    }

    public List<Task> findAllTasks() {
        return taskRepo.findAll();
    }

    public Task findTaskById(int id) {
        return taskRepo.findTaskById(id)
                .orElseThrow(() -> new TaskNotFoundException("Task " + id + " not found."));
    }
}
