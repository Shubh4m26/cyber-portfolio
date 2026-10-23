
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjectSlugs();
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050816] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-cyan-300"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <header>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {project.category}
          </p>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1.5 text-sm text-cyan-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </header>

        <section className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Project Overview
          </h2>

          <p className="mt-4 leading-8 text-zinc-400">
            {project.overview}
          </p>
        </section>

        <section className="mt-12 space-y-6">
          {project.sections.map((section, index) => (
            <article
              key={section.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="text-sm font-semibold text-cyan-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-semibold leading-snug sm:text-2xl">
                    {section.title}
                  </h2>

                  <p className="mt-4 leading-8 text-zinc-400">
                    {section.content}
                  </p>

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-sm leading-7 text-zinc-300 sm:text-base"
                        >
                          <ArrowUpRight
                            size={17}
                            className="mt-1 shrink-0 text-cyan-400"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-12 border-t border-white/10 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-cyan-300 transition hover:text-cyan-200"
          >
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
