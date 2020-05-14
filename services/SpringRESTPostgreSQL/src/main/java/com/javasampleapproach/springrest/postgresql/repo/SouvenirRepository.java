package com.javasampleapproach.springrest.postgresql.repo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.javasampleapproach.springrest.postgresql.model.Souvenir;

public interface SouvenirRepository extends CrudRepository<Souvenir, Long>{
	
}
