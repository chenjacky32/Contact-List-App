import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

export default function SearchBar({ keyword, keywordChange }) {
  return (
    <>
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <input
              type="text"
              className="search-bar"
              placeholder={locale === "id" ? "Cari berdasarkan nama" : "Search By Name"}
              value={keyword}
              onChange={(e) => {
                keywordChange(e.target.value);
              }}
            />
          );
        }}
      </LocaleConsumer>
    </>
  );
}

SearchBar.PropType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
