import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Scale } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const mainNavItems = siteConfig.navigation;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-background shadow-lg py-3"
            : "bg-background/80 backdrop-blur-sm py-4"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded flex items-center justify-center transition-all bg-primary">
                <Scale className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-serif font-semibold leading-tight text-foreground">
                  {siteConfig.name}
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "nav-link text-sm font-medium transition-colors text-foreground/70 hover:text-foreground",
                    location.pathname === item.path && "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={siteConfig.contact.phoneLink}
                className="flex items-center gap-2 text-sm font-medium transition-colors text-foreground/70 hover:text-foreground"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.contact.phone}
              </a>
              <Link
                to="/rechtsgebieden"
                className="btn-gold text-sm"
              >
                Meer Info
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "mobile-menu lg:hidden",
          isOpen && "open"
        )}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          <div className="flex-1">
            <nav className="space-y-1">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "block py-4 text-xl font-serif text-primary-foreground/80 hover:text-primary-foreground border-b border-primary-foreground/10 transition-colors",
                    location.pathname === item.path && "text-accent"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/klachtenregeling"
                className="block py-4 text-xl font-serif text-primary-foreground/80 hover:text-primary-foreground border-b border-primary-foreground/10 transition-colors"
              >
                Klachtenregeling
              </Link>
              <Link
                to="/algemene-voorwaarden"
                className="block py-4 text-xl font-serif text-primary-foreground/80 hover:text-primary-foreground border-b border-primary-foreground/10 transition-colors"
              >
                Algemene Voorwaarden
              </Link>
            </nav>
          </div>

          <div className="space-y-4 pt-8 border-t border-primary-foreground/20">
            <a
              href={siteConfig.contact.phoneLink}
              className="flex items-center gap-3 text-primary-foreground"
            >
              <Phone className="w-5 h-5 text-accent" />
              <span className="text-lg">{siteConfig.contact.phone}</span>
            </a>
            <Link
              to="/rechtsgebieden"
              className="btn-gold block text-center text-lg"
            >
              Onze Specialisaties
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
