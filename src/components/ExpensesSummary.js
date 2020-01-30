import React from 'react';
import { connect } from 'react-redux';
import  getTotalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <p>Viewing {props.expenses.length === 1 ?
        '1 expense ' : 
        `${props.expenses.length} expenses`} totalling {numeral(getTotalExpenses(props.expenses)/100).format('$0,0.00')}
    </p>
);

const mapStateToProps = (state, props) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps)(ExpensesSummary);