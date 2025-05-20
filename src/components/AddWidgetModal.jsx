import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; //dispatching actions to store
import { addWidget } from "../store/slices/dashboardSlice"; //action imported to add a new widget

export default function AddWidgetModal({
  categoryId,
  categoryName,
  closeModal,
}) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    text: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      closeModal();
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent refresh
    const newWidget = {
      id: Date.now(),
      ...formData,
    };
    dispatch(addWidget({ categoryId, widget: newWidget })); //send new widget created to the redux
    handleClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-hidden">
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-2xl bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">Add New Widget</h3>
            <p className="text-sm text-gray-500 mt-1">
              Adding to:{" "}
              <span className="font-medium text-blue-600">{categoryName}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Widget Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border rounded-lg"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Widget Text
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full p-3 border rounded-l"
                  value={formData.text}
                  onChange={(e) =>
                    setFormData({ ...formData, text: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="sticky bottom-0 bg-white py-6 mt-6 border-t">
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2 text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
