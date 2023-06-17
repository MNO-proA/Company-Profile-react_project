import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate, useParams } from "react-router-dom";
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefinitionSearch";

const Definition = () => {
  const [word, setWord] = useState();
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  let navigate = useNavigate();
  let { search } = useParams();

  useEffect(() => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
    // const url = "https://httpstat.us/50";
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        } else if (response.status === 401) {
          navigate("/login");
        } else if (response.status === 500) {
          setError(true);
        } else if (!response.ok) {
          setError(true);
          throw new Error("Something went wrong, try again");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data !== undefined) {
          setWord(data[0].meanings);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  if (notFound === true) {
    return (
      <>
        <NotFound />
        <Link to={"/dictionary"}>Search again</Link>
      </>
    );
  }
  if (error === true) {
    return (
      <>
        <p>Something went wrong. Try again later</p>
        <Link to={"/dictionary"}>Search again</Link>
      </>
    );
  }

  return (
    <>
      {word ? (
        <>
          <h1>Here is a definition: </h1>
          {word.map((meaning) => {
            return (
              <p key={uuidv4()}>
                {`${meaning.partOfSpeech.toUpperCase()}: `}
                {meaning.definitions[0].definition}
              </p>
            );
          })}
          <p>Search again:</p>
          <DefinitionSearch />
        </>
      ) : null}
    </>
  );
};
export default Definition;
