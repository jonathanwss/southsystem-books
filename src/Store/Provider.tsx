/* eslint-disable prettier/prettier */
import React, {
    createContext,
    useContext,
    useReducer,
    Dispatch,
    useCallback,
  } from 'react';
  import { IAppState as IStateApp } from './IAppState';
  import { Actions } from '../Actions/ActionsTypes';
  import Reducer, { initialState } from '../Reducer/Reducer';

  export interface IContextProps {
    state: IStateApp;
    dispatch: Dispatch<Actions>;
  }

  export interface ActionDispatcher {
    (
      dispatch: Dispatch<Actions | ActionDispatcher>,
      state: IStateApp,
    ): void;
  }

  interface ICreateReducer {
    children: JSX.Element;
  }

  export const StateContext = createContext<IStateApp | any>(
    initialState,
  );

  export const Provider = ({ children }: ICreateReducer): JSX.Element => {
    const [state, dispatch] = useReducer(Reducer, initialState as IStateApp);
    const _value = { state, dispatch };

    return (
      <StateContext.Provider value={_value}>
        {children}
      </StateContext.Provider>
    );
  };

  export const useStateValue = () => useContext(StateContext);

  export function useSelector<T>(selector: (state: IStateApp) => T): T {
    const { state } = useStateValue();

    return selector(state);
  }

  export function useDispatch() {
    const { state, dispatch }: { state: IStateApp; dispatch: Dispatch<ActionDispatcher> } = useStateValue();
    const autoReDispatch = useCallback(async (action: any) => {
      typeof action === 'function'
        ? await action(autoReDispatch, state)
        : dispatch(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return autoReDispatch;
  }
