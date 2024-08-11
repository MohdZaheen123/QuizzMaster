"use client"

import { useState } from "react";
import { toast } from 'react-hot-toast';

export default function DeleteQuestion({ id }) {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleteLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/questions/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete the question');
      }

      toast.success('Successfully deleted the question! Please refresh the page to see the changes', {
        duration: 7000
      });
    } catch (error) {
      console.error("Error deleting question:", error);
      toast.error('Failed to delete the question');
    } finally {
      setIsDeleteLoading(false);
    }
  }

  return (
    <button 
      onClick={handleDelete} 
      disabled={isDeleteLoading}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded"
    >
      {isDeleteLoading ? "Deleting..." : "Delete"}
    </button>
  )
}