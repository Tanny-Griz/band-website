package com.tanya.bandwebsite.service;

import com.tanya.bandwebsite.model.Band;
import com.tanya.bandwebsite.model.Tour;
import com.tanya.bandwebsite.repository.BandRepository;
import com.tanya.bandwebsite.repository.TourRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TourService {

    private final TourRepository tourRepository;
    private final BandRepository bandRepository;

    // Spring injects both repositories through the constructor.
    public TourService(TourRepository tourRepository, BandRepository bandRepository) {
        this.tourRepository = tourRepository;
        this.bandRepository = bandRepository;
    }

    public List<Tour> getAllTours() {
        return tourRepository.findAll();
    }

    public Optional<Tour> getTourById(Long id) {
        return tourRepository.findById(id);
    }

    public Tour createTour(Tour tour, Long bandId) {
        Band band = bandRepository.findById(bandId).orElse(null);

        if (band == null) {
            return null;
        }

        tour.setBand(band);

        return tourRepository.save(tour);
    }

    public Tour updateTour(Long id, Tour updatedTour, Long bandId) {
        Tour existingTour = tourRepository.findById(id).orElse(null);
        Band band = bandRepository.findById(bandId).orElse(null);

        if (existingTour == null || band == null) {
            return null;
        }

        existingTour.setTourName(updatedTour.getTourName());
        existingTour.setStartDate(updatedTour.getStartDate());
        existingTour.setEndDate(updatedTour.getEndDate());
        existingTour.setBand(band);

        return tourRepository.save(existingTour);
    }

    public void deleteTour(Long id) {
        tourRepository.deleteById(id);
    }
}