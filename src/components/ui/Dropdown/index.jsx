import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownLabel,
  DropdownList,
} from './styles';


export function Dropdown({ label, name, valueNameId, setValue, grid_column="1", disabled, dictionary }) {
  const [isOpen, setOpen] = useState(false);

  function open() {
    setOpen(true);
  }
  function close() {
    setOpen(false);
  }
  function onChange(item) {
    setValue(item);
    close();
  }

  return (
    <DropdownContainer
      grid_column={grid_column} 
    >
      <DropdownLabel>{label}</DropdownLabel>
      <DropdownButton
        onClick={open}
        disabled={disabled}
      >
        {valueNameId.name || 'Не выбрано'}</DropdownButton>
      <DropdownList open={isOpen}>
        {dictionary.map((row) => (
          <DropdownItem
            onClick={() => {
              onChange(row);
            }}
            active = {valueNameId.id === row.id}
            key={row.id}
            name={name}
          >
            {row.name}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  valueNameId: PropTypes.object,
  setValue: PropTypes.func,
  grid_column: PropTypes.string,
  disabled: PropTypes.bool,
  dictionary: PropTypes.array,
};
