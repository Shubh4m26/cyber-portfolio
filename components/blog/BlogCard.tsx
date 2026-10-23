import Link from "next/link";

type BlogCardProps = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime?: string;
};

export default function BlogCard({
  slug,
  title,
  description,
  date,
  readingTime,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="rounded-3xl border border-cyan-500/20 bg-[#111827] p-8 hover:border-cyan-400 transition-all cursor-pointer">

        <p className="text-cyan-400 text-sm">
          {date}
        </p>

        <h2 className="text-2xl font-bold mt-3">
          {title}
        </h2>

        <p className="text-zinc-400 mt-4">
          {description}
        </p>

        <p className="text-cyan-300 mt-6">
          {readingTime}
        </p>

      </div>
    </Link>
  );
}