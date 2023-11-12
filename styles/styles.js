import styled from 'styled-components';

export const StyledNavbar = styled.div`
  background-color: #ededed;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
`;

export const StyledChatContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #ededed;
  padding: 20px;
  border-radius: 10px;
`;

export const StyledMessageContainer = styled.div`
  height: 300px;
  border: 1px solid #ccc;
  overflow-y: scroll;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const StyledMessage = styled.div`
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  background-color: ${({ type }) => (type === 'received' ? '#fff' : '#00B0E2')};
  color: ${({ type }) => (type === 'received' ? '#000' : '#fff')};
  align-self: ${({ type }) => (type === 'received' ? 'flex-start' : 'flex-end')};
`;

export const StyledInputContainer = styled.div`
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 80%;
  padding: 8px;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const StyledInfoContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const StyledHamburgerMenu = styled.div`
  font-size: 24px;
  cursor: pointer;
  margin-top: 20px;
`;

export const StyledBackButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const OptionButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const OptionGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
