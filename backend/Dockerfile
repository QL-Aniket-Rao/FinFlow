# Stage 1: Build the application
FROM eclipse-temurin:21-jdk-alpine as builder
WORKDIR /app
COPY mvnw ./
COPY .mvn ./.mvn
COPY pom.xml ./
COPY src src/

# Package the application into a JAR
RUN ./mvnw clean package -DskipTests

# Stage 2: Create the minimal runtime image
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
# Copy the built JAR from the builder stage
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
