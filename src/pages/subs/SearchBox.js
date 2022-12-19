import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox() {
  return (
    <div className={`search flex`}>
      <div className={`sbox flex aic`}>
        <button className={`s24`}>
          <SearchIcon />
        </button>
        <input placeholder={`Search chat or contacts`} className={`s16 font`} />
      </div>
    </div>
  );
}
