package com.tanya.bandwebsite;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties = {
        "admin.username=test-admin",
        "admin.password-hash=$2a$10$SUKiddGfPNqIQC9b31BCP.4TpqJ4g4Su3zFMjLGSh7c5vqTTHCGRC"
})
class BackendApplicationTests {

    @Test
    void contextLoads() {
    }

}
