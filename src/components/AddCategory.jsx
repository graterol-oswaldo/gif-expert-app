import { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  // senior: destructura target y solo referencia a partir de ahí a target
  //   const onInputChange = ({ target }) => {
  //     setInputValue(target.value);
  //   };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form aria-label="form" onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Search Gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
        // senior: envia event por default
        // onChange={onInputChange}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
