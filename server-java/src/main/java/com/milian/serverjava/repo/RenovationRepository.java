package com.milian.serverjava.repo;

import com.milian.serverjava.models.Renovation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RenovationRepository extends CrudRepository<Renovation, String> {
}
