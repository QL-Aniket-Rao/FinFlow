# Use a slim Java 21 base image
FROM eclipse-temurin:21-jre-alpine

# Set the working directory
WORKDIR /app

# Copy the packaged JAR file into the container
# Assuming the build process generates target/backend-0.0.1-SNAPSHOT.jar
COPY target/backend-0.0.1-SNAPSHOT.jar app.jar

# Expose the port the application runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
