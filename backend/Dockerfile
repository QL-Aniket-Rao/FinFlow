# Stage 1: Build the application
FROM eclipse-temurin:21-jdk-jammy AS builder
WORKDIR /app

# Copy the pom file and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the source code and package the application
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Create the final minimal image
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app

# Copy the built JAR from the builder stage
COPY --from=builder /app/target/*.jar app.jar

# Expose the application port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
