import React, { useEffect, useState } from "react";
import { createItem, updateItem, deleteItem } from "../../services/api";
import api from "../../services/api";
import { Plus, Edit, Trash2, X, Upload } from "lucide-react";
import toast from "react-hot-toast";

const SectionEditor = ({ title, endpoint, fields }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchItems();
  }, [endpoint]);

  const fetchItems = async () => {
    try {
      const res = await api.get(endpoint);
      setItems(res.data);
    } catch (error) {
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setCurrentItem(null);
    setFormData({});
    setIsModalOpen(true);
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setFormData(item);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteItem(endpoint, id);
        toast.success("Item deleted successfully");
        fetchItems();
      } catch (error) {
        toast.error("Error deleting item");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Saving...");
    try {
      if (currentItem) {
        await updateItem(endpoint, currentItem.id, formData);
      } else {
        await createItem(endpoint, formData);
      }
      toast.success("Saved successfully", { id: loadingToast });
      setIsModalOpen(false);
      fetchItems();
    } catch (error) {
      toast.error("Error saving item", { id: loadingToast });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, [fieldName]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          <Plus size={18} />
          Add New
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              {fields.map((field) => (
                <th
                  key={field.key}
                  className="px-6 py-3 text-sm font-medium text-gray-500"
                >
                  {field.label}
                </th>
              ))}
              <th className="px-6 py-3 text-sm font-medium text-gray-500 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                {fields.map((field) => (
                  <td
                    key={field.key}
                    className="px-6 py-4 text-sm text-gray-700"
                  >
                    {field.type === "image" || field.type === "image-upload" ? (
                      <img
                        src={item[field.key]}
                        alt="Thumbnail"
                        className="h-10 w-16 object-cover rounded"
                      />
                    ) : (
                      <div className="max-w-xs truncate">{item[field.key]}</div>
                    )}
                  </td>
                ))}
                <td className="px-6 py-4 text-right space-x-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td
                  colSpan={fields.length + 1}
                  className="px-6 py-8 text-center text-gray-500"
                >
                  No items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg mx-4 overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                {currentItem ? "Edit Item" : "Add New Item"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {fields.map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      name={field.key}
                      value={formData[field.key] || ""}
                      onChange={handleChange}
                      rows="3"
                      className="w-full p-2 border rounded"
                      required={!field.optional}
                    />
                  ) : field.type === "image-upload" ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded flex items-center gap-2 text-sm text-gray-700 transition">
                          <Upload size={16} />
                          Choose Image
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFileChange(e, field.key)}
                          />
                        </label>
                        <span className="text-xs text-gray-500">Max 5MB</span>
                      </div>
                      {formData[field.key] && (
                        <img
                          src={formData[field.key]}
                          alt="Preview"
                          className="h-32 w-auto object-cover rounded border"
                        />
                      )}
                    </div>
                  ) : (
                    <input
                      type={field.type || "text"}
                      name={field.key}
                      value={formData[field.key] || ""}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      required={!field.optional}
                    />
                  )}
                </div>
              ))}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionEditor;
