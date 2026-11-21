package com.tanya.bandwebsite.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

// Provides the admin UI with a safe way to verify the current credentials.
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @GetMapping("/me")
    public Map<String, Object> getCurrentAdmin(Authentication authentication) {
        return Map.of(
                "authenticated", true,
                "username", authentication.getName()
        );
    }
}
