import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { blogPosts } from "@/lib/starseeker-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.post.title} | StarSeeker` },
      { name: "description", content: loaderData.post.excerpt },
      { property: "og:title", content: loaderData.post.title },
      { property: "og:description", content: loaderData.post.excerpt },
      { property: "og:type", content: "article" },
    ] : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Article not found</h1>
        <Button asChild className="mt-6"><Link to="/blog">Read the blog</Link></Button>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout><div className="mx-auto max-w-3xl px-6 py-24 text-center"><h1 className="text-3xl font-semibold">Something went wrong</h1><p className="mt-3 text-muted-foreground">{error.message}</p></div></SiteLayout>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  return (
    <SiteLayout>
      <article className="mx-auto max-w-2xl px-6 py-12">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-3.5 w-3.5" /> All articles
        </Link>
        <p className="text-xs uppercase tracking-wider text-primary font-medium">{post.category} · {post.readTime} read</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight" style={{ letterSpacing: "-0.02em", textWrap: "balance" }}>{post.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
        <div className="mt-8 prose prose-lg max-w-none text-foreground space-y-5">
          {post.body.split("\n\n").map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-muted-foreground">{para}</p>
          ))}
        </div>
      </article>
    </SiteLayout>
  );
}
