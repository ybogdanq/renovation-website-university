package com.milian.serverjava.repo;

import com.milian.serverjava.models.Comment;
import com.milian.serverjava.models.Renovation;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface CommentRepository extends CrudRepository<Comment, String> {

    @Transactional
    @Query("SELECT c FROM Comment c " +
            "WHERE c.renovationId = ?1")
    ArrayList<Comment> findAllByRenovationId(String RenovationId);
}
