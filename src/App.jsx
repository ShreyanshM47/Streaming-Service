import React, { useState } from 'react';
import './App.css';

function TitlePage({ title, videoUrl, onClose }) {
  return (
    <div className="title-page">
      <h2>{title}</h2>
      <div className="media-player">
        <video src={videoUrl} controls autoPlay />
      </div>
      <button onClick={onClose}>Back to Phanflix</button>
    </div>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTitle, setSelectedTitle] = useState(null);

  const movies = [
    { id: 1, title: 'Movie 1', videoUrl: 'placeholder.mp4' },
    { id: 2, title: 'Movie 2', videoUrl: 'placeholder.mp4' },
    { id: 3, title: 'Movie 3', videoUrl: 'placeholder.mp4' },
    { id: 4, title: 'Movie 4', videoUrl: 'placeholder.mp4' },
    { id: 5, title: 'Movie 5', videoUrl: 'placeholder.mp4' },
    { id: 6, title: 'Movie 6', videoUrl: 'placeholder.mp4' },
  ];

  const shows = [
    { id: 1, title: 'Show 1', videoUrl: 'placeholder.mp4' },
    { id: 2, title: 'Show 2', videoUrl: 'placeholder.mp4' },
    { id: 3, title: 'Show 3', videoUrl: 'placeholder.mp4' },
    { id: 4, title: 'Show 4', videoUrl: 'placeholder.mp4' },
    { id: 5, title: 'Show 5', videoUrl: 'placeholder.mp4' },
    { id: 6, title: 'Show 6', videoUrl: 'placeholder.mp4' },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTitleClick = (title, videoUrl) => {
    setSelectedTitle({ title, videoUrl });
  };

  const handleCloseTitle = () => {
    setSelectedTitle(null);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredShows = shows.filter(show =>
    show.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      {selectedTitle ? (
        <TitlePage
          title={selectedTitle.title}
          videoUrl={selectedTitle.videoUrl}
          onClose={handleCloseTitle}
        />
      ) : (
        <>
          <header className="App-header">
            <h1>Phanflix</h1>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for movies or TV shows..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <nav>
              <a href="#">Home</a>
              <a href="#">Movies</a>
              <a href="#">TV Shows</a>
              <a href="#">My List</a>
            </nav>
          </header>
          <main className="content">
            <section className="hero">
              <h2>Welcome to Phanflix</h2>
              <p>Watch unlimited movies and TV shows anywhere, anytime.</p>
              <button>Start Watching</button>
            </section>
            <section className="featured-movies">
              <h3>Featured Movies</h3>
              <div className="movie-grid">
                {filteredMovies.map(movie => (
                  <div className="movie-card" key={movie.id} onClick={() => handleTitleClick(movie.title, movie.videoUrl)}>
                    <div className="media-player">
                      <video src={movie.videoUrl} muted loop autoPlay />
                    </div>
                    <div className="movie-title">{movie.title}</div>
                  </div>
                ))}
              </div>
            </section>
            <section className="featured-shows">
              <h3>Featured TV Shows</h3>
              <div className="show-grid">
                {filteredShows.map(show => (
                  <div className="show-card" key={show.id} onClick={() => handleTitleClick(show.title, show.videoUrl)}>
                    <div className="media-player">
                      <video src={show.videoUrl} muted loop autoPlay />
                    </div>
                    <div className="show-title">{show.title}</div>
                  </div>
                ))}
              </div>
            </section>
          </main>
          <footer className="App-footer">
            <p>&copy; 2024 Phanflix</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
