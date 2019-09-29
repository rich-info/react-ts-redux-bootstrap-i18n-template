import { AnyAction, Dispatch } from "redux";

const requestEventsType = 'REQUEST_EVENTS';
const receiveEventsType = 'RECEIVE_EVENTS';
const initialState = { events: [], isLoading: false };

export const actionCreators = {
    //TODO replace generic with proper typing
    requestEvents: (dayIndex: number) => async (dispatch: Dispatch, getState: () => any) => {

        var opts = {
            //mode: 'no-cors' as RequestMode,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                //'Authorization': 'Bearer ' + token                        
            }
        }

        if (dayIndex === getState().events.dayIndex) {
            // Don't issue a duplicate request (we already have or are loading the requested data)
            return;
        }

        dispatch({ type: requestEventsType, dayIndex });

        const url = "https://api.coingecko.com/api/v3/events";


        const response = await fetch(url, opts);
        const events = await response.json();
        // console.log(events);

        dispatch({ type: receiveEventsType, dayIndex, events });
    }
};

export const reducer = (state = initialState, action: AnyAction) => {

    switch (action.type) {
        case requestEventsType:
            return {
                ...state,
                dayIndex: action.dayIndex,
                isLoading: true
            };
        case receiveEventsType:
            return {
                ...state,
                dayIndex: action.dayIndex,
                events: action.events.data,
                isLoading: false
            };
        default:
            return state;
    }
};
