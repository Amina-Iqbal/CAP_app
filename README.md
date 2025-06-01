# CAP Application

This project is a SAP Cloud Application Programming (CAP) application that displays external proficiency data through a Fiori Elements UI. It connects to an external API to retrieve skill proficiency data and presents it in a user-friendly interface.

## Project Overview

The application consists of:
- A CAP backend service that handles data retrieval from an external API
- A Fiori Elements UI application for displaying the data
- Authentication mechanism for secure API access

## Project Structure

- `/app` - UI frontend (Fiori Elements application)
- `/db` - Data models and sample data
- `/srv` - Service models and implementation

## Prerequisites

- Node.js (LTS version recommended)
- SAP Cloud Application Programming Model (CAP) tools
- Fiori tools (for UI development)

## Installation

1. Clone the repository
2. Install dependencies:

```bash 
npm install
```

3. Create a `.env` file in the root directory with the 

## Running the Application

### Development Mode

Start the application in development mode:

```bash
cds watch
```

This will start the CAP server and automatically reload when changes are detected.

### Access the Fiori Application

Once the server is running, access the Fiori application at:

```
http://localhost:4004/externaldataapp/webapp/index.html
```

Alternatively, you can run:

```bash
npm run watch-externaldataapp
```

This will start the CAP server and automatically open the Fiori application in your default browser.

## Features

- List view of external skill data
- Detailed view of individual skill records
- Read-only interface (no create, update, or delete operations)
- OAuth2 authentication for secure API access

## Technical Details

- The application uses CAP's service implementation to connect to an external API
- Data is fetched using axios with OAuth2 authentication
- The UI is built using SAP Fiori Elements with List Report and Object Page templates
- Sample mock data is included for development and testing