"""
Simple Flask backend for the Mattime project.

This backend is intended to be an example placeholder while you flesh
out the real API. It exposes a single route `/` that returns a JSON
welcome message. Feel free to expand this into a RESTful API for
sessions, moves, streaks, or integrate it with Firebase via the
firebase_admin SDK.
"""

from flask import Flask, jsonify


def create_app() -> Flask:
    """Create and configure the Flask application."""
    app = Flask(__name__)

    @app.route('/')
    def index():
        return jsonify({
            'message': 'Welcome to the Mattime backend',
            'status': 'ok'
        })

    return app


if __name__ == '__main__':
    app = create_app()
    # Running on port 5000 by default; adjust as needed.
    app.run(debug=True)
