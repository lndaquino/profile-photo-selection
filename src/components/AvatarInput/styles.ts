import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  align-items: center;
  width: 100%;
  margin: 0px auto 0;
  width: 186px;
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  button {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border-radius: 50%;
    border: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
