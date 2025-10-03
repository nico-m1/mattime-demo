import React from 'react';

/**
 * The main App component. This functional component currently renders
 * a simple welcome message using Tailwind classes for basic styling.
 * As you build out the project, you'll replace this content with
 * navigation and pages for session logs, moves library, streaks, and
 * charts.
 */
function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Mattime</h1>
      <p className="text-lg text-gray-700">
        This is the starting point for your jiu‑jitsu training tracker.
      </p>
    </div>
  );
}

export default App;
