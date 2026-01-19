import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Scale } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const Footer = () => {
  return (
    <footer className="footer-gradient text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-accent flex items-center justify-center">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <span className="font-serif font-semibold text-lg">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-accent">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.contact.phoneLink}
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 mt-1 text-accent" />
                  <span className="text-sm">{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 mt-1 text-accent" />
                  <span className="text-sm break-all">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                  <span className="text-sm">{siteConfig.contact.address.full}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-accent">
              Openingstijden
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <Clock className="w-4 h-4 mt-1 text-accent" />
                <div className="text-sm">
                  <p>{siteConfig.contact.openingHours.weekdays}</p>
                  <p className="mt-1">{siteConfig.contact.openingHours.weekend}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-accent">
              Snelle Links
            </h3>
            <ul className="space-y-2">
              {siteConfig.navigation
                .filter((item) => item.path !== "/tarieven")
                .map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} {siteConfig.name}. Alle rechten voorbehouden.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              {siteConfig.footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
