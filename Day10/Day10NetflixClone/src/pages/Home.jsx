import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Row from '../components/Row';
import axios from 'axios';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  // Fetch trending and top-rated movies when the component mounts
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingResponse = await axios.get('/api/trending');
        const topRatedResponse = await axios.get('/api/top-rated');
        setTrendingMovies(trendingResponse.data.results);
        setTopRatedMovies(topRatedResponse.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="home">
      {/* Header component */}
      <Header />

      {/* Banner component */}
      <Banner />

      {/* Row components displaying the trending and top-rated movies */}
      <Row title="Trending Now" movies={trendingMovies} />
      <Row title="Top Rated" movies={topRatedMovies} />
    </div>
  );
}

export default Home;
