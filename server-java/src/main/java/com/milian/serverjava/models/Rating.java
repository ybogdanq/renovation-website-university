package com.milian.serverjava.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Rating {

    @Id
    private String id;
    private String renovationId;
    private int rating;

    public Rating() {
    }

    public Rating(String id, String renovationId, int rating) {
        this.id = id;
        this.renovationId = renovationId;
        this.rating = rating;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
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
