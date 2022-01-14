package com.sl3v1.slaamovies.repositories;

import com.sl3v1.slaamovies.entities.Score;
import com.sl3v1.slaamovies.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
}
