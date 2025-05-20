import Widget from "./Widget";

export default function CategorySection({ category, searchTerm, onAddClick }) {
  const filteredWidgets = category.widgets.filter(
    //filtering on the basis of name and text
    (widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      widget.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          {category.name}
        </h2>
      </div>

      {/* show all or searched widgets  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWidgets.map((widget) => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
        <div
          onClick={onAddClick}
          className="h-[22rem] cursor-pointer p-4 bg-white rounded-lg shadow-md flex items-center justify-center transition-colors"
        >
          <button className="text-gray-400 font-semibold text-md border-2 rounded-md p-2">
            + Add Widget
          </button>
        </div>
      </div>
    </div>
  );
}
