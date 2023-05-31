package com.milian.serverjava.controllers;

import com.google.gson.Gson;
import com.milian.serverjava.models.Renovation;
import com.milian.serverjava.repo.RenovationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.Optional;

@Controller
public class RenovationController {

    @Autowired
    RenovationRepository renovationRepository;

    @PostMapping("/renovations")
    String getRenovations() {

        ArrayList<Renovation> renovations = new ArrayList<>();
        renovations = (ArrayList<Renovation>) renovationRepository.findAll();

        Gson gson = new Gson();
        String json = gson.toJson(renovations);

        return json;
    }

    @PostMapping("/renovation/{id}")
    String getRenovations(@PathVariable(value = "id") Long id) {

        Optional<Renovation> renovation = renovationRepository.findById(id);

        Gson gson = new Gson();
        String json = gson.toJson(renovation);

        return json;
    }
}
