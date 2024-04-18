import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import search from "../../../assets/search.svg";
import * as S from "./styles";
import { useLoaderData, useSubmit } from "react-router-dom";
import { HomeLoaderData } from "../../../router/routes/home";

const SearchBar: React.FC = () => {
  const { searchQuery } = useLoaderData() as HomeLoaderData;
  const submit = useSubmit();

  const [inputPreviousValue, setInputPreviousValue] = useState(searchQuery);

  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const filter = () => {
    if (formRef.current && inputRef.current) {
      const inputValue = inputRef.current.value;

      if (inputValue !== inputPreviousValue) {
        setInputPreviousValue(inputValue);

        submit(formRef.current);
      }
    }
  };

  const handleFormKeyDown = (event: KeyboardEvent<HTMLFormElement>) =>
    event.key === "Enter" && event.preventDefault();

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = searchQuery || "";
  }, [searchQuery]);

  return (
    <S.SearchBarForm
      ref={formRef}
      action="/search"
      id="search-form"
      role="search"
      onBlur={filter}
      onKeyDown={handleFormKeyDown}
    >
      <input
        ref={inputRef}
        id="search-query"
        type="search"
        name="search-query"
        placeholder="Buscar filme pelo nome"
        defaultValue={searchQuery || ""}
      />
      <button onClick={filter}>
        <img src={search} alt="lupa" />
      </button>
    </S.SearchBarForm>
  );
};

export default SearchBar;
