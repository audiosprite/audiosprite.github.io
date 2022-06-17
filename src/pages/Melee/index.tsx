import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SeedFinder } from './SeedFinder';

const Melee = () => {
  return (
    <Switch>
      <Route exact path="/melee/seed-finder" component={SeedFinder} />
    </Switch>
  );
};

export default Melee;
