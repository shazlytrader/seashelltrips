import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAdmin } from "@/hooks/useAdmin";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Map, Star, Gift, Settings } from "lucide-react";
import AdminTours from "@/components/admin/AdminTours";
import AdminReviews from "@/components/admin/AdminReviews";
import AdminOffers from "@/components/admin/AdminOffers";

const Admin = () => {
  const { user, isAdmin, loading } = useAdmin();
  const [tab, setTab] = useState("tours");

  if (loading) return <div className="min-h-screen flex items-center justify-center pt-16"><p>Loading...</p></div>;
  if (!user || !isAdmin) return <Navigate to="/admin/login" replace />;

  return (
    <div className="min-h-screen bg-muted/30 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">Manage your tours, reviews, and offers</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => supabase.auth.signOut()}>
            <LogOut className="w-4 h-4 mr-2" /> Sign Out
          </Button>
        </div>

        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="tours"><Map className="w-4 h-4 mr-1.5" /> Tours</TabsTrigger>
            <TabsTrigger value="reviews"><Star className="w-4 h-4 mr-1.5" /> Reviews</TabsTrigger>
            <TabsTrigger value="offers"><Gift className="w-4 h-4 mr-1.5" /> Offers</TabsTrigger>
          </TabsList>
          <TabsContent value="tours"><AdminTours /></TabsContent>
          <TabsContent value="reviews"><AdminReviews /></TabsContent>
          <TabsContent value="offers"><AdminOffers /></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
