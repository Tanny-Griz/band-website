package com.tanya.bandwebsite.repository;

import com.tanya.bandwebsite.model.Show;
import org.springframework.data.jpa.repository.JpaRepository;

// Repository for Show database operations.
// JpaRepository provides basic CRUD methods automatically.
public interface ShowRepository extends JpaRepository<Show, Long> {
}