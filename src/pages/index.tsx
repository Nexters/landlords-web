import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ChecklistPage from './checklist/ChecklistPage';
import MainPage from './main/MainPage';
import PersonaAnalysisPage from './persona/PersonaAnalysis';
import RoomComparisonPage from './room/RoomComparison';

export default function EntryRoute() {
  return (
    <BrowserRouter>
      <Route path='/' component={ MainPage } />
      <Route path='/checklist' component={ ChecklistPage } />
      <Route path='/persona' component={ PersonaAnalysisPage } />
      <Route path='/room' component={ RoomComparisonPage } />
    </BrowserRouter>
  );
}
