import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DefinitionSearch = () => {
  const [word, setWord] = useState("");
  const navigate = useNavigate();
  return (
    <form
      className="flex space-between space-x-2 max-w-[300px]"
      onSubmit={() => {
        navigate(`/dictionary/${word}`);
      }}
    >
      <input
        className="shrink min-w-0 px-2 py-2 rounded"
        type="text"
        placeholder="Zealous"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button className="bg-purple-500 hover:bg-purple-800 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-2 rounded">
        Search
      </button>
    </form>
  );
};

export default DefinitionSearch;
