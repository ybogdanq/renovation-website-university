package com.milian.serverjava.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Comment {

    @Id
    private String id;
    private String renovationId;
    private String message;


    public Comment() {
    }

    public Comment(String id, String renovationId, String message) {
        this.id = id;
        this.renovationId = renovationId;
        this.message = message;
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
}
