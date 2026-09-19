package com.tanya.bandwebsite.controller;

import com.tanya.bandwebsite.model.Band;
import com.tanya.bandwebsite.service.BandService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @GetMapping("/{id}")
    public Band getBandById(@PathVariable Long id) {
        return bandService.getBandById(id).orElse(null);
    }

    // Deletes one band by its ID.
    @DeleteMapping("/{id}")
    public void deleteBand(@PathVariable Long id) {
        bandService.deleteBand(id);
    }

    // Updates one band by its ID.
    @PutMapping("/{id}")
    public Band updateBand(@PathVariable Long id, @RequestBody Band band) {
        return bandService.updateBand(id, band);
    }

    // Handles POST /api/bands.
    // @RequestBody converts incoming JSON into a Band object.
    @PostMapping
    public Band createBand(@RequestBody Band band) {
        return bandService.createBand(band);
    }
}