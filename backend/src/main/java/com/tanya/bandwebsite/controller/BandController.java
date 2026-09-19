package com.tanya.bandwebsite.controller;

import com.tanya.bandwebsite.model.Band;
import com.tanya.bandwebsite.service.BandService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/bands")
public class BandController {

    private final BandService bandService;

    // Spring injects BandService through the constructor.
    public BandController(BandService bandService) {
        this.bandService = bandService;
    }

    // Handles GET /api/bands and returns all bands.
    @GetMapping
    public List<Band> getAllBands() {
        return bandService.getAllBands();
    }

    // Returns one band by its ID.
    // Returns 404 if the band does not exist.
    @GetMapping("/{id}")
    public ResponseEntity<Band> getBandById(@PathVariable Long id) {
        return bandService.getBandById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Deletes one band by its ID.
    @DeleteMapping("/{id}")
    public void deleteBand(@PathVariable Long id) {
        bandService.deleteBand(id);
    }

    // Updates one band by its ID.
    // Returns 404 if the band does not exist.
    @PutMapping("/{id}")
    public ResponseEntity<Band> updateBand(
            @PathVariable Long id,
            @Valid @RequestBody Band band) {

        Band updatedBand = bandService.updateBand(id, band);

        if (updatedBand == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updatedBand);
    }

    // Handles POST /api/bands.
    // @RequestBody converts incoming JSON into a Band object.
    @PostMapping
    public Band createBand(@Valid @RequestBody Band band) {
        return bandService.createBand(band);
    }
}