export const ProductCardSkeleton = () => {
  return (
    <div className="bg-surface rounded-xl2 overflow-hidden shadow-card animate-pulse">
      {/* Imagem */}
      <div className="h-56 w-full bg-gray-700" />

      {/* Conteúdo */}
      <div className="p-6 flex flex-col gap-4">
        <div className="space-y-3">
          <div className="h-5 w-2/3 bg-gray-700 rounded" />
          <div className="h-4 w-1/2 bg-gray-700 rounded" />
          <div className="h-4 w-full bg-gray-700 rounded" />
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="h-6 w-20 bg-gray-700 rounded" />
          <div className="h-10 w-28 bg-gray-700 rounded-xl2" />
        </div>
      </div>
    </div>
  );
};