package com.milian.serverjava.repo;

import com.milian.serverjava.models.Rating;
import com.milian.serverjava.models.Renovation;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface RatingRepository extends CrudRepository<Rating, String> {

    @Transactional
    @Query("SELECT r FROM Rating r " +
            "WHERE r.renovationId = ?1")
    ArrayList<Rating> findAllByRenovationId(String renovationId);
}
