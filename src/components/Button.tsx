import styled from '@emotion/styled';

type ButtonProps = {
  backgroundColor: string
}

const Button = styled.button<ButtonProps>`
  margin: 5px;
  padding: 10px;
  background-color: ${props => props.backgroundColor};
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export default Button;