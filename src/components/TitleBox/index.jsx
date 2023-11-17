import {Title} from '../ui/Title/index.jsx';
import classes from './styles.module.css';

export function TitleBox() {
  return (
    <div className={classes.box}>
        <Title
          title="Домашнее задание по React №8"
        />
        <Title
          title="Султанов А"
          caption="Задание:Доработать react приложение списком из книг, продуктов или любой другой сущности."
        />
    </div>
  );
}

export function BottomBox() {
  return (
    <div className={classes.box}>
        <Title
          caption="Краткое описание:"
        />
        <Title
          caption="За основу взята форма свойтва атрибутов из макета курсовой."
        />
        <Title
          caption="Используются компоненты : TitleBox, BottomBox, AtributeForm, Title, Button, Field, Dropdown"
        />
        <Title
          caption="За базовые из урока взяты компоненты : Button, Field -добавлены props"
        />
        <Title
          caption="Dropdown-добавлены props и передача данных для справочника"
        />
    </div>
  );
}

