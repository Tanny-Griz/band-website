package com.tanya.bandwebsite.controller;

import com.tanya.bandwebsite.model.Tour;
import com.tanya.bandwebsite.service.TourService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tours")
public class TourController {

    private final TourService tourService;

    // Spring injects TourService through the constructor.
    public TourController(TourService tourService) {
        this.tourService = tourService;
    }

    // Returns all tours.
    @GetMapping
    public List<Tour> getAllTours() {
        return tourService.getAllTours();
    }

    // Returns one tour by its ID, or 404 if it does not exist.
    @GetMapping("/{id}")
    public ResponseEntity<Tour> getTourById(@PathVariable Long id) {
        return tourService.getTourById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Creates a tour and connects it to an existing band.
    @PostMapping
    public ResponseEntity<Tour> createTour(
            @Valid @RequestBody Tour tour,
            @RequestParam Long bandId) {

        Tour createdTour = tourService.createTour(tour, bandId);

        if (createdTour == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(createdTour);
    }

    // Updates an existing tour and its band connection.
    @PutMapping("/{id}")
    public ResponseEntity<Tour> updateTour(
            @PathVariable Long id,
            @Valid @RequestBody Tour tour,
            @RequestParam Long bandId) {

        Tour updatedTour = tourService.updateTour(id, tour, bandId);

        if (updatedTour == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updatedTour);
    }

    // Deletes one tour by its ID.
    @DeleteMapping("/{id}")
    public void deleteTour(@PathVariable Long id) {
        tourService.deleteTour(id);
    }
}