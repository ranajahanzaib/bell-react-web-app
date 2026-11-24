import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";

export const metadata = {
  title: "Writing with MDX — Getting Started",
  description: "Learn how to add an MDX article to the Bell website starter.",
};

export default function JournalLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main className="journal-page">
      <header className="site-header wrap">
        <Link className="wordmark" href="/">{site.name}<span className="wordmark-dot">●</span></Link>
        <Link className="article-back" href="/#journal">← Back to Bell</Link>
      </header>
      <article className="article">
        <p className="eyebrow"><span className="eyebrow-dot"/>Bell · MDX example</p>
        {children}
        <Link className="article-back" href="/#journal">← More about Bell</Link>
      </article>
    </main>
  );
}
