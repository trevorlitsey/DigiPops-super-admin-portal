import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import { FilmList, FilmEdit, FilmCreate } from './films';
import { ShowTimeList, ShowTimeEdit, ShowTimeCreate } from './showtimes';
import { UserList, UserEdit, UserCreate } from './users';
import EventIcon from '@material-ui/icons/Event';
import FilmIcon from '@material-ui/icons/Movie';
import UserIcon from '@material-ui/icons/Group';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('http://localhost:4000');
const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="films"
      list={FilmList}
      edit={FilmEdit}
      create={FilmCreate}
      icon={FilmIcon}
    />
    <Resource
      name="showtimes"
      list={ShowTimeList}
      edit={ShowTimeEdit}
      create={ShowTimeCreate}
      icon={EventIcon}
    />
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      icon={UserIcon}
    />
  </Admin>
);

export default App;
