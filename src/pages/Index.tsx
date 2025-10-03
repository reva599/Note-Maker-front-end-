import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { FileText, Star, Tag, Search } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/dashboard");
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Notes Manager
          </h1>
        </div>
        <Button onClick={() => navigate("/auth")}>Get Started</Button>
      </header>

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold tracking-tight">
              Your thoughts, <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">organized</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A beautiful and simple way to capture ideas, organize your thoughts, and never forget what matters.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={() => navigate("/auth")} className="text-lg">
              Start Taking Notes
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-16">
            <div className="space-y-3 p-6 rounded-lg bg-card/50 border border-border/50 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Star Important Notes</h3>
              <p className="text-sm text-muted-foreground">
                Mark your most important notes with stars for quick access
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-lg bg-card/50 border border-border/50 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Tag className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Organize with Tags</h3>
              <p className="text-sm text-muted-foreground">
                Categorize notes with custom tags for better organization
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-lg bg-card/50 border border-border/50 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Powerful Search</h3>
              <p className="text-sm text-muted-foreground">
                Find any note instantly with lightning-fast search
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
