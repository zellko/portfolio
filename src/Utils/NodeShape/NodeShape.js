import React from 'react';
import './NodeShape.css';

function NodeShape({ number, position }) {
  function checkNumber() {
    if (number !== undefined) return `node-${number}`;
    return 'node-1';
  }

  return (
    <div
      className={`node ${checkNumber()}`}
      style={{ left: position.left, top: position.top }}
    >

      <div className="node-a" />
      <div className="node-b" />
      <div className="node-line a" />
      <div className="node-line b" />
    </div>
  );
}

export default NodeShape;
