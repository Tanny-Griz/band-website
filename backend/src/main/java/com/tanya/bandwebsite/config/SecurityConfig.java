package com.tanya.bandwebsite.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

// Protects content-changing API requests while keeping the public website readable.
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                // The API is stateless: the admin UI sends an Authorization header for each protected request.
                .csrf(AbstractHttpConfigurer::disable)
                .cors(Customizer.withDefaults())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers(HttpMethod.GET, "/api/**").permitAll()
                        .requestMatchers(HttpMethod.OPTIONS, "/api/**").permitAll()
                        .requestMatchers("/api/**").hasRole("ADMIN")
                        .requestMatchers("/error").permitAll()
                        .anyRequest().denyAll())
                .httpBasic(Customizer.withDefaults())
                .build();
    }

    @Bean
    public UserDetailsService userDetailsService(
            @Value("${admin.username}") String username,
            @Value("${admin.password-hash}") String passwordHash) {

        return new InMemoryUserDetailsManager(
                User.withUsername(username)
                        .password(passwordHash)
                        .roles("ADMIN")
                        .build());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
