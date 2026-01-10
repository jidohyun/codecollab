import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">CodeCollab</h1>
          <p className="text-gray-600">AI-Enhanced Collaborative Code Editor</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome to CodeCollab</h2>
          <p className="text-gray-600">Initializing application...</p>
        </div>
      </main>
    </div>
  )
}

export default App
