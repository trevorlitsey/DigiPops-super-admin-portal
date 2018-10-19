import React from 'react';
import {
  List,
  Edit,
  Create,
  Datagrid,
  ReferenceField,
  ReferenceManyField,
  TextField,
  DateField,
  BooleanField,
  DisabledInput,
  EditButton,
  TextInput,
  DateInput,
  LongTextInput,
  SimpleForm,
  TabbedForm,
  FormTab,
} from 'react-admin';
import { Filter, ReferenceInput, SelectInput } from 'react-admin';

const FestivalFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput
      label="Festival"
      source="festivalId"
      reference="festivals"
      allowEmpty
    >
      <SelectInput optionText="festival name" />
    </ReferenceInput>
  </Filter>
);

export const FestivalList = props => (
  <List {...props} filters={<FestivalFilter />}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="season" />
      <TextField source="year" />
      <ReferenceField
        label="Phase"
        source="phaseId"
        reference="phases"
        linkType={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <DateField source="startDate" label="Start Date" />
      <DateField source="endDate" label="End Date" />
      <TextField source="theme" />
      <TextField source="totalFilmCount" label="Total Films" />
      <TextField source="totalJurors" label="Total Jurors" />
      <TextField source="totalUsers" label="Total Users" />
      <BooleanField source="winnersWeek" label="Winners Week" />
      <EditButton />
    </Datagrid>
  </List>
);

const FestivalTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const FestivalEdit = props => (
  <Edit title={<FestivalTitle />} {...props}>
    <TabbedForm>
      <FormTab label="Info">
        <TextInput source="name" />
        <TextInput source="season" />
        <TextInput source="year" />
        <DateInput source="startDate" label="Start Date" />
        <DisabledInput source="endDate" label="End Date" />
        <TextInput source="theme" />
        <ReferenceInput source="phaseId" reference="phases">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </FormTab>
      <FormTab label="Activity">
        <ReferenceManyField
          addLabel={false}
          reference="activity"
          target="festivalId"
        >
          <Datagrid>
            <ReferenceField
              label="Phase"
              source="phaseId"
              reference="phases"
              linkType={false}
            >
              <TextField source="name" />
            </ReferenceField>
            <TextField source="filmCount" />
            <TextField source="featuredDays" />
            <TextField source="activeFans" />
            <TextField source="activeOwners" />
            <TextField source="activeCredits" />
            <TextField source="totalJurors" />
            <TextField source="totalUsers" />
          </Datagrid>
        </ReferenceManyField>
      </FormTab>
      <FormTab label="Analytics">
        <h1>Some analytics will go here</h1>
      </FormTab>
      <FormTab label="Map">
        <h1>Some maps will go here</h1>
      </FormTab>
      <FormTab label="Sponsors">
        <h1>Some sponsors will go here</h1>
      </FormTab>
      <FormTab label="Notes">
        <LongTextInput source="notes" />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export const FestivalCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput
        label="Festival"
        source="festivalId"
        reference="festivals"
      >
        <SelectInput optionText="festival name" />
      </ReferenceInput>
      <TextInput source="season,year" />
      <TextField source="phase" />
      <TextInput source="start" />
      <TextInput source="end" />
      <TextField source="theme" />
      <TextField source="film count" />
      <TextField source="#jurors" />
      <TextField source="#users" />
      <TextInput source="sponsor" />
      <LongTextInput source="notes" />
    </SimpleForm>
  </Create>
);
