import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  required,
} from 'react-admin';

const validateName = [required()];

export const ImageList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" sortable={false} />
      <TextField source="name" sortable={false} />
      <TextField source="url" sortable={false} />
    </Datagrid>
  </List>
);

export const ImageCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={validateName} />
      <TextInput source="url" />
    </SimpleForm>
  </Create>
);
