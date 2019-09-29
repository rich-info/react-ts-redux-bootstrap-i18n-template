import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import * as Counter from './Counter';
// import * as WeatherForecasts from './WeatherForecasts';
import * as EventsStore from './EventsStore';


//TODO fix history
export default function configureStore(history: any, initialState: object) {
    const reducers = {
        counter: Counter.reducer,
        events: EventsStore.reducer
    };

    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && (window as any).devToolsExtension) {
        enhancers.push((window as any).devToolsExtension());
    }

    const rootReducer = combineReducers({
        ...reducers,
        //routing: routerReducer
        router: connectRouter(history),
    });

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}