import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Loading from "../../components/Loading";
import Movies from "./Movies";
import { HomeLoaderData } from "../../router/routes/home";
import ErrorElement from "../../components/ErrorElement";

const Home: React.FC = () => {
  const data = useLoaderData() as HomeLoaderData;

  return (
    <Suspense fallback={<Loading />}>
      <Await errorElement={<ErrorElement />} resolve={data.movies}>
        {(movies) => <Movies movies={movies} />}
      </Await>
    </Suspense>
  );
};

export default Home;
