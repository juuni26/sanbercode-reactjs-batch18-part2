import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Home from './pages/Home';

import Tugas9 from '../Tugas9/Tugas9';
import Tugas10 from '../Tugas10/Tugas10';
import Tugas11 from '../Tugas11/Tugas11';
import Tugas12 from '../Tugas12/Tugas12';
import Tugas13 from '../Tugas13/Tugas13';
import Tugas14 from '../Tugas14/Tugas14';



const Routes = () => {

    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tugas9">
          <Tugas9 />
        </Route>
        <Route path="/tugas10">
          <Tugas10 />
        </Route>
        <Route path="/tugas11">
          <Tugas11 />
        </Route>
        <Route path="/tugas12">
          <Tugas12 />
        </Route>
        <Route path="/tugas13">
          <Tugas13 />
        </Route>
        <Route path="/tugas14">
          <Tugas14 />
        </Route>


      </Switch>
    );
  };
  
  export default Routes;