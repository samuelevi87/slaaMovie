package com.sl3v1.slaamovies.repositories;

import com.sl3v1.slaamovies.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie,Long> {
}
