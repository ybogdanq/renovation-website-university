package com.milian.serverjava.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Renovation {

    @Id
    private String id;
    private String name;
    private String description;
    private Integer price;
    private String characteristicsIds;
    @Transient
    private ArrayList<Characteristics> characteristics;
    @Transient
    private ArrayList<Comment> comments;
    @Transient
    private ArrayList<Rating> ratings;

    public Renovation() {
    }

    public Renovation(String id, String name, String description, Integer price, String characteristicsIds) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.characteristicsIds = characteristicsIds;
    }

    public String getCharacteristicsIds() {
        return characteristicsIds;
    }

    public void setCharacteristicsIds(String characteristicsIds) {
        this.characteristicsIds = characteristicsIds;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public ArrayList<Characteristics> getCharacteristics() {
        return characteristics;
    }

    public void setCharacteristics(ArrayList<Characteristics> characteristics) {
        this.characteristics = characteristics;
    }

    public ArrayList<Comment> getComments() {
        return comments;
    }

    public void setComments(ArrayList<Comment> comments) {
        this.comments = comments;
    }

    public ArrayList<Rating> getRatings() {
        return ratings;
    }

    public void setRatings(ArrayList<Rating> ratings) {
        this.ratings = ratings;
    }
}
