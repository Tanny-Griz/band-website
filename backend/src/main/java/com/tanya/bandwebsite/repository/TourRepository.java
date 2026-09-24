package com.tanya.bandwebsite.repository;

import com.tanya.bandwebsite.model.Tour;
import org.springframework.data.jpa.repository.JpaRepository;

// Repository for Tour database operations.
// JpaRepository provides basic CRUD methods automatically.
public interface TourRepository extends JpaRepository<Tour, Long> {
}