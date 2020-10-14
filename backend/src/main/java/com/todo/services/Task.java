package com.todo.services;

public class Task {

    private final String value;
    private int status;

    public Task(String value, int status) {
        this.value = value;
        this.status = status;
    }

    public String getValue() {
        return value;
    }

    public int getStatus() {
        return status;
    }

    public void updateStatus() {
        this.status = (this.status + 1) % 3;
    }
}
