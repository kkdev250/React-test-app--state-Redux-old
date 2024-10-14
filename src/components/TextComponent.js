import React, { useRef, useEffect } from 'react';
import { connect } from "react-redux";
import { getCounter, getInput } from "../store/selectors";

const TextComponent = ({clickCount, inputValue}) => {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>
      <p>Input value: {inputValue}</p>
      <p>Button click count: {clickCount}</p>
      <p>Render count: {renderCount.current}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  clickCount: getCounter(state),
  inputValue: getInput(state),
});

export default React.memo(connect(mapStateToProps)(TextComponent));