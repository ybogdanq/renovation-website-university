package com.milian.serverjava.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Comment {

    @Id
    private String id;
    private String renovationId;
    private String message;
    private String username;

    public Comment() {
    }

    public Comment(String id, String renovationId, String message, String username) {
        this.id = id;
        this.renovationId = renovationId;
        this.message = message;
        this.username = username;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRenovationId() {
        return renovationId;
    }

    public void setRenovationId(String renovationId) {
        this.renovationId = renovationId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
