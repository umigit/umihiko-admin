import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  required,
} from 'react-admin';

const validateName = [required()];
const validateSkilled = [];
const validateLike = [];

export const FrameworkList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" sortable={false} />
      <TextField source="name" sortable={false} />
      <EmailField source="experiencePeriod" sortable={false} />
      <BooleanField source="skilled" sortable={false} />
      <BooleanField source="like" sortable={false} />
    </Datagrid>
  </List>
);

export const FrameworkCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={validateName} />
      <TextInput source="experiencePeriod" />
      <BooleanInput source="skilled" validate={validateSkilled} />
      <BooleanInput source="like" validate={validateLike} />
    </SimpleForm>
  </Create>
);

export const FrameworkEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" validate={validateName} />
      <TextInput source="experiencePeriod" />
      <BooleanInput source="skilled" validate={validateSkilled} />
      <BooleanInput source="like" validate={validateLike} />
    </SimpleForm>
  </Edit>
);
