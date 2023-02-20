// select dom element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");


// Initial State
const initialState = {
    value: 0,
}
// action identifier
const INCREMENT = "increment";
const DECREMENT = "decrement";
// action creator 
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    }
}
const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    }
}
// Create Reducer Function
function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload
        }
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload
        }
    } else {
        return state;
     }
}
// Create Store
const store = Redux.createStore(counterReducer)
//dynamic
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};
render()
store.subscribe(render)

// Button Click listener
incrementEl.addEventListener("click", () => {
    store.dispatch(increment(10))
})

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(5))
});



