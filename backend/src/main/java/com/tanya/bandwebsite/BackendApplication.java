package com.tanya.bandwebsite;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Main Spring Boot application class and backend entry point.
// The @SpringBootApplication annotation combines three important features:
// 1. enables Spring Boot auto-configuration;
// 2. scans this package and its subpackages for application components;
// 3. starts the embedded web server (Tomcat) for HTTP requests.
@SpringBootApplication
public class BackendApplication {

    // The JVM calls main() first when the Java application starts.
    // SpringApplication.run() creates the Spring application context:
    // it registers controllers, services, repositories, and configuration,
    // connects to PostgreSQL, and then starts accepting requests.
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

}
