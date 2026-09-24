package com.tanya.bandwebsite.service;

import com.tanya.bandwebsite.model.Show;
import com.tanya.bandwebsite.model.Tour;
import com.tanya.bandwebsite.model.Venue;
import com.tanya.bandwebsite.repository.ShowRepository;
import com.tanya.bandwebsite.repository.TourRepository;
import com.tanya.bandwebsite.repository.VenueRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShowService {

    private final ShowRepository showRepository;
    private final TourRepository tourRepository;
    private final VenueRepository venueRepository;

    // Spring injects all required repositories through the constructor.
    public ShowService(
            ShowRepository showRepository,
            TourRepository tourRepository,
            VenueRepository venueRepository) {

        this.showRepository = showRepository;
        this.tourRepository = tourRepository;
        this.venueRepository = venueRepository;
    }

    public List<Show> getAllShows() {
        return showRepository.findAll();
    }

    public Optional<Show> getShowById(Long id) {
        return showRepository.findById(id);
    }

    public Show createShow(Show show, Long tourId, Long venueId) {
        Tour tour = tourRepository.findById(tourId).orElse(null);
        Venue venue = venueRepository.findById(venueId).orElse(null);

        if (tour == null || venue == null) {
            return null;
        }

        show.setTour(tour);
        show.setVenue(venue);

        return showRepository.save(show);
    }

    public Show updateShow(Show show, Long id, Long tourId, Long venueId) {
        Show existingShow = showRepository.findById(id).orElse(null);
        Tour tour = tourRepository.findById(tourId).orElse(null);
        Venue venue = venueRepository.findById(venueId).orElse(null);

        if (existingShow == null || tour == null || venue == null) {
            return null;
        }

        existingShow.setShowDateTime(show.getShowDateTime());
        existingShow.setTour(tour);
        existingShow.setVenue(venue);

        return showRepository.save(existingShow);
    }

    public void deleteShow(Long id) {
        showRepository.deleteById(id);
    }
}