const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECONDS = 'ADD_SECONDS';

//action creators
function startTimer() {
    return {
        type: START_TIMER
    };
}

function restartTimer() {
    return {
        type: RESTART_TIMER
    };
}

function addSeconds() {
    return {
        type: ADD_SECONDS
    };
}

//reducers
const TIME_DURATION = 1500;

const initialState = {
   isPlaying: false,
   elapsedTime: 0,
   timeDuration: TIME_DURATION
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case START_TIMER:
        return applyStartTimer(state, action);
        case RESTART_TIMER:
        return applyReastartTimer(state, action);
        case ADD_SECONDS:
        return applyAddSeconds(state, action);

    }
}