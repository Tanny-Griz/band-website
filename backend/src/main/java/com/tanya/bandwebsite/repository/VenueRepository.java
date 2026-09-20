package com.tanya.bandwebsite.repository;

import com.tanya.bandwebsite.model.Venue;
import org.springframework.data.jpa.repository.JpaRepository;

// Repository for Venue database operations.
// JpaRepository provides basic CRUD methods automatically.
public interface VenueRepository extends JpaRepository<Venue, Long> {
}