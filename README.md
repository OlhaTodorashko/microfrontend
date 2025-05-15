# Microfrontends R&D Prototype

This project is a research and development prototype of a **microfrontend architecture** that integrates multiple independently developed frontend modules into a single container application.

## Visit GitHub page
> https://olhatodorashko.github.io/microfrontend/

## Architecture Overview
The solution demonstrates how to compose a scalable frontend from decoupled applications using **React** and **Vue.js**:

- **Container App** – built with **React**, responsible for layout, routing, and loading microfrontends
- **Authentication Module** – standalone **React** app
- **Dashboard Module** – standalone **Vue.js** app
- **Marketing Module** – standalone **React** app

All modules are independently developed, built, and deployed, and then consumed by the container at runtime.

## Tech Stack
- **React** (for container and two modules)
- **Vue.js** (for dashboard module)
- **Webpack Module Federation** (for dynamic integration)
- **CI/CD Ready** setup
- **Shared state handling** across modules
- **Cross-framework rendering** in a unified UI shell

## Features
- Cross-framework microfrontend composition (React + Vue)
- Independent builds and deployments
- Seamless routing between modules
- Shared design system and communication layer
- Easily scalable for large distributed teams

## Use Case
This prototype is designed for enterprise-scale frontends, where teams work independently on separate parts of the application — improving maintainability, scalability, and release independence.

## Project Structure
```
/container  (React)
/auth       (React)
/dashboard  (Vue.js)
/marketing  (React)
```

## Status
**Experimental** — built for research purposes to evaluate feasibility and integration patterns of cross-framework microfrontends.
> Created as part of an architectural R&D initiative exploring scalable frontend modularity.

### Steps
```cmd
1. mkdir /products
2. cd /products
3. npm init -y
4. npm install webpack@5.88.0 webpack-cli@4.10.0 webpack-dev-server@4.7.4 faker@5.1.0 html-webpack-plugin@5.5.0 --save-exact
5. mkdir /container
6. npm init -y
7. npm install webpack@5.88.0 webpack-cli@4.10.0 webpack-dev-server@4.7.4 html-webpack-plugin@5.5.0 nodemon --save-exact
```
For starting the container in developer mode:
```
1. install all of the dependencies for each app
2. start the dev server for each app: auth, dashboard, marketing (look into <app>/package.json for the proper command)
3. start the dev server for container (look into container/package.json for the proper command)
```

### Usefully links
```
Docs GitHub actions - https://docs.github.com/en/actions
Keeping your GitHub Actions and workflows secure - https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/
```