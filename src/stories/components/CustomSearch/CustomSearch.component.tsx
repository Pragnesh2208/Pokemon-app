import SearchIcon from "@mui/icons-material/Search";
import {
  CustomInputComponentStyled,
  SearchButtonStyled,
} from "./CustomSearch.styled";

function CustomSearchComponent({ ...props }) {
  return (
    <>
      <CustomInputComponentStyled
        {...props.searchInputProps}
        onChange={(event) => {
          const value = event.target.value.trim();
          props.updateField(value);
        }}
      >
        {props.children}
      </CustomInputComponentStyled>
      <SearchButtonStyled>
        <SearchIcon />
      </SearchButtonStyled>
    </>
  );
}
export default CustomSearchComponent;
