import React from 'react';
import {
  List,
  Edit,
  Create,
  Filter,
  Datagrid,
  ImageField,
  TextField,
  EditButton,
  DisabledInput,
  NumberInput,
  LongTextInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

const FilmFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

export const FilmList = props => (
  <List {...props} filters={<FilmFilter />}>
    <Datagrid>
      <TextField label="Title" source="name" />
      <TextField label="Release Year" source="year" />
      <EditButton />
    </Datagrid>
  </List>
);

const FilmTitle = ({ record }) => {
  return <span>Film: {record ? `${record.title}` : ''}</span>;
};

export const FilmEdit = props => (
  <Edit title={<FilmTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <NumberInput label="Release Year" source="year" />
      <LongTextInput label="Poster Url" source="poster" />
    </SimpleForm>
  </Edit>
);

export const FilmCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <NumberInput label="Release Year" source="year" />
      <LongTextInput label="Poster Url" source="poster" />
    </SimpleForm>
  </Create>
);
