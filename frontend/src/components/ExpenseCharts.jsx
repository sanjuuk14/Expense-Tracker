import useTransactionStore from '../store/transactionStore';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

function ExpenseChart() {
  const { transactions } = useTransactionStore();

  const expenseTransactions = transactions.filter(
    (item) => item.type === 'expense',
  );

  const groupedData = expenseTransactions.reduce((acc, item) => {
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

  const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Expense Breakdown</h2>

      {groupedData.length > 0 ? (
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={groupedData}
                dataKey="amount"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {groupedData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-slate-500 text-center py-10">
          No expense data available
        </p>
      )}
    </div>
  );
}

export default ExpenseChart;
