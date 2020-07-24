import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ChecklistPage from './checklist/ChecklistPage';
import MainPage from './main/MainPage';
import PersonaAnalysisPage from './persona/PersonaAnalysis';
import PersonaAnalysisResultPage from './persona/PersonaAnalysisResult';
import RoomComparisonPage from './room/RoomComparison';

export default function EntryRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/persona/result' component={PersonaAnalysisResultPage} />
        <Route path='/persona' component={PersonaAnalysisPage} />
        <Route path='/checklist' component={ChecklistPage} />
        <Route path='/room' component={RoomComparisonPage} />
        <Route path='/' exact component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}
