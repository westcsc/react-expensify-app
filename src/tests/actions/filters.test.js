import moment from 'moment';
import { 
    setTextFilter, 
    setStartDate, 
    setEndDate, 
    sortByDate, 
    sortByAmount 
} from '../../actions/filters';

test('should generate set start date filter action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should generate set end date filter action object', () => {
    const action = setEndDate(moment(3));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(3)
    });
});

test('should generate set text action filter object', () => {
    const text = 'Bill';
    const filter = setTextFilter(text);
    expect(filter).toEqual( {
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should generate set text actopm filter pbkect with default vlaues', () => {
    const filter = setTextFilter();
    expect(filter).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate set by amount action filter object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate sort by date action filter object', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})