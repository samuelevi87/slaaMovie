package com.sl3v1.slaamovies.services;

import com.sl3v1.slaamovies.dto.MovieDTO;
import com.sl3v1.slaamovies.entities.Movie;
import com.sl3v1.slaamovies.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;

    @Transactional
    public Page<MovieDTO> findAll(Pageable pageable){
        Page<Movie> result = repository.findAll(pageable);
        return result.map(MovieDTO::new);
    }

    @Transactional
    public MovieDTO findById(Long id){
        Movie result = repository.findById(id).get();
        return new MovieDTO(result);
    }

}
