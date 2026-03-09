import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/i18n";
import SEO from "@/components/SEO";
import { blogPosts } from "@/pages/Blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-16 section-padding text-center">
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">Post not found</h1>
        <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="relative h-[40vh] min-h-[300px]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container-tour max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground mb-4 text-sm">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">{post.title}</h1>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-tour max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {post.content.map((p, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed mb-4">{p}</p>
            ))}
          </div>

          <div className="mt-12 bg-primary/10 rounded-xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Ready to book your adventure?</h2>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
