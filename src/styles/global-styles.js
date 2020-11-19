import styled from 'styled-components';

export const Button = styled.button`
  background-color: white;
  color: ${(props) => props.color};
  border-radius: 15px;
  height: 40px;
  width: auto;
  font-size: 14px;
  padding: 10px;
  border: 1px solid lightgray;
  /* give same hover styling to this button as others have */

  &:hover {
    background-color: #f7f7fa;
  }
`;

export const GlobalStyles = styled.div`
  font-family: 'Roboto', sans-serif;
`;

export const SectionTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
