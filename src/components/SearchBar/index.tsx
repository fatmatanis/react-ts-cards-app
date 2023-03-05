import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { Search } from "@mui/icons-material";
import { ISearchBarProps } from "../../types/types";
import {
  searchButton,
  searchContainer,
  searchInput,
  searchStyle
} from "./styles";

const SearchBar = ({ onSearch, onChange, value }: ISearchBarProps) => {
  const handleSearch = () => {
    onSearch(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <Paper elevation={0} sx={searchContainer}>
      <InputBase
        sx={searchInput}
        placeholder="Search Celebreties"
        inputProps={{ "aria-label": "search celebreties" }}
        onChange={onChange}
        value={value}
        onKeyDown={handleKeyDown}
      />
      <IconButton
        type="button"
        disableTouchRipple
        aria-label="search"
        sx={searchButton}
        onClick={handleSearch}
      >
        <Search sx={searchStyle} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
