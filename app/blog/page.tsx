import SectionTitle from "@/components/ui/SectionTitle";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-7xl mx-auto px-8 py-32">

      <SectionTitle
        subtitle="BLOG"
        title="Cybersecurity Articles"
      />

      <div className="grid lg:grid-cols-2 gap-8 mt-16">

        {posts.map((post) => (

          <BlogCard
            key={post.slug}
            {...post}
          />

        ))}

      </div>

    </main>
  );
}