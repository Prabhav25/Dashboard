import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategorySection from "./CategorySection";
import SearchBar from "./SearchBar";
import AddWidgetModal from "./AddWidgetModal";
import initialData from "../initialData.json";
import { initializeData } from "../store/slices/dashboardSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { categories, searchTerm } = useSelector((state) => state.dashboard);
  const [showAddModal, setShowAddModal] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  // Find the selected category for the modal
  const selectedCategory = categories.find(
    (cat) => cat.id === activeCategoryId
  );
  const selectedCategoryName = selectedCategory ? selectedCategory.name : "";

  //initialize data only once from the initialData.json
  useEffect(() => {
    // first load
    if (categories.length === 0) {
      dispatch(initializeData(initialData.categories));
    }
  }, [dispatch, categories.length]);

  return (
    <div className="px-8 py-4 space-y-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold mb-2 text-gray-800">
          Dashboard V2
        </h1>
        <SearchBar />
      </div>
      {categories.map((category) => (
        <CategorySection
          key={category.id}
          category={category}
          searchTerm={searchTerm}
          onAddClick={() => {
            setActiveCategoryId(category.id);
            setShowAddModal(true);
          }}
        />
      ))}
      {showAddModal && (
        <AddWidgetModal
          categoryId={activeCategoryId}
          closeModal={() => setShowAddModal(false)}
          categoryName={selectedCategoryName}
        />
      )}
    </div>
  );
}
