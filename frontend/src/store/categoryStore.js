import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCategoryStore = create(
  persist(
    (set) => ({
      categories: ['food', 'clothing', 'electronics', 'books', 'home', 'toys'],

      addCategory: (newCategory) =>
        set((state) => {
          const trimmed = newCategory.trim();
          if (!trimmed) return state; // Don't add empty categories

          const exists = state.categories.some(
            (category) => category.toLowerCase() === trimmed.toLowerCase(),
          );
          if (exists) return state; // Don't add duplicates

          return { categories: [...state.categories, trimmed] };
        }),
    }),
    { name: 'category' },
  ),
);

export default useCategoryStore;
