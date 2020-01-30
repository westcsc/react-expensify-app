import  getExpensesTotal  from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return total amount from the array of expenses', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(114195);
});

test('should return 0 if no expenses', () => {
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
});

test('should get expenses for 1 expense', () => {
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toBe(195);
})
