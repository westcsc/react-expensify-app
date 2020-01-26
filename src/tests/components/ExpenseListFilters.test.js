import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow( <ExpenseListFilters 
            filters={filters} 
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount} 
            setStartDate={setStartDate} 
            setEndDate={setEndDate}
        />);
});

test('should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    wrapper.find('input').simulate('change', { target: {value: 'Georgia'}});
    expect(setTextFilter).toHaveBeenLastCalledWith('Georgia')
});

test('should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    });

    wrapper.find('select').simulate('change',{ target: {value: 'date'}});
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', { target: {value: 'amount'}});
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const newDates = {
        startDate: moment(0).add(10, 'days'),
        endDate: moment(0).add(25, 'days')
    }
    wrapper.find('DateRangePicker').simulate('DatesChange', newDates);
    expect(setStartDate).toHaveBeenCalledWith(newDates.startDate);
    expect(setEndDate).toHaveBeenCalledWith(newDates.endDate);
});

test('should handle date focus chages', () => {
    const calendarFocused = 'endDate';


    wrapper.find('DateRangePicker').simulate('FocusChange', calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
    
});