package com.kamilp.toDoApp.repo;

import com.kamilp.toDoApp.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TaskRepo extends JpaRepository<Task, Long> {

    void deleteTaskById(int id);
    Optional<Task> findTaskById(int id);
}
