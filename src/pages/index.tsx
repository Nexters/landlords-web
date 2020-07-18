import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './main/MainPage';
import ChecklistPage from './checklist/ChecklistPage';
import PersonaAnalysisPage from './personaAnalysis/PersonaAnalysis';
import RoomComparisonPage from './roomComparison/RoomComparison';

const EntryRoute = () => (
  <BrowserRouter>
    <Route path='/' component={MainPage} />
    <Route path='/checklist' component={ChecklistPage} />
    <Route path='/personaAnalysis' component={PersonaAnalysisPage} />
    <Route path='/roomComparison' component={RoomComparisonPage} />
  </BrowserRouter>
);

export default EntryRoute;
