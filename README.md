# Mattime — Jiu‑Jitsu Training Tracker

This repository contains the initial setup for **Mattime**, a simple web
application for logging jiu‑jitsu training sessions, tracking streaks,
and visualising progress. The project uses a React frontend with
Tailwind CSS and provides placeholders for both Python and Java
backends. Firebase integration and additional features will be
added incrementally according to the project roadmap.

## Repository Structure

```
mattime/
├── frontend/       # React + Vite + Tailwind CSS
│   ├─ index.html
│   ├─ vite.config.js
│   ├─ tailwind.config.js
│   ├─ postcss.config.js
│   └─ src/
│       ├─ App.jsx
│       ├─ index.css
│       └─ main.jsx
├── py-analytics/   # FastAPI/Flask skeleton (Python 3)
│   ├─ app.py
│   └─ requirements.txt
└── java-api/       # Java skeleton
    └─ src/
        └─ Main.java
```

### Frontend

The `frontend` directory is scaffolded to work with [Vite](https://vitejs.dev/) and
contains a minimal React application using Tailwind CSS for styling.

**Local development (once dependencies are installed):**

```sh
cd frontend
npm install           # install dependencies from package.json
npm run dev           # start the Vite dev server
```

### Backend (Python — `py-analytics/`)

The `py-analytics` folder contains a simple Flask application as a
placeholder backend. It returns a JSON welcome message at the root
path and can be converted to a FastAPI service for analytics (for
example, computing training streaks).

**Local development:**

```sh
cd py-analytics
python3 -m venv venv  # create a virtual environment (optional)
source venv/bin/activate
pip install -r requirements.txt
python app.py         # run the Flask development server
```

### Backend (Java — `java-api/`)

The `java-api` folder contains a simple `Main.java` class as a
placeholder. You can expand this into a full Java backend (e.g.
Spring Boot) if you prefer. To compile and run the example:

```sh
cd java-api/src
javac Main.java
java Main
```

## Next Steps

This repository is just the foundation. The project plan includes
setting up Firebase for authentication and data storage, implementing
session logging, streak calculations, a moves library, and basic
charts using Recharts. See the project specification for details on
milestones and responsibilities.

Feel free to modify the structure and tooling to match your team's
preferences and to integrate any frameworks or services required.
