import { create } from 'zustand';
import { persist } from 'zustand/middleware';
const useTransactionStore = create(
  persist(
    (set) => ({
      transactions: [
        {
          id: 1,
          title: 'Salary',
          amount: 25000,
          type: 'income',
          category: 'Salary',
          date: '2026-05-21',
        },
        {
          id: 2,
          title: 'Pizza',
          amount: 500,
          type: 'expense',
          category: 'Food',
          date: '2026-05-21',
        },
      ],

      addTransaction: (newTransaction) =>
        set((state) => ({
          transactions: [
            {
              ...newTransaction,
              id: Date.now(),
            },
            ...state.transactions,
          ],
        })),

      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((item) => item.id !== id),
        })),
    }),
    { name: 'expense-transactions' },
  ),
);

export default useTransactionStore;
