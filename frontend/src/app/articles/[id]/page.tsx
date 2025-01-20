"use client";
import React from "react";

// next
import { useParams } from "next/navigation";

// hooks
import { useGetBlogById } from "@/hooks/useGetBlogById";

// components
import ArticleDetailPage from "@/components/templates/ArticleDetailPage";
import Loading from "@/components/atoms/Loading";
import ScrollTopButton from "@/components/molecules/ScrollTopButton";

const ArticleDetail = () => {
  const { id } = useParams();
  const blogId = Array.isArray(id) ? id[0] : id;
  const { blog, error } = useGetBlogById(blogId);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!blog) {
    return <Loading />;
  }

  return (
    <ArticleDetailPage
      id={blog.link}
      link={`/articles/${blog.id}`}
      image={blog.image.url}
      category={blog.category.name}
      date={blog.date}
      title={blog.title}
    >
      <div dangerouslySetInnerHTML={{ __html: blog.body }} />
      <ScrollTopButton />
    </ArticleDetailPage>
  );
};

export default ArticleDetail;
