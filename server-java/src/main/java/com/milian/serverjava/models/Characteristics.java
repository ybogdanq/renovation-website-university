package com.milian.serverjava.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Characteristics {

    @Id
    private String id;
    private String name;
    private String renovationId;

    public Characteristics(String id, String name, String renovationId) {
        this.id = id;
        this.name = name;
        this.renovationId = renovationId;
    }

    public Characteristics() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRenovationId() {
        return renovationId;
    }

    public void setRenovationId(String renovationId) {
        this.renovationId = renovationId;
    }
}
