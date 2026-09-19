package com.tanya.bandwebsite.repository;

import com.tanya.bandwebsite.model.Band;
import org.springframework.data.jpa.repository.JpaRepository;

// Repository for Band database operations.
// JpaRepository provides basic CRUD methods such as save(), findAll(), findById(), and deleteById().
public interface BandRepository extends JpaRepository<Band, Long> {
}