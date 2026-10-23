import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(data as {
      title: string;
      description: string;
      date: string;
      author: string;
      readingTime?: string;
      tags?: string[];
    }),
  };
}

export function getAllSlugs() {
  return fs.readdirSync(postsDirectory).map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

const postsDirectory = path.join(process.cwd(), "content/blogs");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const fullPath = path.join(postsDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as {
        title: string;
        description: string;
        date: string;
        author: string;
        featured?: boolean;
        readingTime?: string;
        tags?: string[];
      }),
    };
  });

  return posts.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}