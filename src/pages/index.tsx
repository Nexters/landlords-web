import PrivateRoute from 'components/private-route';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'store';

import AddRoom from './add-room/AddRoom';
import AddRoomViaLink from './add-room/via-link';
import Login from './auth/Login';
import ChecklistPage from './checklist/ChecklistPage';
import PersonaAnalysisPage from './persona/PersonaAnalysis';
import PersonaAnalysisResultPage from './persona/PersonaAnalysisResult';
import PersonaQuestionPage from './question/PersonaQuestion';
import RoomListPage from './rooms/RoomListPage';

export default function EntryRoute() {
  const store = createStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/persona/result' component={PersonaAnalysisResultPage} />
          <Route path='/persona/question' component={PersonaQuestionPage} />
          <Route path='/persona' component={PersonaAnalysisPage} />
          <Route path='/auth' component={Login} />
          <PrivateRoute path='/add-room/via-link' component={AddRoomViaLink} />
          <PrivateRoute path='/add-room' component={AddRoom} />
          <PrivateRoute path='/checklist' component={ChecklistPage} />
          <PrivateRoute path='/rooms' component={RoomListPage} />
          <Route path='/' component={PersonaAnalysisPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
