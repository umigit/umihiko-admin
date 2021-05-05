import * as React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import { Person, Code, HomeWork, Android, Storage, CloudCircle, Build } from '@material-ui/icons';
import { buildAuthProvider } from 'react-admin-amplify';
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import restDataProvider from 'ra-data-simple-rest';
import { UserList, UserCreate, UserEdit } from './tables/users';
import { ProgramingLanguageList, ProgramingLanguageCreate, ProgramingLanguageEdit } from './tables/programing-languages';
import { FrameworkList, FrameworkCreate, FrameworkEdit } from './tables/frameworks';
import { OperatingSystemList, OperatingSystemCreate, OperatingSystemEdit } from './tables/operatingsystems';
import { DatabaseList, DatabaseCreate, DatabaseEdit } from './tables/databases';
import { ServiceList, ServiceCreate, ServiceEdit } from './tables/services';
import { ToolList, ToolCreate, ToolEdit } from './tables/tools';
import { ImageList, ImageCreate } from './tables/images';

const amplifyConfig = {
  Auth: {
    identityPoolId: process.env.AWS_IDENTITIY_POOL_ID,
    region: process.env.AWS_REGION,
    userPoolId: process.env.AWS_USER_POOL_ID,
    userPoolWebClientId: process.env.AWS_USER_POOL_WEB_CLIENT_ID,
    authenticationFlowType: process.env.AWS_AUTHENTICATION_FLOW_TYPE,
  }
};

Amplify.configure(amplifyConfig);

const httpClient = async (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const session = await Auth.currentSession();
  const token = session.accessToken.jwtToken;
  options.headers.set('Authorization', token);

  return fetchUtils.fetchJson(url, options);
};

const dataProvider = restDataProvider(process.env.API_URL, httpClient);
const authProvider = buildAuthProvider();

const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="users"
      options={{ label: "Users" }}
      icon={Person} list={UserList}
      create={UserCreate}
      edit={UserEdit}
    />
    <Resource
      name="programing-languages"
      options={{ label: "Languages" }}
      icon={Code} list={ProgramingLanguageList}
      create={ProgramingLanguageCreate}
      edit={ProgramingLanguageEdit}
    />
    <Resource
      name="frameworks"
      options={{ label: "Frameworks" }}
      icon={HomeWork}
      list={FrameworkList}
      create={FrameworkCreate}
      edit={FrameworkEdit}
    />
    <Resource
      name="operating-systems"
      options={{ label: "OS" }}
      icon={Android}
      list={OperatingSystemList}
      create={OperatingSystemCreate}
      edit={OperatingSystemEdit}
    />
    <Resource
      name="databases"
      options={{ label: "Databases" }}
      icon={Storage}
      list={DatabaseList}
      create={DatabaseCreate}
      edit={DatabaseEdit}
    />
    <Resource
      name="services"
      options={{ label: "Services" }}
      icon={CloudCircle}
      list={ServiceList}
      create={ServiceCreate}
      edit={ServiceEdit}
    />
    <Resource
      name="tools"
      options={{ label: "Tools" }}
      icon={Build}
      list={ToolList}
      create={ToolCreate}
      edit={ToolEdit}
    />
    <Resource
      name="images"
      options={{ label: "Images" }}
      icon={Build}
      list={ImageList}
      create={ImageCreate}
    />
  </Admin>
);

export default App;
