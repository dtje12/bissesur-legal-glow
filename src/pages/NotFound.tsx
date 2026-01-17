import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center bg-background">
        <div className="container-custom">
          <div className="max-w-lg mx-auto text-center">
            {/* Decorative 404 */}
            <div className="relative mb-8">
              <span className="text-[150px] md:text-[200px] font-serif font-bold text-primary/10 leading-none select-none">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-primary">?</span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Pagina Niet Gevonden
            </h1>
            <div className="decorative-line mx-auto mb-6" />
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              De pagina die u zoekt bestaat niet of is verplaatst. 
              Controleer de URL of keer terug naar onze homepage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/">
                  <Home className="w-4 h-4" />
                  Naar Homepage
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/contact">
                  <ArrowLeft className="w-4 h-4" />
                  Contact Opnemen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
