import { useState } from 'react';
import useTransactionStore from '../store/transactionStore';

function TransactionForm() {
  const { addTransaction } = useTransactionStore();

  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    type: 'expense',
    category: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      ...formData,
      amount: Number(formData.amount),
    });

    setFormData({
      title: '',
      amount: '',
      type: 'expense',
      category: '',
      date: '',
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Add Transaction</h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-5 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <button
          type="submit"
          className="md:col-span-5 bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
