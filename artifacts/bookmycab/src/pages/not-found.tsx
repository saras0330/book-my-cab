import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-8xl font-display font-black text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-secondary mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link href="/" className="px-6 py-3 rounded-xl bg-primary text-secondary font-bold hover:bg-primary/90 transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
