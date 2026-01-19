import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OverOns from "./pages/OverOns";
import Rechtsgebieden from "./pages/Rechtsgebieden";
import Tarieven from "./pages/Tarieven";
import Contact from "./pages/Contact";
import Klachtenregeling from "./pages/Klachtenregeling";
import AlgemeneVoorwaarden from "./pages/AlgemeneVoorwaarden";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/rechtsgebieden" element={<Rechtsgebieden />} />
          <Route path="/tarieven" element={<Tarieven />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/klachtenregeling" element={<Klachtenregeling />} />
          <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
