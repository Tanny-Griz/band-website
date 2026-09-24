package com.tanya.bandwebsite.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

// JPA entity: Hibernate maps this class to a table in PostgreSQL.
@Entity
public class Tour {

    // Primary key. PostgreSQL generates the ID automatically.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tourId;

    @NotBlank
    private String tourName;

    @NotNull
    private LocalDate startDate;

    @NotNull
    private LocalDate endDate;

    // Many tours can belong to one band.
    @ManyToOne
    // In the `tour` table, create a `band_id` column and use it as a foreign key referencing the `band` table.
    @JoinColumn(name = "band_id", nullable = false)
    private Band band;

    public Long getTourId() {
        return tourId;
    }

    public void setTourId(Long tourId) {
        this.tourId = tourId;
    }

    public String getTourName() {
        return tourName;
    }

    public void setTourName(String tourName) {
        this.tourName = tourName;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Band getBand() {
        return band;
    }

    public void setBand(Band band) {
        this.band = band;
    }
}