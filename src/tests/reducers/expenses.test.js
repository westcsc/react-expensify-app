import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id  not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'abc'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const newExpense = {
        id: 50,
        description: 'Good Cigars',
        note: 'Babalus Cigar Store in Austin TX',
        amount: 3500,
        createdAt: undefined
    }
    const action = { 
        type: 'ADD_EXPENSE',
        expense: newExpense
        }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test('should edit an expense', () => {
    const action = { 
        type: 'EDIT_EXPENSE', 
        id: expenses[2].id,
        updates: {
            note: 'REI Purchase',
            amount: 50000
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[2].amount).toBe(50000);
    expect(state[2].note).toBe('REI Purchase');
});

test('should not edit an expense if the id is not found', () => {
    const action = { 
        type: 'EDIT_EXPENSE', 
        id: 100,
        updates: {
            note: 'REI Purchase',
            amount: 50000
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const expensesIn = [
        {
            id: 288,
            description: 'This is a test record',
            note: 'hope this works',
            amount: 40,
            createdAt: 50
        }
    ]
    const action = {
        type: 'SET_EXPENSES',
        expenses: expensesIn
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expensesIn);
})
