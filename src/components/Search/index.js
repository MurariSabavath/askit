import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useTheme } from "styled-components";
import { FiSearch } from "react-icons/fi";
import { ClickAwayListener } from "@mui/base";
import { apiInstance } from "../../services/axiosInstance";
import Input from "../common/Input";
import {
  InputContianer,
  ResultCard,
  ResultContainer,
  SearchResultLink,
} from "./styled";

const Search = () => {
  const themeContext = useTheme();
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef();

  const { data, refetch, isFetching } = useQuery(
    "search",
    () => apiInstance(`/search/${search}`),
    { refetchOnWindowFocus: false, enabled: false },
  );

  const handleInputChange = (e) => {
    setShowResults(true);
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search.length !== 0) {
      refetch();
    }
  }, [search]);

  const handleResultClick = () => {
    setShowResults(false);
    setSearch("");
  };

  return (
    <div>
      <InputContianer>
        <Input
          value={search}
          name="search"
          type="text"
          placeholder="Search Askito"
          onChange={handleInputChange}
        />
        <FiSearch size={25} fill={themeContext.input} />
      </InputContianer>

      {showResults && (
        <ClickAwayListener onClickAway={() => setShowResults(false)}>
          <ResultContainer ref={resultsRef}>
            {isFetching ? (
              <p>Loading...</p>
            ) : (
              <>
                {data?.data?.users.length > 0 && <h4>Users</h4>}
                {data?.data?.users.map(({ _id, name }) => (
                  <SearchResultLink
                    key={_id}
                    to={`/profile/${_id}`}
                    onClick={handleResultClick}
                  >
                    {name}
                  </SearchResultLink>
                ))}
                {data?.data?.questions.length > 0 && <h4>Questions</h4>}
                {data?.data?.questions.slice(0, 3).map(({ _id, title }) => (
                  <SearchResultLink
                    to={`/questions/question/${_id}`}
                    key={_id}
                    onClick={handleResultClick}
                  >
                    {title}
                  </SearchResultLink>
                ))}
                {data?.data?.posts.length > 0 && <h4>Blog Posts</h4>}
                {data?.data?.posts.slice(0, 3).map(({ _id, title }) => (
                  <SearchResultLink
                    to={`/posts/post/${_id}`}
                    key={_id}
                    onClick={handleResultClick}
                  >
                    {title}
                  </SearchResultLink>
                ))}
              </>
            )}
            <ResultCard>
              Results for <span>{search}</span>
            </ResultCard>
          </ResultContainer>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default Search;
