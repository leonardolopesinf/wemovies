import React, { useMemo } from "react";
import * as S from "./styles";
import Movie from "../Movie";
import { useLoaderData, useNavigation } from "react-router-dom";
import { HomeLoaderData } from "../../../router/routes/home";
import searchMovies from "../../../utils/searchMovies";
import SearchBar from "../SearchBar";
import Loading from "../../../components/Loading";

type Props = {
  movies: WeFitMovies.Movie[];
};

const Movies: React.FC<Props> = ({ movies }) => {
  const { searchQuery } = useLoaderData() as HomeLoaderData;
  const navigation = useNavigation();

  const filteredMovies = useMemo(
    () => searchMovies(movies, searchQuery),
    [movies, searchQuery]
  );

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("search-query");

  return (
    <S.Container>
      <SearchBar />
      {!searching ? (
        <S.List>
          {filteredMovies.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </S.List>
      ) : (
        <Loading />
      )}
    </S.Container>
  );
};

export default Movies;
