import PrivateRoute from 'components/private-route';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'store';

import Login from './auth/Login';
import ChecklistPage from './checklist/ChecklistPage';
import RoomComparisonPage from './comparison/RoomComparison';
import MainPage from './main/MainPage';
import PersonaAnalysisPage from './persona/PersonaAnalysis';
import PersonaAnalysisResultPage from './persona/PersonaAnalysisResult';
import PersonaQuestionPage from './question/PersonaQuestion';
import RoomList from './rooms/RoomList';;

export default function EntryRoute() {
  const store = createStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/persona/result' component={PersonaAnalysisResultPage} />
          <Route path='/persona/question' component={PersonaQuestionPage} />
          <Route path='/persona' component={PersonaAnalysisPage} />
          <PrivateRoute path='/checklist' component={ChecklistPage} />
          <PrivateRoute path='/comparison' component={RoomComparisonPage} />
          <PrivateRoute path='/auth' component={Login} />
          <PrivateRoute path='/rooms' component={RoomList} />
          <Route path='/' component={MainPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
