import React from 'react';
import { FiLoader } from "react-icons/fi";
import styled from 'styled-components';

const Loading = () => {
  return (
    <Waiting>
        <Loader />
      </Waiting>
  )
}

const Waiting = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4e4e4e;
  height: 100vh;
  width: 100vw;
`;

const Loader = styled(FiLoader)`
  font-size: 5em;
  animation: spin 1s linear infinite;
  color: white;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export default Loading