import { categories } from "../../data/site";
import type { Category } from "../../types/content";

type FilterTabsProps = {
  current: Category;
  onChange: (category: Category) => void;
};

export function FilterTabs({ current, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const active = current === category.key;

        return (
          <button
            key={category.key}
            type="button"
            onClick={() => onChange(category.key)}
            className={`rounded-full px-5 py-3 text-sm font-medium transition ${
              active ? "bg-accent text-white shadow-lg shadow-indigo-500/20" : "bg-[#edf1f5] text-slate-500 hover:bg-[#e4e8f0]"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
