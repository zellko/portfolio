import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  AnimationBG, getRandomPostion, calculateAngle, calculateDistance,
} from './AnimationBG';

describe('AnimationBG Test', () => {
  test('Should render a div with className .animation-bg-container', () => {
    const { container } = render(<AnimationBG />);

    const animationContainer = container.querySelector('.animation-bg-container');

    expect(animationContainer).toBeInTheDocument();
  });

  test('NodeShape should render a "Node" Component', () => {
    const { container } = render(<AnimationBG />);

    const nodeComponent = container.querySelector('.node-1');

    expect(nodeComponent).toBeInTheDocument();
  });

  test('NodeShape should render a "NodeLine" elements', () => {
    const { container } = render(<AnimationBG />);

    const nodeLineA = container.querySelector('.node-1 .node-line.a');
    const nodeLineB = container.querySelector('.node-1 .node-line.b');
    expect(nodeLineA).toBeInTheDocument();
    expect(nodeLineB).toBeInTheDocument();
  });

  test('After X sec, should  add the class "show" to the container', async () => {
    const { container } = render(<AnimationBG />);

    // Wait 1.1sec
    await new Promise((r) => setTimeout(r, 1100));

    const animationContainer = container.querySelector('.animation-bg-container');
    const animationContainerClass = animationContainer.className;

    expect(animationContainerClass).toBe('animation-bg-container show');
  });

  test('Every X sec, should add the class "show" to a "Node"', async () => {
    const { container } = render(<AnimationBG />);

    // Wait 1.1sec
    await new Promise((r) => setTimeout(r, 1100));
    const nodeComponent2 = container.querySelector('.node-2');
    const nodeComponent3 = container.querySelector('.node-3');

    const nodeComponent2Class = nodeComponent2.className;
    const nodeComponent3Class = nodeComponent3.className;

    expect(nodeComponent2Class).toBe('node node-2 show');
    expect(nodeComponent3Class).toBe('node node-3');
  });
});

describe('AnimationBG Functions tests', () => {
  test(`function getRandomPostion, return an object, 
      with left / top position`, () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.1);
    const { container } = render(<AnimationBG />);

    const randomPostion2 = getRandomPostion(2);
    const randomPostion3 = getRandomPostion(3);
    const randomPostion4 = getRandomPostion(4);
    const randomPostion5 = getRandomPostion(5);
    const randomPostion = getRandomPostion();
    expect(randomPostion2).toMatchObject({ left: '9%', top: '9%' });
    expect(randomPostion3).toMatchObject({ left: '59%', top: '9%' });
    expect(randomPostion4).toMatchObject({ left: '9%', top: '59%' });
    expect(randomPostion5).toMatchObject({ left: '59%', top: '59%' });
    expect(randomPostion).toMatchObject({ left: '14%', top: '14%' });
  });

  test('function calculateAngle, return the angle between two node', () => {
    const mockNodePosition = {
      ax: 0,
      ay: 0,
      bx: 100,
      by: 100,
    };

    const test = calculateAngle(mockNodePosition);

    expect(test).toBe(45);
  });

  test('function calculateAngle, return the angle between two node - 2', () => {
    const mockNodePosition = {
      ax: 100,
      ay: 0,
      bx: 0,
      by: 100,
    };

    const test = calculateAngle(mockNodePosition);

    expect(test).toBe(-225);
  });

  test('function calculateAngle, handle invalid data', () => {
    const mockNodePosition = 'error';

    const test = calculateAngle(mockNodePosition);

    expect(test).toBe(undefined);
  });

  test('function calculateDistance, return the distance between two node', () => {
    const mockNodePosition = {
      ax: 200,
      ay: 200,
      bx: 100,
      by: 200,
    };

    const distance = calculateDistance(mockNodePosition);

    expect(distance).toBe(100);
  });

  test('function calculateDistance, return the distance between two node - 2', () => {
    const mockNodePosition = {
      ax: 0,
      ay: 0,
      bx: 100,
      by: 100,
    };

    const distance = calculateDistance(mockNodePosition);

    expect(distance).toBe(141);
  });

  test('function calculateDistance, handle invalid data', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);

    const mockNodePosition = 'error';

    const distance = calculateDistance(mockNodePosition);

    expect(distance).toBe(undefined);
  });
});
