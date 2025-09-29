import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IkanBakar from "./pages/IkanBakar";
import AyamBakar from "./pages/AyamBakar";
import Seafood from "./pages/Seafood";
import Steamboat from "./pages/Steamboat";
import Minuman from "./pages/Minuman";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ikan-bakar" element={<IkanBakar />} />
          <Route path="/ayam-bakar" element={<AyamBakar />} />
          <Route path="/seafood" element={<Seafood />} />
          <Route path="/steamboat" element={<Steamboat />} />
          <Route path="/minuman" element={<Minuman />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
