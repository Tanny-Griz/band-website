package com.tanya.bandwebsite.controller;

import com.tanya.bandwebsite.model.Venue;
import com.tanya.bandwebsite.service.VenueService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/venues")
public class VenueController {

    private final VenueService venueService;

    // Spring injects VenueService through the constructor.
    public VenueController(VenueService venueService) {
        this.venueService = venueService;
    }

    // Returns all venues.
    @GetMapping
    public List<Venue> getAllVenues() {
        return venueService.getAllVenues();
    }

    // Returns one venue by its ID, or 404 if it does not exist.
    @GetMapping("/{id}")
    public ResponseEntity<Venue> getVenueById(@PathVariable Long id) {
        return venueService.getVenueById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Creates a new venue.
    @PostMapping
    public Venue createVenue(@Valid @RequestBody Venue venue) {
        return venueService.createVenue(venue);
    }

    // Updates an existing venue, or returns 404 if it does not exist.
    @PutMapping("/{id}")
    public ResponseEntity<Venue> updateVenue(
            @PathVariable Long id,
            @Valid @RequestBody Venue venue) {

        Venue updatedVenue = venueService.updateVenue(id, venue);

        if (updatedVenue == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updatedVenue);
    }

    // Deletes one venue by its ID.
    @DeleteMapping("/{id}")
    public void deleteVenue(@PathVariable Long id) {
        venueService.deleteVenue(id);
    }
}