import React, { useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";
import { Mail, Trash2, Calendar } from "lucide-react";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await api.get("/messages");
      setMessages(res.data);
    } catch (error) {
      toast.error("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?"))
      return;
    try {
      await api.delete(`/messages/${id}`);
      setMessages(messages.filter((msg) => msg.id !== id));
      toast.success("Message deleted");
    } catch (error) {
      toast.error("Failed to delete message");
    }
  };

  if (loading)
    return <div className="animate-pulse h-64 bg-gray-200 rounded"></div>;

  return (
    <div className="max-w-6xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Messages</h1>

      <div className="grid gap-4">
        {messages.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <Mail className="mx-auto h-12 w-12 text-gray-300 mb-3" />
            <p className="text-gray-500">No messages yet.</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">
                    {msg.name}
                  </h3>
                  <a
                    href={`mailto:${msg.email}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {msg.email}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar size={14} />
                    {new Date(msg.date).toLocaleDateString()}
                  </div>
                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded-full transition"
                    title="Delete Message"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <p className="text-gray-600 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg text-sm">
                {msg.message}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Messages;
