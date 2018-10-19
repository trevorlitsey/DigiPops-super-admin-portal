import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import { FilmList, FilmEdit, FilmCreate } from './components/films';
import {
  FestivalList,
  FestivalEdit,
  FestivalCreate,
} from './components/festivals';
import { UserList, UserEdit, UserCreate } from './components/users';
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
    <Resource name="activity" />
    <Resource name="phases" />
    <Resource
      name="films"
      list={FilmList}
      edit={FilmEdit}
      create={FilmCreate}
      icon={FilmIcon}
    />
    <Resource
      name="festivals"
      list={FestivalList}
      edit={FestivalEdit}
      create={FestivalCreate}
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
