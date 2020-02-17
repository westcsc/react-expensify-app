import authReducer from '../../reducers/auth';

test('should return the user id as the state object on Login action', () => {
    const action = {
        type: 'LOGIN',
        uid: 'me780'
    }

    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should return empty state on logout action', () => {
    const action = {
        type: 'LOGOUT'
    };

    const state = authReducer({ uid: 'me187' }, action);
    expect(state).toEqual({});
});