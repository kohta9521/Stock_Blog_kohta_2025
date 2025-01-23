"use client";
import { useState, useEffect } from "react";

// types
import { Categories } from "@/types/categories";

function useGetAllCategories() {
  const [categories, setCategories] = useState<Categories[]>([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Failed to fetch categories:", error));
  }, []);

  return categories;
}

export default useGetAllCategories;
