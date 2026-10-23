import { getAllSlugs, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllSlugs();
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  return (
    <main className="max-w-4xl mx-auto px-8 py-24">

      <p className="text-cyan-400">
        {post.date}
      </p>

      <h1 className="text-5xl font-bold mt-4">
        {post.title}
      </h1>

      <p className="text-zinc-400 mt-4">
        {post.description}
      </p>

      <hr className="my-10 border-zinc-700" />

      <article
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{
          __html: post.contentHtml,
        }}
      />

    </main>
  );
}