import { login, logout } from '../../actions/auth';

test('should return login action object', () => {
    const action = login('me-138')
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'me-138'
    })
});

test('should return logout action object', () => {
    const action = logout();
    expect(action).toEqual({ type: 'LOGOUT' });
});