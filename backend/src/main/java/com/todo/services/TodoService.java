package com.todo.services;

import org.springframework.stereotype.Service;

@Service
public class TodoService {

    private static Todo todo;

    static {
        todo = new Todo();
    }

    public Todo getTodo(){
        return todo;
    }

    public void addTask(String task) {
        todo.addTask(task);
    }

    public void updateStatus(int taskId) {
        todo.updateStatus(taskId);
    }

    public void deleteTask(int taskId) {
        todo.deleteTask(taskId);
    }

    public void updateHeading(String heading) {
        todo.updateHeading(heading);
    }

    public void resetTodo() {
        todo.resetTodo();
    }
}
