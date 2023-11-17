import { useState} from 'react';

import { Field } from '../ui/Field/index.jsx';
import { Button } from '../ui/Button/index.jsx';
import {Dropdown} from '../ui/Dropdown/index.jsx';
import classes from './styles.module.css';

export function AtributeForm() {
  const isButtonDisabled = true;

  const [formState, setFormState] = useState({
    code: '',
    path: 'путь',
    name: 'Наименование',
    message: '',
  });

  const [entityRow, setEntity] = useState({id:0, name: ""});
  const [iconRow, setIcon] = useState({id:0, name: ""});
  const [widthRow, setWidth] = useState({id:0, name: ""});

  

  function setField(key, value) {
    setFormState({
      ...formState,
      [key]: value,
    });
  }

  function setFieldHandler(event) {
    const { name, value } = event.target;
    setField(name, value);
  }  
    

  function clearFields() {
    setField('code', '');
    setField('name', '');
    setField('message', '');
  }

  function validField(fielval, fieldname) {
    if (fielval.trim() === '') {
      setField('message',`Пустое поле ${fieldname}`);
      return 1;
    }
    return 0;
  }

  function validFields(){
    let res = 0;
    setField('message','');
    res += validField(formState['code'],'Код');
    res += validField(formState['name'],'Наименование');
    return res;

  }

  function onSubmit(event) {
    event.preventDefault();
    if (validFields() === 0 ) {
      clearFields();
    }
   
  }

  const ENTITY = [
    { id: 1,
      name: "Продукты" 
    },
    { id: 2,
      name: "Шаблоны" 
    },
    { id: 3,
      name: "Книги" 
    },
  ]  

  const ICONS = [
    { id: 1,
      name: "Пиктограмма 1" 
    },
    { id: 2,
      name: "Пиктограмма 2" 
    },
    { id: 3,
      name: "Пиктограмма 3" 
    },
  ]  

  const WIDTHS = [
    { id: 1,
      name: "Авто" 
    },
    { id: 2,
      name: "25%" 
    },
    { id: 3,
      name: "50%" 
    },
    { id: 4,
      name: "100%" 
    },

  ]  


  return (
    <div className={classes.box}>
      <div className={classes.rect}></div> 
      <form className={classes.form} onSubmit={onSubmit}>
        <h1 className={classes.title}>Свойства атрибута</h1>
        <Field
          name="code"
          label="Код"
          value={formState.code}
          onChange={setFieldHandler}
          fullWidth
        />
        <Dropdown
          name="entity"
          label="Представление"
          dictionary={ENTITY}
          grid_column="2"
          valueNameId = {entityRow}
          setValue    = {setEntity}
        />
        <Field
          name="path"
          label="Путь к элементу"
          value={formState.path}
          onChange={setFieldHandler}
          fullWidth
          disabled
        />
        <Dropdown
          name="icon" 
          label="Пиктограмма"
          dictionary={ICONS}
          grid_column="2"
          valueNameId = {iconRow}
          setValue    = {setIcon}
        />
        <Field
          name="name" 
          label="Наименование"
          value={formState.name}
          onChange={setFieldHandler}
          fullWidth
        />
        <Dropdown
          name="width" 
          label="Ширина колонки"
          value ="Авто"
          dictionary={WIDTHS}
          grid_column="2"
          valueNameId = {widthRow}
          setValue    = {setWidth}
        />
        <div className={classes.aright}>
          <Button disabled={isButtonDisabled}>Отменить</Button>
        </div>
        <div className={classes.aleft}>
          <Button>Сохранить</Button>
        </div>
        {formState.message && (
          <div>
            <Field
                name="message" 
                label="Проверка валидации"
                value={formState.message}
                onChange={setFieldHandler}
                fullWidth
                disabled
                error
              />
          </div>
        ) 
        }
      </form>
    </div>
  );
}
