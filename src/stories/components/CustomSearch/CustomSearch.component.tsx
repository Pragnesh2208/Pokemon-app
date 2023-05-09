import SearchIcon from "@mui/icons-material/Search";
import {
  CustomInputComponentStyled,
  SearchButtonStyled,
} from "./CustomSearch.styled";

function CustomSearchComponent({ ...props }) {
  console.log(props);
  return (
    <>
      <CustomInputComponentStyled
        {...props.searchInputProps}
        onChange={(event) => {
          props.updateField(event.target.value);
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
