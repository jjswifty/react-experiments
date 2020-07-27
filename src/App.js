import React from 'react';
import s from './App.module.sass';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';


function App() {
    return (
        <div className={s.appWrapper}>
            <Header />
            

            <div className={s.appWrapperContent}>
                a
            </div>
        </div>
        

    );
}

export default App;
