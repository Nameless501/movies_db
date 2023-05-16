import TextInput from "../../UI/TextInput/TextInput";
import IconButton from "../../UI/IconButton/IconButton";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
import { BiSearch } from "react-icons/bi";
import "./SearchInput.css";

function SearchInput({ value, handleChange, isValid, error, placeholder }) {
  return (
    <fieldset className="search-input">
      {error && <ErrorMessage place="movies-search" text={error} />}
      <TextInput
        place="search"
        name="keyword"
        placeholder={placeholder}
        required={true}
        value={value}
        handleChange={handleChange}
      />
      <IconButton
        type="submit"
        place="search"
        disabled={!isValid}
        Icon={BiSearch}
      />
    </fieldset>
  );
}

export default SearchInput;
