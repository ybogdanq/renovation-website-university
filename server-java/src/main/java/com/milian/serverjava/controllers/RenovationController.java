package com.milian.serverjava.controllers;

import com.google.gson.Gson;
import com.milian.serverjava.models.Characteristics;
import com.milian.serverjava.models.Comment;
import com.milian.serverjava.models.Rating;
import com.milian.serverjava.models.Renovation;
import com.milian.serverjava.repo.CharacteristicsRepository;
import com.milian.serverjava.repo.CommentRepository;
import com.milian.serverjava.repo.RatingRepository;
import com.milian.serverjava.repo.RenovationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class RenovationController {

    @Autowired
    RenovationRepository renovationRepository;

    @Autowired
    RatingRepository ratingRepository;

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    CharacteristicsRepository characteristicsRepository;


    @GetMapping("/renovations")
    ArrayList<Renovation> getRenovations() {

        ArrayList<Renovation> renovations;
        renovations = (ArrayList<Renovation>) renovationRepository.findAll();

        for (Renovation renovation : renovations) {
            ArrayList<Comment> comments = commentRepository.findAllByRenovationId(renovation.getId());
            ArrayList<Rating> ratings = ratingRepository.findAllByRenovationId(renovation.getId());
            ArrayList<Characteristics> characteristics = getCharacteristicsByRenovationId(renovation.getId());

            renovation.setComments(comments);
            renovation.setRatings(ratings);
            renovation.setCharacteristics(characteristics);
        }

        return renovations;
    }

    @GetMapping("/renovation/{id}")
    Renovation getRenovations(@PathVariable(value = "id") Long id) {

        Optional<Renovation> renovation = renovationRepository.findById(id.toString());
        ArrayList<Comment> comments = commentRepository.findAllByRenovationId(id.toString());
        ArrayList<Rating> ratings = ratingRepository.findAllByRenovationId(id.toString());
        ArrayList<Characteristics> characteristics = getCharacteristicsByRenovationId(id.toString());

        Renovation renovationFinal = renovation.get();
        renovationFinal.setComments(comments);
        renovationFinal.setRatings(ratings);
        renovationFinal.setCharacteristics(characteristics);
//        renovationFinal.setImages(getImagesSeparated(id.toString()));

        return renovationFinal;
    }

    public ArrayList<Characteristics> getCharacteristicsByRenovationId(String renovationId) {
        Renovation renovation = renovationRepository.findById(renovationId).orElse(null);
        if (renovation != null) {
//            ArrayList<String> ids = new ArrayList<>(Arrays.asList(renovation.getCharacteristicsIds().split(",\\s*")));

            return characteristicsRepository.findAllById(renovationId);
        }
        return new ArrayList<>();
    }

//    public ArrayList<String> getImagesSeparated(String renovationId) {
//        Renovation renovation = renovationRepository.findById(renovationId).orElse(null);
//        if (renovation != null) {
//            return  new ArrayList<>(Arrays.asList(renovation.getImgsrc().split(",\\s*")));
//        }
//        return new ArrayList<>();
//    }
}
