import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0 auto;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  margin-top: 20px;

  button {
    width: 250px;
    height: 48px;
    margin: 0 20px;
    background: #ff9000;
    color: #FFF;
    font-size: 20px;
    border: 0;
    border-radius: 2em;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }

  .cancel-button {
    width: 150;
    height: 48px;
    background: #ff0000;
    color: #FFF;
    font-size: 20px;
    border: 0;
    border-radius: 2em;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff0000')};
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px;
  

  .avatarPreview {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    margin-left: 20px;
  }

`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;