import styled from 'styled-components';
import vector from "../../../assets/vector.svg";

export const DropdownContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  grid-column-start: ${(props) => props.grid_column};
`;

export const DropdownButton = styled.button`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 32px;
  border: 1px solid #e3e8ec;
  background-color: transparent;
  color: black;
  text-align: left;
  background: url(${vector}) no-repeat;
  background-position: right 15px top 15px; 
  max-width: 350px;
`;

export const DropdownList = styled.ul`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: 55%;
  width: 100%;
  padding: 0;

  box-sizing: border-box;
  background-color: seashell;
  border: 1px solid #e3e8ec;
  border-radius: 4px ;

  &:disabled {
    border: 1px solid #E3E8EC;
    background: #E3E8EC;
  }

  z-index: 1;
`;

export const DropdownItem = styled.li`
  padding: 12px;
  border-bottom: 1px solid #e3e8ec;
  background-color: ${(props) => (props.active ? '#f03b83' : 'transparent')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  cursor: pointer;
  list-style-type: none;
`;

export const DropdownLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  text-align: left;
  color: ${(props) => (props.error? 'red' : '#868b95')};
`;
