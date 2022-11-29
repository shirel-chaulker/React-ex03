import React, { useEffect, useState } from "react";
import { FilterComponent } from "../../components/filter/filter.component";
import { MovieComponents } from "../../components/movie/movie.components";
import "./dvdPage.css";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "00621ea455msh01eb96a0e0b238dp1390f2jsnc44885f22e4a",
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  },
};

export const DvdPage = (props) => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      let result = await fetch(
        "https://movies-app1.p.rapidapi.com/api/movies",
        options
      );
      let json = await result.json();
      let arr = json.results;
      console.log(arr);
      setMovies(arr);
    } catch (e) {}
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Data moviesArr={movies}></Data>
    </div>
  );
};

const Data = ({ moviesArr }) => {
  if (moviesArr === undefined || moviesArr.length === 0) {
    return <h1>loadding data</h1>;
  } else {
    return (
      <div>
        <div>
          <FilterComponent></FilterComponent>
        </div>
        <div className="cardaContainer">
          {moviesArr.map((m) => {
            return (
              <MovieComponents
                title={m.titleOriginal}
                img={m.image}
                link={m.embedUrls[0].url}
                key={m.title}
              ></MovieComponents>
            );
          })}
        </div>
      </div>
    );
  }
};
