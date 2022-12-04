import React, { useEffect } from 'react';
import NodeShape from './NodeShape/NodeShape';
import './AnimationBG.css';

let counter = 0;

function showAnimation() {
  const animationContainer = document.querySelector('.animation-bg-container');
  animationContainer.classList.add('show');
}

function getRandomPostion(nodeNumber) {
  let minRandXValue;
  let maxRandXValue;
  let minRandYValue;
  let maxRandYValue;
  switch (nodeNumber) {
    case 2:
      minRandXValue = 5;
      maxRandXValue = 45;
      minRandYValue = 5;
      maxRandYValue = 45;
      break;
    case 3:
      minRandXValue = 55;
      maxRandXValue = 95;
      minRandYValue = 5;
      maxRandYValue = 45;
      break;
    case 4:
      minRandXValue = 5;
      maxRandXValue = 45;
      minRandYValue = 55;
      maxRandYValue = 95;
      break;
    case 5:
      minRandXValue = 55;
      maxRandXValue = 95;
      minRandYValue = 55;
      maxRandYValue = 95;
      break;
    default:
      minRandXValue = 5;
      maxRandXValue = 95;
      minRandYValue = 5;
      maxRandYValue = 95;
      break;
  }

  const randLeft = Math.round(Math.random() * (maxRandXValue - minRandXValue) + minRandXValue);
  const randTop = Math.round(Math.random() * (maxRandYValue - minRandYValue) + minRandYValue);

  return { left: `${randLeft}%`, top: `${randTop}%` };
}

function getNodesPosition(nodeNumberA, nodeNumberB) {
  const nodeHeight = 37;
  const nodeWidth = 20;
  const lineBaseHeight = 4;
  const nodeComponentA = document.querySelector(`.node-${nodeNumberA}`);
  const nodeComponentB = document.querySelector(`.node-${nodeNumberB}`);

  if (nodeComponentA === null || nodeComponentB === null) return 'error';

  // Get X, Y position of both node using getBoundingClientRect
  // X = Left (Horizontal) ---- Y = Top (Vertical)
  const nodeApositionX = nodeComponentA.getBoundingClientRect().x;
  const nodeApositionY = nodeComponentA.getBoundingClientRect().y;
  const nodeBpositionX = nodeComponentB.getBoundingClientRect().x;
  const nodeBpositionY = nodeComponentB.getBoundingClientRect().y;

  // Get X, Y final position using nodeHeight, nodeWidth and the connectring line thickness
  const nodeAfinalXpos = Math.round(nodeApositionX + (nodeWidth / 2) - (lineBaseHeight / 2));
  const nodeAfinalYpos = Math.round(nodeApositionY + (nodeHeight / 2) - (lineBaseHeight / 2));
  const nodeBfinalXpos = Math.round(nodeBpositionX + (nodeWidth / 2) - (lineBaseHeight / 2));
  const nodeBfinalYpos = Math.round(nodeBpositionY + (nodeHeight / 2) - (lineBaseHeight / 2));

  // Return an object will all position
  return {
    ax: nodeAfinalXpos,
    ay: nodeAfinalYpos,
    bx: nodeBfinalXpos,
    by: nodeBfinalYpos,
  };
}

function calculateAngle(nodesPositions) {
  /*
  This function calculate the distance between two node (in pixels).
  nodesPosition should be an object with both node position in pixels
  {
    ax: node A X position,
    ay: node A Y position,
    bx: node B X position,
    by: node B Y position,
  }
  */

  // console.log(nodesPositions);
  // Check nodesPositions data are valid
  if (typeof (nodesPositions) !== 'object') return undefined;

  const tan = (nodesPositions.ay - nodesPositions.by) / (nodesPositions.ax - nodesPositions.bx);
  let angle = Math.atan(tan) * (180 / Math.PI);

  // Compensate angle depending where is located the second node
  if (nodesPositions.by > nodesPositions.ay && nodesPositions.bx < nodesPositions.ax) {
    angle -= 180;
  }
  if (nodesPositions.by < nodesPositions.ay && nodesPositions.bx < nodesPositions.ax) {
    angle += 180;
  }

  // console.log(Math.round(angle * 10) / 10);
  return Math.round(angle * 10) / 10;
}

function calculateDistance(nodesPositions) {
  /*
  This function calculate the distance between two node (in pixels).
  nodesPosition should be an object with both node position in pixels
  {
    ax: node A X position,
    ay: node A Y position,
    bx: node B X position,
    by: node B Y position,
  }
  */

  // Check nodesPositions data are valid
  if (typeof (nodesPositions) !== 'object') return undefined;

  // Calculate the distance between the node (hypotenuse = c² = a² + b²)...
  // ... so distance = square root ((ay - by)² + (ax - bx)²)
  const distance = Math.round(Math.sqrt((nodesPositions.ay - nodesPositions.by) ** 2
  + (nodesPositions.ax - nodesPositions.bx) ** 2));

  /* console.log(`distance =
    Root((${nodesPositions.ay} - ${nodesPositions.by})² +
    (${nodesPositions.ax} - ${nodesPositions.bx})²)
    = ${distance}`);
*/
  // Return an object will all position
  return distance;
}

function connectNode(nodeNumberA, nodeNumberB, line) {
  const nodeComponentA = document.querySelector(`.node-${nodeNumberA}`);
  const nodeComponentB = document.querySelector(`.node-${nodeNumberB}`);

  if (nodeComponentA === null || nodeComponentB === null) return;

  const nodesPositions = getNodesPosition(nodeNumberA, nodeNumberB);
  const distance = calculateDistance(nodesPositions);
  const angle = calculateAngle(nodesPositions);

  console.log(`Distance: ${distance} // Angle: ${angle}`);
  const nodeLineA = document.querySelector(`.node-${nodeNumberA} .node-line.${line}`);
  nodeLineA.style.cssText += `transform: translate(-50%, -50%) rotate(${angle}deg) scaleX(0);`;

  nodeLineA.addEventListener('transitionend', () => {
    nodeLineA.style.cssText += `transform: translate(-50%, -50%) rotate(${angle}deg) scaleX(${distance / 2 - 2});`;
  });
}

function showNode() {
  counter += 1;
  if (counter > 5) return;
  const nodeComponent = document.querySelector(`.node.node-${counter}`);
  nodeComponent.classList.add('show');

  switch (counter) {
    case 2:
      connectNode(1, 2, 'a');
      break;
    case 3:
      connectNode(2, 3, 'a');
      connectNode(3, 1, 'a');
      break;
    case 4:
      connectNode(2, 4, 'b');
      connectNode(4, 1, 'a');
      break;
    case 5:
      connectNode(3, 5, 'b');
      connectNode(4, 5, 'b');
      connectNode(5, 1, 'a');
      break;
    default:
      break;
  }
}

function AnimationBG() {
  useEffect(() => {
    const delay = setTimeout(showAnimation, 500);
    const interval = setInterval(showNode, 4000);

    return () => {
      clearTimeout(delay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="animation-bg-container">
      <NodeShape
        position={{ left: '50%', top: '50%' }}
      />
      <NodeShape
        number={2}
        position={getRandomPostion(2)}
      />
      <NodeShape
        number={3}
        position={getRandomPostion(3)}
      />

      <NodeShape
        number={4}
        position={getRandomPostion(4)}
      />
      <NodeShape
        number={5}
        position={getRandomPostion(5)}
      />
    </div>
  );
}

export {
  AnimationBG, getRandomPostion, getNodesPosition, calculateAngle, calculateDistance, connectNode,
};
