import React, { useRef, useEffect } from 'react';
import { connect } from "react-redux";
import { incrementAsync } from "../store/actions";
import { getCounter } from "../store/selectors";

function ButtonComponent({ clickCount, increment }) {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const handleClick = () => {
    increment();
  };

  return (
    <div style={{ textAlign: 'center', border: '1px solid black', padding: '10px' }}>
      <p>Click Count: {clickCount}</p>
      <button onClick={handleClick}>Click Me</button>
      <p>Render count: {renderCount.current}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  clickCount: getCounter(state),
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonComponent);