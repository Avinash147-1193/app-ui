import {View, StyleSheet} from 'react-native';

import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';
import { GlobalStyles } from '../constants/GlobalStyles';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 56.87,
        date: new Date('2022-11-28')
    },
    {
        id: 'e2',
        description: 'A pair of shirts',
        amount: 90.77,
        date: new Date('2022-11-19')
    },
    {
        id: 'e3',
        description: 'A pair of pens',
        amount: 56.87,
        date: new Date('2022-12-19')
    },
    {
        id: 'e4',
        description: 'A pair of trousers',
        amount: 56.87,
        date: new Date('2022-12-15')
    },
    {
        id: 'e5',
        description: 'A pair of soda',
        amount: 56.87,
        date: new Date('2022-11-20')
    },
]

function ExpenseOutput ({expenses, expensesPeriod}) {
    return (
        <View style={styles.container}>
            <ExpenseSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
            <ExpenseList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpenseOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
});