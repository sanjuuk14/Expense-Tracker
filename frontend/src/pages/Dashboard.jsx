import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import useTransactionStore from '../store/transactionStore';
import SummaryCard from '../components/SummaryCard';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import ExpenseChart from '../components/ExpenseCharts';
import CategoryManager from '../components/CategoryManager';
import CategoryExpenseSummary from '../components/CategoryExpenseSummary';

function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const { transactions } = useTransactionStore();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const totalIncome = transactions
    .filter((item) => item.type === 'income')
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpense = transactions
    .filter((item) => item.type === 'expense')
    .reduce((sum, item) => sum + item.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Welcome, {user?.name}
            </h1>
            <p className="text-slate-500 mt-1">{user?.email}</p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <SummaryCard
            title="Income"
            amount={totalIncome}
            color="text-green-600"
          />
          <SummaryCard
            title="Expense"
            amount={totalExpense}
            color="text-red-600"
          />
          <SummaryCard title="Balance" amount={balance} color="text-blue-500" />
        </div>
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-6">
          <ExpenseChart />
          <CategoryExpenseSummary />
        </div>
        <CategoryManager />
        <TransactionForm />
        {/* Transactions */}
        <TransactionList />
      </div>
    </div>
  );
}

export default Dashboard;
