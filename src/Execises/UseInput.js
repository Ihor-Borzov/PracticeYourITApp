import React, { useCallback, useRef } from "react";


const useInput = () => {
  const [value, setValue] = React.useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};



 function UseInputCustomHook() {
  const username = useInput();

  return (
    <div className="App">
        <p>this custom hook helps us to minimize the inputs</p>
      <input {...username} />
      <div>{username.value}</div>
    </div>
  );
}


export default UseInputCustomHook