import { createStore, Action, Reducer, Store } from 'redux'
import React from 'react'

interface IState {
    turns: string[];
}

type TAction1 = "ACTION_1";

interface IAction1 extends Action<TAction1> {
    payload: string;
}

type TAppAction = IAction1; // Assume other action interfaes will be added via union.

// The reducer here doesn't do anything.
const reducer: Reducer<IState, TAppAction> = (state = { turns: [] }) => state;

// The Store type shown is the type returned by createStore.
// A workaround that works is to convert type to Store<IState> which appears to implicitly weaken the type of store.
const store: Store<IState, TAppAction> = createStore(reducer);

export default store