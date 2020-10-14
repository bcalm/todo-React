package com.todo.services;

import java.util.ArrayList;
import java.util.List;

public class Todo{

    private final List<Task> tasks;
    private String heading;


    public Todo(){
        this.tasks = new ArrayList<>();
        this.heading = "Todo";
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public String getHeading() {
        return heading;
    }

    public void addTask(String task) {
        tasks.add(new Task(task, 0));
    }

    public void updateStatus(int taskId) {
        Task task = tasks.get(taskId);
        task.updateStatus();
    }

    public void deleteTask(int taskId) {
        tasks.remove(taskId);
    }

    public void updateHeading(String heading) {
        this.heading =  heading;
    }

    public void resetTodo() {
        this.tasks.clear();
        this.heading = "Todo";
    }
}

