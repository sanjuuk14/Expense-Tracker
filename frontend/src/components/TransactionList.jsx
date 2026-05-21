import { useState } from 'react';
import useTransactionStore from '../store/transactionStore';

function TransactionList() {
  const { transactions, deleteTransaction } = useTransactionStore();

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredTransactions = transactions.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter = filterType === 'all' || item.type === filterType;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
        <h2 className="text-2xl font-bold">Transactions</h2>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search transaction..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-4 py-2 rounded-xl"
          />

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border px-4 py-2 rounded-xl"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded-xl"
            >
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-slate-500">
                  {item.category} • {item.date}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <p
                  className={`font-bold ${
                    item.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {item.type === 'income' ? '+' : '-'}₹{item.amount}
                </p>

                <button
                  onClick={() => deleteTransaction(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-slate-500 text-center py-6">
            No transactions found
          </p>
        )}
      </div>
    </div>
  );
}

export default TransactionList;
