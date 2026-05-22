import useTransactionStore from '../store/transactionStore';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

function CategoryExpenseSummary() {
  const { transactions } = useTransactionStore();

  const expenseTransactions = transactions.filter(
    (item) => item.type === 'expense',
  );

  const groupedExpenses = expenseTransactions.reduce((acc, item) => {
    const existing = acc.find((entry) => entry.category === item.category);

    if (existing) {
      existing.amount += item.amount;
    } else {
      acc.push({
        category: item.category,
        amount: item.amount,
      });
    }

    return acc;
  }, []);

  const sortedExpenses = groupedExpenses.sort((a, b) => b.amount - a.amount);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6">Category Expense Analysis</h2>

      {sortedExpenses.length > 0 ? (
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sortedExpenses}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="category" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="amount" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-center text-slate-500 py-8">
          No expense data available
        </p>
      )}
    </div>
  );
}

export default CategoryExpenseSummary;
