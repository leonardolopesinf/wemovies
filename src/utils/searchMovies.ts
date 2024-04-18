const searchMovies = (movies: WeFitMovies.Movie[], search: string) => {
  if (search) {
    const formattedSearch = search.toLocaleLowerCase().replace(" ", "");

    const filteredMovies = movies.filter(({ title }) => {
      const formattedTitle = title.toLocaleLowerCase().replace(" ", "");

      return formattedTitle.includes(formattedSearch);
    });

    return filteredMovies;
  }

  return movies;
};

export default searchMovies;
