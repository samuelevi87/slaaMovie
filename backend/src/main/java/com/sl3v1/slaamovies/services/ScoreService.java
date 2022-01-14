package com.sl3v1.slaamovies.services;

import com.sl3v1.slaamovies.dto.MovieDTO;
import com.sl3v1.slaamovies.dto.ScoreDTO;
import com.sl3v1.slaamovies.entities.Movie;
import com.sl3v1.slaamovies.entities.Score;
import com.sl3v1.slaamovies.entities.User;
import com.sl3v1.slaamovies.repositories.MovieRepository;
import com.sl3v1.slaamovies.repositories.ScoreRepository;
import com.sl3v1.slaamovies.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;

@Service
public class ScoreService {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ScoreRepository scoreRepository;

    @Transactional
    public MovieDTO saveScore(ScoreDTO dto) {
        User user = userRepository.findByEmail(dto.getEmail());
        if (Objects.isNull(user)) {
            user = new User();
            user.setEmail(dto.getEmail());
            user = userRepository.saveAndFlush(user);
        }

        Movie movie = movieRepository.findById(dto.getMovieId()).get();

        Score score = new Score();
        score.setUser(user);
        score.setMovie(movie);
        score.setValue(dto.getScore());

        scoreRepository.saveAndFlush(score);

        double sum = 0.0;
        for (Score s : movie.getScores()) {
            sum += s.getValue();
        }

        double avg = sum / movie.getScores().size();

        movie.setScore(avg);
        movie.setCount(movie.getScores().size());

        movieRepository.save(movie);

        return new MovieDTO(movie);
    }


}
