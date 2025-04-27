
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"; // Explicitly import React
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/products/ProductDetail";
import NotFound from "./pages/NotFound";

// Create a new QueryClient instance inside the component
const App = () => {
  // Create a new client for each component instance
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/products/:category/:id" element={<ProductDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
