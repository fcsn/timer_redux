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
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case START_TIMER:
            return applyStartTimer(state, action);
        case RESTART_TIMER:
            return applyReastartTimer(state, action);
        case ADD_SECONDS:
            return applyAddSeconds(state, action);
        default:
            return state;
        }
}

function applyStartTimer(state, action) {
    return {
        ...state,
        isPlyaing: true
    }
}

function applyReastartTimer(state, action) {
    return{
        ...state,
        isPlaying: false,
        elapsedTime: 0
    }
}

function applyAddSeconds(state, action) {
        const { elapsedTime } = state;
        if(state.elapsedTime < TIME_DURATION ) {
            return {
                ...state,
                elapsedTime: elapsedTime + 1
            }
        } else {
            return {
                ...state,
                isPlaying: false
            };
        }
}


const actionCreators = {
    startTimer,
    restartTimer,
    addSeconds
}

export default reducer;


