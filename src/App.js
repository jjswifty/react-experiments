import React from 'react';
import s from './App.module.sass';
import { Header } from './components/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { Todo } from './components/Todo/Todo';
import { Soon } from './components/Soon/Soon';

const App = () => {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header />
                <div className={s.appWrapperContent}>
                    <Route exact path="/" render={() => <Main />}/>
                    <Route path="/todo" render={() => <Todo />}/>
                    <Route path="/soon" render={() => <Soon />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
