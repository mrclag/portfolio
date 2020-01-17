import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border-radius: 15px;
  height: 50px;
  width: auto;
  font-size: 14px;
  padding: 10px;
  /* border: none; */
  /* give same hover styling to this button as others have */
`;

export const GlobalStyles = styled.div`
  font-family: 'Jura', sans-serif;
`;

export const SectionTitle = styled.div`
  font-size: 42px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
`;