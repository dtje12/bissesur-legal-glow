import { Phone, Mail, MapPin, Clock, Printer, Smartphone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const OfficeInfo = () => {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Office Photo */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg overflow-hidden shadow-elegant">
              {/* Placeholder for office photo - user can replace this */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-navy-dark">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-accent" />
                  </div>
                  <p className="text-primary-foreground/60 text-sm">
                    Voeg hier een foto van uw kantoor toe
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-lg -z-10" />
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-elegant p-8 lg:p-10">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary mb-6">
              {siteConfig.name}
            </h2>
            
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{siteConfig.contact.address.street}</p>
                  <p className="text-muted-foreground">{siteConfig.contact.address.postalCode}  {siteConfig.contact.address.city}</p>
                </div>
              </div>

              {/* Phone */}
              <a 
                href={siteConfig.contact.phoneLink}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Telefoon</p>
                  <p className="font-medium text-foreground group-hover:text-accent transition-colors">T: {siteConfig.contact.phone}</p>
                </div>
              </a>

              {/* Fax */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Printer className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Fax</p>
                  <p className="font-medium text-foreground">F: {siteConfig.contact.fax}</p>
                </div>
              </div>

              {/* Mobile */}
              <a 
                href={siteConfig.contact.mobileLink}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Mobiel</p>
                  <p className="font-medium text-foreground group-hover:text-accent transition-colors">M: {siteConfig.contact.mobile}</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">E-mail</p>
                  <p className="font-medium text-foreground group-hover:text-accent transition-colors">E: {siteConfig.contact.email}</p>
                </div>
              </a>

              {/* Opening Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-border mt-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Openingstijden</p>
                  <p className="font-medium text-foreground">{siteConfig.contact.openingHours.weekdays}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeInfo;
