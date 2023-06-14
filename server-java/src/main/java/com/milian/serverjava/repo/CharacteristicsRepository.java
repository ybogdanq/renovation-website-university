package com.milian.serverjava.repo;

import com.milian.serverjava.models.Characteristics;
import com.milian.serverjava.models.Renovation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface CharacteristicsRepository extends CrudRepository<Characteristics, String> {

//    @Query("SELECT c FROM Characteristics c WHERE c.id IN :ids")
//    ArrayList<Characteristics> findAllByIds(@Param("ids") List<String> ids);

    @Query("SELECT c FROM Characteristics c WHERE c.renovationId = ?1")
    ArrayList<Characteristics> findAllById(String id);
}
