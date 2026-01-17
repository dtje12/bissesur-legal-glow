import { z } from "zod";

// Sanitize string to prevent XSS
export const sanitizeString = (input: string): string => {
  return input
    .replace(/[<>]/g, "") // Remove angle brackets
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, "") // Remove event handlers
    .trim();
};

// Contact form validation schema
export const contactFormSchema = z.object({
  naam: z
    .string()
    .min(1, "Naam is verplicht")
    .max(100, "Naam mag maximaal 100 tekens bevatten")
    .transform(sanitizeString),
  email: z
    .string()
    .min(1, "Email is verplicht")
    .email("Ongeldig emailadres")
    .max(255, "Email mag maximaal 255 tekens bevatten")
    .transform((val) => val.trim().toLowerCase()),
  telefoon: z
    .string()
    .max(20, "Telefoonnummer mag maximaal 20 tekens bevatten")
    .regex(/^[0-9+\-\s()]*$/, "Ongeldig telefoonnummer")
    .optional()
    .transform((val) => val?.trim() || ""),
  onderwerp: z
    .string()
    .max(200, "Onderwerp mag maximaal 200 tekens bevatten")
    .optional()
    .transform((val) => sanitizeString(val || "")),
  bericht: z
    .string()
    .min(1, "Bericht is verplicht")
    .max(5000, "Bericht mag maximaal 5000 tekens bevatten")
    .transform(sanitizeString),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Safely encode URL parameters
export const safeEncodeURIComponent = (str: string): string => {
  const sanitized = sanitizeString(str);
  return encodeURIComponent(sanitized);
};
