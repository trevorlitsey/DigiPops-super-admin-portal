import React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DisabledInput,
  EditButton,
  Filter,
  EmailField,
  BooleanField,
  TextField,
  TextInput,
  BooleanInput,
} from 'react-admin';

const UserFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

export const UserList = props => (
  <List title="All users" {...props} filters={<UserFilter />}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <BooleanField source="isAdmin" />
      <EditButton />
    </Datagrid>
  </List>
);

const UserTitle = ({ record }) => {
  return <span>User: {record ? `${record.name}` : ''}</span>;
};

export const UserEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <BooleanInput source="isAdmin" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <BooleanInput source="isAdmin" />
    </SimpleForm>
  </Create>
);
