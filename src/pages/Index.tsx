import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import OfficeInfo from "@/components/home/OfficeInfo";
import Services from "@/components/home/Services";
import AboutPreview from "@/components/home/AboutPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <OfficeInfo />
      <Services />
      <AboutPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
