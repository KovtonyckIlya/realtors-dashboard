import React from 'react';
import {Routers} from "./routers/routers";
import {Provider} from 'react-redux';
import {store} from './redux/store'
import {ProvideAuth} from "./hooks/useAuth";
import dotenv from  'dotenv'

export const App = () => {
    console.log("api url  ITS A ",process.env.REACT_APP_API)
    return (
        <div className={'wrapper'}>
            <Provider store={store}>
                <ProvideAuth>
                    <Routers/>
                </ProvideAuth>
            </Provider>
        </div>
    )
};
