import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDINGS" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTERIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
