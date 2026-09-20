package com.tanya.bandwebsite.service;

import com.tanya.bandwebsite.model.Venue;
import com.tanya.bandwebsite.repository.VenueRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VenueService {

    private final VenueRepository venueRepository;

    // Spring injects VenueRepository through the constructor.
    public VenueService(VenueRepository venueRepository) {
        this.venueRepository = venueRepository;
    }

    public List<Venue> getAllVenues() {
        return venueRepository.findAll();
    }

    public Optional<Venue> getVenueById(Long id) {
        return venueRepository.findById(id);
    }

    public Venue createVenue(Venue venue) {
        return venueRepository.save(venue);
    }

    public Venue updateVenue(Long id, Venue updatedVenue) {
        Venue existingVenue = venueRepository.findById(id).orElse(null);

        if (existingVenue == null) {
            return null;
        }

        existingVenue.setVenueName(updatedVenue.getVenueName());
        existingVenue.setCity(updatedVenue.getCity());
        existingVenue.setState(updatedVenue.getState());
        existingVenue.setCountry(updatedVenue.getCountry());

        return venueRepository.save(existingVenue);
    }

    public void deleteVenue(Long id) {
        venueRepository.deleteById(id);
    }
}