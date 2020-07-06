import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {DummyComponent} from './DummyComponent'

export const EntryRoute = () => (
    <BrowserRouter>
        <Route path='/' component={DummyComponent} />
    </BrowserRouter>
)