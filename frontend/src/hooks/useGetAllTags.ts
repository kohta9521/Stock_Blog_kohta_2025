"use client";
import { useState, useEffect } from "react";

// types
import { Tags } from "@/types/tags";

function useGetAllTags() {
  const [tags, setTags] = useState<Tags[]>([]);

  useEffect(() => {
    fetch("/api/tags")
      .then((res) => res.json())
      .then((data) => setTags(data))
      .catch((error) => console.error("Failed to fetch categories:", error));
  }, []);

  return tags;
}

export default useGetAllTags;
