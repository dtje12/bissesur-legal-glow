import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import AboutPreview from "@/components/home/AboutPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <AboutPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
