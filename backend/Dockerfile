# Build stage: compile the Spring Boot application into a runnable JAR.
FROM maven:3.9-eclipse-temurin-17 AS build

WORKDIR /app

# Copy the build file first so Docker can reuse dependency layers between builds.
COPY pom.xml .
RUN mvn dependency:go-offline -DskipTests

# Copy the source code only after dependencies have been downloaded.
COPY src src
RUN mvn package -DskipTests

# Runtime stage: the final image contains only Java and the built application.
FROM eclipse-temurin:17-jre

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

# Render provides PORT at runtime; Spring Boot reads it from application.properties.
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
