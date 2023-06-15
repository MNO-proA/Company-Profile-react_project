import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useParams } from "react-router-dom";
import NotFound from "../components/NotFound";

const Definition = () => {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  let { search } = useParams();
  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data !== undefined) {
          setWord(data[0].meanings);
        }
      });
  });

  if (notFound === true) {
    return (
      <>
        <NotFound />
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
          <Link to={"/dictionary"}>Search again</Link>
        </>
      ) : null}
    </>
  );
};
export default Definition;
