import React, { useCallback, useRef } from "react";



const useDebounce = (callback) => {
  const timer = useRef(null);

  const debouncedCallback = (...args) => {
    if(timer.current){
      clearTimeout(timer.current);
    };
    timer.current = setTimeout(() => {
      callback(...args);
    }, 1000)
  };
  return debouncedCallback;
}




const Debounce = () => {

  const [value, setValue] = React.useState('');

  const action = useDebounce((value) => {
    console.log(value);
  });

  const onChange = (e) => {
    setValue(e.target.value);
    action(e.target.value);
  };

  return (
    <div className="App">
        <p>
            useDebounce is a custom hook, which does some action with a timeout
             useDebounce returns a callback which sets setTimeout when you type first character in an input.
             and when you type each next character useDebounce removes previous setTimeOut and sets the new one.
             when setTimeOut runs out we invoke a function execution.
             </p>
      <input value={value} onChange={onChange}/>
    </div>
  );
}


export default Debounce