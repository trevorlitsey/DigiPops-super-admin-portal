import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export default () => (
  <Card>
    <CardHeader title="DigiPops Super Admin Portal" />
    <CardContent>
    <p>Hey there,</p>
      <p>
        Welcome to the admin portal. Here you can add/edit/view/delete films, showtimes and other users/admins.
      </p>
      <p>
      <span role="img" aria-describe="celebration">🎉</span>
      </p>
    </CardContent>
  </Card>
);
