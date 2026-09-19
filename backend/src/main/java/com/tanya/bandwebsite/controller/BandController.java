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

    // Handles POST /api/bands.
    // @RequestBody converts incoming JSON into a Band object.
    @PostMapping
    public Band createBand(@RequestBody Band band) {
        return bandService.createBand(band);
    }
}