import React from 'react';
import {
  List,
  Edit,
  Create,
  Filter,
  Datagrid,
  ReferenceField,
  DateField,
  TextField,
  EditButton,
  DisabledInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  LongTextInput,
} from 'react-admin';

const ShowTimeFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Film" source="filmId" reference="films" allowEmpty>
      <SelectInput optionText="title" />
    </ReferenceInput>
    <ReferenceInput label="Emcee" source="emceeId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const ShowTimeList = props => (
  <List {...props} filters={<ShowTimeFilter />}>
    <Datagrid>
      <DateField label="Show Time" source="time" showTime />
      <ReferenceField label="Film" source="filmId" reference="films">
        <TextField source="title" />
      </ReferenceField>
      <ReferenceField label="Emcee" source="emceeId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

const ShowTimeTitle = ({ record }) => {
  return (
    <span>
      ShowTime:{' '}
      {record && record.time ? `${new Date(record.time).toLocaleString()}` : ''}
    </span>
  );
};

export const ShowTimeEdit = props => (
  <Edit title={<ShowTimeTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput source="filmId" reference="films">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ReferenceInput source="emceeId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <LongTextInput
        label="Show Time {yyyy-mm-dd}T{hh:mm:ss}:00Z"
        source="time"
      />
    </SimpleForm>
  </Edit>
);

export const ShowTimeCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput source="filmId" reference="films">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ReferenceInput source="emceeId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <LongTextInput
        label="Show Time {yyyy-mm-dd}T{hh:mm:ss}:00Z"
        source="time"
      />
    </SimpleForm>
  </Create>
);
