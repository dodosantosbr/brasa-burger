interface Props {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const CategoryBar = ({
  categories,
  activeCategory,
  setActiveCategory,
}: Props) => {
  return (
    <div className="sticky top-[72px] z-40 bg-background/80 backdrop-blur-md py-4">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all
              ${
                activeCategory === category
                  ? "bg-primary text-white shadow-glow"
                  : "bg-surface hover:bg-primary/20"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};