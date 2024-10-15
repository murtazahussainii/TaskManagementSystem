# Task Management Application

## Overview

The Task Management Application is a simple yet efficient tool for managing tasks. This application allows users to create, update, delete, and view tasks, providing an intuitive interface for managing their workload. It is built using **Spring Boot** for the backend and **React.js** for the frontend.

## Features

- **User-Friendly Interface:** A modern, responsive design for a seamless user experience.
- **CRUD Operations:** Create, read, update, and delete tasks easily.
- **Data Persistence:** Utilizes JPA for data access and MySQL for data storage.
- **Error Handling:** Robust error handling for API requests.
- **Sample Data Initialization:** Prepopulates the database with sample tasks for demonstration.

## Technologies Used

- **Frontend:**
  - React.js
  - Axios
  - CSS

- **Backend:**
  - Spring Boot
  - Spring Data JPA
  - MySQL

## Getting Started

### Prerequisites

- Java 11 or higher
- Node.js
- MySQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/alisina97/TaskManagementSystem.git
   cd task-management-app

2. **Backend Setup:**
   
- Navigate to the `backend` directory:
  
  ```bash
  cd backend-java

- Update the application.properties file with your database credentials.
- Run the Spring Boot application:

```bash
  ./mvnw spring-boot:run

3. **Front Setup:**
   
- Navigate to the `frontend` directory:
  
  ```bash
  cd backend-react

- Install dependencies:
  ```bash
  npm i
- Start the React application:
  ```bash
  npm start

# Usage

- Open your browser and navigate to http://localhost:3000 to access the application.
	•	Use the provided interface to manage your tasks.
