package com.tanya.bandwebsite.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

// JPA entity: Hibernate maps this class to a table in PostgreSQL.
@Entity
public class Band {

    // Primary key. PostgreSQL generates the ID automatically.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bandId;

    private String bandName;
    private String genre;
    private String description;

    public Long getBandId() {
        return bandId;
    }

    public void setBandId(Long bandId) {
        this.bandId = bandId;
    }

    public String getBandName() {
        return bandName;
    }

    public void setBandName(String bandName) {
        this.bandName = bandName;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}