import React, { useEffect, useRef } from 'react';
import { connect } from "react-redux";
import { setValue } from "../store/actions";
import { getInput } from "../store/selectors";

function InputComponent({ inputValue, setValue }) {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>
      <p>Input Value: {inputValue}</p>
      <input
        type="text"
        placeholder="Enter text here"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Render count: {renderCount.current}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  inputValue: getInput(state),
});

const mapDispatchToProps = dispatch => ({
  setValue: (value) => dispatch(setValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);