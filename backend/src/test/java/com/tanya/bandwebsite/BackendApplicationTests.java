package com.tanya.bandwebsite;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.test.web.servlet.MockMvc;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

// Loads the full application and verifies the backend security rules.
@SpringBootTest(properties = {
        // Test-only admin credentials; production secrets are never used in tests.
        "admin.username=test-admin",
        "admin.password-hash=$2a$10$SUKiddGfPNqIQC9b31BCP.4TpqJ4g4Su3zFMjLGSh7c5vqTTHCGRC"
})
// Enables HTTP endpoint testing without starting a real server.
@AutoConfigureMockMvc
class BackendApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    // Confirms that the Spring application context starts successfully.
    void contextLoads() {
    }

    @Test
    // The auth check must reject requests without credentials.
    void authMeRequiresAdminCredentials() throws Exception {
        mockMvc.perform(get("/api/auth/me"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    // The auth check must reject an incorrect password.
    void authMeRejectsWrongPassword() throws Exception {
        mockMvc.perform(get("/api/auth/me")
                        .header(HttpHeaders.AUTHORIZATION, basicAuth("test-admin", "wrong-password")))
                .andExpect(status().isUnauthorized());
    }

    @Test
    // Correct credentials should return the authenticated admin.
    void authMeReturnsCurrentAdmin() throws Exception {
        mockMvc.perform(get("/api/auth/me")
                        .header(HttpHeaders.AUTHORIZATION, basicAuth("test-admin", "test-password")))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.authenticated").value(true))
                .andExpect(jsonPath("$.username").value("test-admin"));
    }

    // Builds the Authorization header used by HTTP Basic Authentication.
    private String basicAuth(String username, String password) {
        String credentials = username + ":" + password;
        String encodedCredentials = Base64.getEncoder()
                .encodeToString(credentials.getBytes(StandardCharsets.UTF_8));
        return "Basic " + encodedCredentials;
    }
}
