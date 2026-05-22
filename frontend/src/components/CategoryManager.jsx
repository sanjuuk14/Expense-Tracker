import { useState } from 'react';
import useCategoryStore from '../store/categoryStore';

const CategoryManager = () => {
  const [category, setCategory] = useState([]);

  const { addCategory } = useCategoryStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(category);
    setCategory('');
  };
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Manage Categories</h2>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Add new category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 border p-3 rounded-xl"
        />

        <button
          type="submit"
          className="bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default CategoryManager;
