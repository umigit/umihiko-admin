import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ImageField,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  required,
  email,
} from 'react-admin';

const validateName = [required()];
const validateCognitoId = [required()];
const validateEmail = [required(), email()];

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" sortable={false} />
      <TextField source="name" sortable={false} />
      <EmailField source="email" sortable={false} />
      <TextField source="summary" sortable={false} />
      <TextField source="introduction" sortable={false} />
    </Datagrid>
  </List>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="cognitoUserId" validate={validateCognitoId} />
      <TextInput source="name" validate={validateName} />
      <TextInput source="email" type="email" validate={validateEmail} />
      <TextInput multiline source="summary" />
      <TextInput multiline source="introduction" />
    </SimpleForm>
  </Create>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="cognitoUserId" validate={validateCognitoId} />
      <TextInput source="name" validate={validateName} />
      <TextInput source="email" validate={validateEmail} />
      <TextInput source="summary" multiline fullWidth />
      <TextInput source="introduction" multiline fullWidth />
      <ReferenceInput source="profileImageId" reference="images">
        <SelectInput />
      </ReferenceInput>
      <ReferenceField
        label="Profile preview"
        source="profileImageId"
        reference="images"
      >
        <ImageField source="url" />
      </ReferenceField>
    </SimpleForm>
  </Edit>
);
