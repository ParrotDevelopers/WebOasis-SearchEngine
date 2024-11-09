# WebOasis Search Engine

WebOasis Search Engine is a private, self-hosted search engine designed to prioritize user privacy. With WebOasis, you can search the web without being tracked, ensuring your searches remain confidential.

## Features

- **Privacy-Focused**: No tracking, no ads, and no data collection.
- **Self-Hosted**: Run the search engine locally or on your own server.
- **Fast and Lightweight**: Optimized for quick and efficient search results.
- **Open Source**: Licensed under the AGPL-3.0 license.

## Getting Started

These instructions will help you get a copy of the WebOasis Search Engine up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Docker](https://www.docker.com/get-started)

### Running Locally

To run WebOasis Search Engine locally using Docker, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ParrotDevelopers/WebOasis-SearchEngine.git
   cd WebOasis-SearchEngine
   ```

2. Build and run the Docker container:

   ```bash
   docker build -t weboasis-search .
   docker run -p 3000:3000 weboasis-search
   ```

3. Access the search engine:

   Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## License

WebOasis Search Engine is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**. See the [LICENSE](LICENSE) file for more details.
