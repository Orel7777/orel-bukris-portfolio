import React from 'react';
import styled from 'styled-components';

const CircleLoader = () => {
  return (
    <StyledWrapper>
      <div className="container">
        {Array.from({ length: 21 }).map((_, index) => (
          <div key={index} className="item" style={{ '--i': index } as React.CSSProperties} />
        ))}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    perspective: 1000px;
    margin-top: 2rem;
  }

  .item {
    position: absolute;
    background-color: transparent;
    width: calc(var(--i) * 1.8vmin);
    aspect-ratio: 1;
    border-radius: 50%;
    border: 0.6vmin solid rgb(0, 200, 255);
    transform-style: preserve-3d;
    transform: rotateX(70deg) translateZ(30px);
    animation: my-move 3s ease-in-out calc(var(--i) * 0.08s) infinite;
    box-shadow: 0px 0px 10px rgba(0, 200, 255, 0.5),
      inset 0px 0px 10px rgba(0, 200, 255, 0.5);
  }

  @keyframes my-move {
    0%,
    100% {
      transform: rotateX(70deg) translateZ(30px) translateY(0px);
      filter: hue-rotate(0deg);
    }

    50% {
      transform: rotateX(70deg) translateZ(30px) translateY(-25vmin);
      filter: hue-rotate(180deg);
    }
  }
`;

export default CircleLoader;