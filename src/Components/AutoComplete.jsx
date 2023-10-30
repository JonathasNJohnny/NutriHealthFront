import React, { useEffect, useState } from "react";
import { FormControlPagsGerais } from "../StyledComponents/StyledStructPages";
import {
  DivAutoComplete,
  IconSearchAutoComplete,
  DivResultsAutoComplete,
  DivItemResults,
} from "../StyledComponents/StylesAutoComplete";

const AutoComplete = ({ options, handleSelectOptionSearch }) => {
  const [inputSearch, setInputSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);
  const [conditionArray, setConditionArray] = useState(true);

  const handleSearch = () => {
    let filterArray = options.filter((item) =>
      item.nome.toLowerCase().includes(inputSearch.toLowerCase())
    );

    setFilterSearch([...filterArray]);
    console.log(filterArray);
  };

  const handleClickResult = (item) => {
    handleSelectOptionSearch(item.nome);
    setFilterSearch([]);
    setConditionArray(false);
    setInputSearch(item.nome);
  };

  useEffect(() => {
    if (inputSearch !== "" && conditionArray) {
      handleSearch();
    } else {
      setFilterSearch([]);
    }
    //eslint-disable-next-line
  }, [inputSearch]);

  return (
    <>
      <DivAutoComplete>
        <IconSearchAutoComplete icon="ion:search" color="#6f3f2d" />
        <FormControlPagsGerais
          style={{ paddingLeft: "35px" }}
          placeholder="Pesquisar..."
          value={inputSearch}
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              setConditionArray(true);
            }
          }}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
        {filterSearch.length > 0 && (
          <DivResultsAutoComplete>
            {filterSearch.map((item, index) => (
              <DivItemResults
                key={index}
                onClick={() => {
                  handleClickResult(item);
                }}
              >
                <p>{item.nome}</p>
              </DivItemResults>
            ))}
          </DivResultsAutoComplete>
        )}
      </DivAutoComplete>
    </>
  );
};

export default AutoComplete;
