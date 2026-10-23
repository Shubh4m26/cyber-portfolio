import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "./BlogCard";
import SectionTitle from "../ui/SectionTitle";

export default function HomeBlogSection() {
  const posts = getAllPosts()
    .filter((post) => post.featured)
    .slice(0, 2);

  return (
    <section className="max-w-7xl mx-auto px-8 py-36" id="blog">

      <SectionTitle
        subtitle="LATEST ARTICLES"
        title="Cybersecurity Blog"
      />

      <div className="grid lg:grid-cols-2 gap-8 mt-16">

        {posts.map((post) => (

          <BlogCard
            key={post.slug}
            {...post}
          />

        ))}

      </div>

      <div className="flex justify-center mt-16">

        <Link
          href="/blog"
          className="px-8 py-4 rounded-full border border-cyan-500 hover:bg-cyan-500/10 transition"
        >
          View All Articles →
        </Link>

      </div>

    </section>
  );
}