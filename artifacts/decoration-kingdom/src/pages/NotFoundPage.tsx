import { Link } from "wouter";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <p className="font-script text-5xl text-[color:var(--pink)]">Oops</p>
        <h1 className="font-display italic text-3xl md:text-4xl text-[color:var(--purple-deep)] mt-3">Page not found</h1>
        <p className="text-muted-foreground mt-3">This page doesn't exist. Let's get you back home.</p>
        <Link href="/" className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-primary text-white font-bold text-sm shadow-pink">Back to Home</Link>
      </div>
      <SiteFooter />
    </div>
  );
}
