import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/config/siteConfig";
import { Phone, Mail, MapPin, Clock, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, safeEncodeURIComponent } from "@/lib/sanitize";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    onderwerp: "",
    bericht: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = contactFormSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: "Formulier ongeldig",
        description: "Controleer de ingevulde gegevens.",
        variant: "destructive",
      });
      return;
    }

    const sanitizedData = result.data;
    
    const mailtoLink = `mailto:${siteConfig.contact.email}?subject=${safeEncodeURIComponent(
      sanitizedData.onderwerp || "Contact via website"
    )}&body=${safeEncodeURIComponent(
      `Naam: ${sanitizedData.naam}\nEmail: ${sanitizedData.email}\nTelefoon: ${sanitizedData.telefoon}\n\nBericht:\n${sanitizedData.bericht}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Contact
            </h1>
            <div className="w-16 h-1 bg-accent mb-6" />
            <p className="text-xl text-primary-foreground/80">
              Heeft u een juridische vraag? Neem contact met ons op voor een 
              vrijblijvend kennismakingsgesprek.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
                Contactgegevens
              </h2>

              <div className="space-y-6 mb-10">
                {/* Phone */}
                <a
                  href={siteConfig.contact.phoneLink}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telefoon</p>
                    <p className="text-muted-foreground">{siteConfig.contact.phone}</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground break-all">{siteConfig.contact.email}</p>
                  </div>
                </a>

                {/* Address */}
                <a
                  href={siteConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Adres</p>
                    <p className="text-muted-foreground">{siteConfig.contact.address.street}</p>
                    <p className="text-muted-foreground">
                      {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                    </p>
                  </div>
                </a>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Openingstijden</p>
                    <p className="text-muted-foreground">{siteConfig.contact.openingHours.weekdays}</p>
                    <p className="text-muted-foreground">{siteConfig.contact.openingHours.weekend}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  src={siteConfig.contact.googleMapsEmbed}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locatie Advocatenkantoor Bissesur"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary mt-3 hover:underline"
              >
                Bekijk op Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-secondary rounded-lg p-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Stuur een Bericht
                </h2>
                <p className="text-muted-foreground mb-6">
                  Vul onderstaand formulier in en wij nemen zo spoedig mogelijk contact met u op.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="naam">Naam *</Label>
                      <Input
                        id="naam"
                        name="naam"
                        type="text"
                        required
                        maxLength={100}
                        value={formData.naam}
                        onChange={handleChange}
                        placeholder="Uw volledige naam"
                        className={`bg-background ${errors.naam ? "border-destructive" : ""}`}
                        aria-invalid={!!errors.naam}
                      />
                      {errors.naam && <p className="text-xs text-destructive">{errors.naam}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={255}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="uw@email.nl"
                        className={`bg-background ${errors.email ? "border-destructive" : ""}`}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefoon">Telefoon</Label>
                      <Input
                        id="telefoon"
                        name="telefoon"
                        type="tel"
                        maxLength={20}
                        pattern="[0-9+\-\s()]*"
                        value={formData.telefoon}
                        onChange={handleChange}
                        placeholder="Uw telefoonnummer"
                        className={`bg-background ${errors.telefoon ? "border-destructive" : ""}`}
                        aria-invalid={!!errors.telefoon}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="onderwerp">Onderwerp</Label>
                      <Input
                        id="onderwerp"
                        name="onderwerp"
                        type="text"
                        maxLength={200}
                        value={formData.onderwerp}
                        onChange={handleChange}
                        placeholder="Waar gaat het over?"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bericht">Bericht *</Label>
                    <Textarea
                      id="bericht"
                      name="bericht"
                      required
                      maxLength={5000}
                      value={formData.bericht}
                      onChange={handleChange}
                      placeholder="Beschrijf kort uw vraag of situatie..."
                      rows={5}
                      className={`bg-background resize-none ${errors.bericht ? "border-destructive" : ""}`}
                      aria-invalid={!!errors.bericht}
                    />
                    {errors.bericht && <p className="text-xs text-destructive">{errors.bericht}</p>}
                  </div>

                  <p className="text-xs text-muted-foreground">
                    * Verplichte velden. Door dit formulier te verzenden gaat u akkoord met onze{" "}
                    <a href="/algemene-voorwaarden" className="text-primary hover:underline">
                      algemene voorwaarden
                    </a>.
                  </p>

                  <Button type="submit" className="w-full btn-gold border-0">
                    <Send className="w-4 h-4 mr-2" />
                    Verstuur Bericht
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
