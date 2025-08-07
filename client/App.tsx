import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MSMEDashboard from "./pages/MSMEDashboard";
import MSMESignup from "./pages/MSMESignup";
import BuyerSignup from "./pages/BuyerSignup";
import BuyerDashboard from "./pages/BuyerDashboard";
import CreateTender from "./pages/CreateTender";
import ViewApplicants from "./pages/ViewApplicants";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* MSME Routes */}
          <Route path="/msme/signup" element={<MSMESignup />} />
          <Route path="/msme/dashboard" element={<MSMEDashboard />} />

          {/* Buyer Routes */}
          <Route path="/buyer/signup" element={<BuyerSignup />} />
          <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
          <Route path="/buyer/create-tender" element={<CreateTender />} />
          <Route path="/buyer/applicants/:tenderId" element={<ViewApplicants />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
