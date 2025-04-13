
import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import StatsSection from '../components/home/StatsSection';
import ProductCategoriesSection from '../components/home/ProductCategoriesSection';
import ServicesSection from '../components/home/ServicesSection';
import CTASection from '../components/home/CTASection';

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProductCategoriesSection />
      <ServicesSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
