# Web Build Docker Demo

A simple web application demonstrating different approaches to Docker containerization.

## Project Overview

This project showcases a basic Express.js web server that serves static HTML content. It's designed to demonstrate Docker build strategies - from naive to optimized multi-stage builds.

## Prerequisites

- Node.js (v18 recommended)
- npm
- Docker (for containerized deployment)

## Installation

Clone the repository and install dependencies:

```sh
npm install
```

## Running the Application

### Locally

To run the application locally, use the following command:

```sh
npm run build
```

This will build the application and place the static files in the `dist` directory.

Then, start the server:

```sh
npm start
```

This will start the server on `http://localhost:3000`.

### Docker

This project includes two Docker approaches:

1. **Naive Dockerfile**: A simple Dockerfile that builds the application and serves it using a Node.js server.
2. **Multi-stage Dockerfile**: An optimized Dockerfile that builds the application in one stage and serves it using a lightweight web server (Nginx).

#### Naive Dockerfile

To build and run the naive Docker image, use the following commands:

```sh
docker build -f Dockerfile.naive -t web-app:naive .
docker run -p 3000:3000 web-app:naive
```

This will build the Docker image and run it, exposing the application on `http://localhost:3000`.

#### Multi-stage Dockerfile

To build and run the multi-stage Docker image, use the following commands:

```sh
docker build -f Dockerfile.optimized -t web-app:optimized .
docker run -p 3000:80 web-app:optimized
```

This will build the Docker image and run it, exposing the application on `http://localhost:3000`.
