package com.sl3v1.slaamovies.repositories;

import com.sl3v1.slaamovies.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmail(String email);
}
