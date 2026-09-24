package com.tanya.bandwebsite.controller;

import com.tanya.bandwebsite.model.Show;
import com.tanya.bandwebsite.service.ShowService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shows")
public class ShowController {

    private final ShowService showService;

    // Spring injects ShowService through the constructor.
    public ShowController(ShowService showService) {
        this.showService = showService;
    }

    // Returns all shows.
    @GetMapping
    public List<Show> getAllShows() {
        return showService.getAllShows();
    }

    // Returns one show by its ID, or 404 if it does not exist.
    @GetMapping("/{id}")
    public ResponseEntity<Show> getShowById(@PathVariable Long id) {
        return showService.getShowById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Creates a show and connects it to an existing tour and venue.
    @PostMapping
    public ResponseEntity<Show> createShow(
            @Valid @RequestBody Show show,
            @RequestParam Long tourId,
            @RequestParam Long venueId) {

        Show createdShow = showService.createShow(show, tourId, venueId);

        if (createdShow == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(createdShow);
    }

    // Updates an existing show and its tour/venue connections.
    @PutMapping("/{id}")
    public ResponseEntity<Show> updateShow(
            @PathVariable Long id,
            @Valid @RequestBody Show show,
            @RequestParam Long tourId,
            @RequestParam Long venueId) {

        Show updatedShow = showService.updateShow(show, id, tourId, venueId);

        if (updatedShow == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updatedShow);
    }

    // Deletes one show by its ID.
    @DeleteMapping("/{id}")
    public void deleteShow(@PathVariable Long id) {
        showService.deleteShow(id);
    }
}