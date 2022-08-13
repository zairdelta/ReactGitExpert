import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, SetInputValue] = useState("");

  const onInputChange = ({ target }) => {
    SetInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    SetInputValue("");
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifts"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
