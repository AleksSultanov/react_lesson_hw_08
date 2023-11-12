import styled from 'styled-components';


export const BoxField = styled.div`
    margin-bottom: 24px;
    max-width: 350px;

    &:last-child {
    margin-bottom: 0;
    }
    grid-column-start: ${(props) => props.grid_column};
    width: ${(props) => (props.fullWidth? "100%" : '50%') };
`;


export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  text-align: left;
  color: ${(props) => (props.error? 'red' : '#868b95')};

`;

export const Finput = styled.input`
  width: 100%;
  height: 32px;
  padding: 12px;
  background-color: transparent;
  color: black;
  outline: none;
  border: 1px solid #E3E8EC;
  border-radius: 4px;
  box-sizing: border-box;

  &:disabled {
  border: 1px solid #E3E8EC;
  background: #E3E8EC;
  }

  &:focus {
  border: 2px solid #06509e;
  }  

`;
