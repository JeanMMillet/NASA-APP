import { useState } from "react";

const countries = [
  { name: "Belgium", continent: "Europe" },
  { name: "India", continent: "Asia" },
  { name: "Bolivia", continent: "South America" },
  { name: "Ghana", continent: "Africa" },
  { name: "Japan", continent: "Asia" },
  { name: "Canada", continent: "North America" },
  { name: "New Zealand", continent: "Australasia" },
  { name: "Italy", continent: "Europe" },
  { name: "South Africa", continent: "Africa" },
  { name: "China", continent: "Asia" },
  { name: "Paraguay", continent: "South America" },
  { name: "Usa", continent: "North America" },
  { name: "France", continent: "Europe" },
  { name: "Botswana", continent: "Africa" },
  { name: "Spain", continent: "Europe" },
  { name: "Senegal", continent: "Africa" },
  { name: "Brazil", continent: "South America" },
  { name: "Denmark", continent: "Europe" },
  { name: "Mexico", continent: "South America" },
  { name: "Australia", continent: "Australasia" },
  { name: "Tanzania", continent: "Africa" },
  { name: "Bangladesh", continent: "Asia" },
  { name: "Portugal", continent: "Europe" },
  { name: "Pakistan", continent: "Asia" },
];

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  function handleChange(e) {
    setSearchText(e.target.value);
  }
  let filteredCountries;
  if (searchText) {
    const lowerCaseText = searchText.toLowerCase();
    console.info(searchText);
    filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().match(lowerCaseText)
    );
    console.info(filteredCountries);
  }

  return (
    <>
      <input
        placeholder="Search here"
        type="text"
        name=""
        id="searchBar"
        value={searchText}
        onChange={handleChange}
      />
      <ul>
        {filteredCountries
          ? filteredCountries.map((country) => <li>{country.name}</li>)
          : countries.map((country) => <li>{country.name}</li>)}
      </ul>
    </>
  );
}

export default SearchBar;