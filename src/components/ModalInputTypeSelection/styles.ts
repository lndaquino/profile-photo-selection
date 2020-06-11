import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 20px;
  color: #fff;
`;

export const Label = styled.label`
  width: 350px;
  height: 48px;
  background: #ff9000;
  border-radius: 2em;
  
  cursor: pointer;
  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    display: none;
  }

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 350px;
  height: 48px;
  background: #ff9000;
  color: #FFF;
  font-size: 20px;
  border: 0;
  border-radius: 2em;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;