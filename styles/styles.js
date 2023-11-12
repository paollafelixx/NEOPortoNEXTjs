import styled from 'styled-components';

export const Navbar = styled.div`
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

export const ChatContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #ededed;
`;

export const ChatMessageContainer = styled.div`
  height: 300px;
  border: 1px solid #ccc;
  overflow-y: scroll;
  padding: 10px;
  position: relative; /* Adicionado para posicionar os ícones */
`;

export const Icon = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  color: red;
`;

export const Message = styled.div`
  margin: 5px;
  padding: 8px;
  border-radius: 5px;
  ${({ type }) => {
    if (type === 'sent') {
      return `
        align-self: flex-end;
        background-color: #00B0E2;
      `;
    }
    if (type === 'received') {
      return `
        align-self: flex-start;
        background-color: #fff;
        border: 1px solid #ccc;
      `;
    }
  }}
`;

export const InputContainer = styled.div`
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

export const MapContainer = styled.div`
  height: 500px;
  width: 100%;
`;

export const InfoContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const HamburgerMenu = styled.div`
  font-size: 24px;
  cursor: pointer;
  margin-top: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;
