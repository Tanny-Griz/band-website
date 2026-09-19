package com.tanya.bandwebsite.service;

import com.tanya.bandwebsite.model.Band;
import com.tanya.bandwebsite.repository.BandRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BandService {

    private final BandRepository bandRepository;

    public BandService(BandRepository bandRepository) {
        this.bandRepository = bandRepository;
    }

    public List<Band> getAllBands() {
        return bandRepository.findAll();
    }

    public Optional<Band> getBandById(Long id) {
        return bandRepository.findById(id);
    }

    public Band createBand(Band band) {
        return bandRepository.save(band);
    }

    public void deleteBand(Long id) {
        bandRepository.deleteById(id);
    }

    public Band updateBand(Long id, Band updatedBand) {
        Band existingBand = bandRepository.findById(id).orElse(null);
        //1. Searches for a Band by ID
        //2. If not found → returns null
        //3. If found → updates the fields
        //4. save() saves the changes to the database

        if (existingBand == null) {
            return null;
        }

        existingBand.setBandName(updatedBand.getBandName());
        existingBand.setGenre(updatedBand.getGenre());
        existingBand.setDescription(updatedBand.getDescription());

        return bandRepository.save(existingBand);
    }
}