# FinFlow

FinFlow is a modern, scalable financial application built using a microservices architecture.

## 🚀 Tech Stack

*   **Frontend:** React.js, TypeScript, Material UI
*   **Backend:** Java 21, Spring Boot
*   **Database:** PostgreSQL
*   **Caching:** Redis
*   **Orchestration:** Docker, Kubernetes
*   **Cloud:** AWS

## 📂 Project Structure

The project is divided into three main sections:

*   **`frontend/`**: Contains the client-side application built with React.
*   **`backend/`**: Contains the microservices built with Spring Boot.
*   **`infra/`**: Contains infrastructure definitions (Docker Compose, Kubernetes manifests, etc.).

## ⚙️ Getting Started

### Prerequisites

Ensure you have the following installed:

*   Java Development Kit (JDK) 21
*   Node.js and npm
*   Docker and Docker Compose
*   PostgreSQL and Redis instances (or Docker equivalents)

### Local Development Setup (Using Docker Compose)

1.  **Navigate to the infrastructure directory:**
    ```bash
    cd infra
    ```

2.  **Start services:**
    ```bash
    docker-compose up -d
    ```
    This command will start the PostgreSQL and Redis containers.

3.  **Build and Run Backend:**
    *   Navigate to the backend directory: `cd ../backend`
    *   Build the JAR: `mvn clean package`
    *   Run the service (or use Docker Compose for the service itself).

4.  **Build and Run Frontend:**
    *   Navigate to the frontend directory: `cd ../frontend`
    *   Install dependencies: `npm install`
    *   Start the development server: `npm run dev`

## 🔬 Acceptance Criteria

*   A working 'Hello World' endpoint in the Spring Boot backend.
*   A basic, styled landing page in the React frontend.
*   Docker images can be built successfully for both components.
*   Initial configuration files are present and correctly configured for the stated stack.