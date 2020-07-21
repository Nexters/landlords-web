import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './main/MainPage';
import ChecklistPage from './checklist/ChecklistPage';
import PersonaAnalysisPage from './persona/PersonaAnalysis';
import AnalysisQuestionPage from './persona/AnalysisQuestion';
import AnalysisResultPage from './persona/AnalysisResult';
import RoomComparisonPage from './room/RoomComparison';


const EntryRoute = () => (
  <BrowserRouter>
    <Route exact path='/' component={MainPage} />
    <Route path='/checklist' component={ChecklistPage} />
    <Route exact path='/persona' component={PersonaAnalysisPage} />
    <Route path='/persona/question' component={AnalysisQuestionPage} />
    <Route path='/persona/result' component={AnalysisResultPage} />
    <Route path='/room' component={RoomComparisonPage} />
  </BrowserRouter>
);

export default EntryRoute;
