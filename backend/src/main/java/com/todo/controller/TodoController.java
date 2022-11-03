package com.todo.controller;

import com.todo.services.Todo;
import com.todo.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/api/getTodo")
    public Todo getTodo() {
        return todoService.getTodo();
    }

    @PostMapping("/api/addTask")
    public void addTask(@RequestBody String task) {
        todoService.addTask(task);
    }

    @PostMapping("/api/updateStatus")
    public void updateStatus(@RequestBody int taskId) {
        todoService.updateStatus(taskId);
    }

    @PostMapping("/api/deleteTask")
    public void deleteTask(@RequestBody int taskId) {
        todoService.deleteTask(taskId);
    }

    @PostMapping("/api/updateHeading")
    public void updateHeading(@RequestBody String heading) {
        todoService.updateHeading(heading);
    }

    @PostMapping("/api/resetTodo")
    public void resetTodo() {
        todoService.resetTodo();
    }

}

