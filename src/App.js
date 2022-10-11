import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import CreateNotePage from './pages/CreateNotePage';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1><Link to="/">Personal Note</Link></h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateNotePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/archive" element={<ArchivePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
