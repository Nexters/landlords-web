import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import {createStore} from '../store';
import ChecklistPage from './checklist/ChecklistPage';
import MainPage from './main/MainPage';
import PersonaAnalysisPage from './persona/PersonaAnalysis';
import RoomComparisonPage from './room/RoomComparison';;

export default function EntryRoute() {
  const store = createStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path='/' exact component={MainPage} />
        <Route path='/checklist' component={ChecklistPage} />
        <Route path='/persona' component={PersonaAnalysisPage} />
        <Route path='/room' component={RoomComparisonPage} />
      </BrowserRouter>
    </Provider>
  );
}
