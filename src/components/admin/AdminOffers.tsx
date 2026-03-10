import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Plus, Pencil, Trash2 } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type Offer = Database["public"]["Tables"]["special_offers"]["Row"];

const AdminOffers = () => {
  const qc = useQueryClient();
  const [editing, setEditing] = useState<Partial<Offer> | null>(null);

  const { data: offers = [], isLoading } = useQuery({
    queryKey: ["admin-offers"],
    queryFn: async () => {
      const { data, error } = await supabase.from("special_offers").select("*").order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  const save = useMutation({
    mutationFn: async (o: Partial<Offer>) => {
      const { id, created_at, updated_at, ...rest } = o as any;
      if (id && offers.find(of => of.id === id)) {
        const { error } = await supabase.from("special_offers").update(rest).eq("id", id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("special_offers").insert(rest);
        if (error) throw error;
      }
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin-offers"] }); setEditing(null); toast.success("Offer saved!"); },
    onError: (e) => toast.error(e.message),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("special_offers").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin-offers"] }); toast.success("Offer deleted"); },
    onError: (e) => toast.error(e.message),
  });

  if (isLoading) return <p>Loading offers...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Special Offers ({offers.length})</h2>
        <Button size="sm" onClick={() => setEditing({ title: "", description: "", discount: "", valid: "", is_active: true, sort_order: 0 })}>
          <Plus className="w-4 h-4 mr-1" /> Add Offer
        </Button>
      </div>

      <div className="bg-card border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Discount</th>
              <th className="text-left p-3">Valid</th>
              <th className="text-left p-3">Active</th>
              <th className="text-right p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {offers.map(o => (
              <tr key={o.id} className="border-t">
                <td className="p-3 font-medium">{o.title}</td>
                <td className="p-3">{o.discount}</td>
                <td className="p-3">{o.valid}</td>
                <td className="p-3">{o.is_active ? "✓" : "✗"}</td>
                <td className="p-3 text-right space-x-1">
                  <Button variant="ghost" size="icon" onClick={() => setEditing({ ...o })}><Pencil className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => { if (confirm("Delete?")) remove.mutate(o.id); }}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={!!editing} onOpenChange={(o) => { if (!o) setEditing(null); }}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editing?.id ? "Edit Offer" : "Add Offer"}</DialogTitle></DialogHeader>
          {editing && (
            <div className="grid gap-4">
              <div><label className="text-sm font-medium">Title</label><Input value={editing.title || ""} onChange={e => setEditing({ ...editing, title: e.target.value })} /></div>
              <div><label className="text-sm font-medium">Description</label><Textarea value={editing.description || ""} onChange={e => setEditing({ ...editing, description: e.target.value })} rows={3} /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-sm font-medium">Discount</label><Input value={editing.discount || ""} onChange={e => setEditing({ ...editing, discount: e.target.value })} placeholder="e.g. 15% OFF" /></div>
                <div><label className="text-sm font-medium">Valid Until</label><Input value={editing.valid || ""} onChange={e => setEditing({ ...editing, valid: e.target.value })} /></div>
              </div>
              <label className="flex items-center gap-2 text-sm"><Switch checked={editing.is_active !== false} onCheckedChange={v => setEditing({ ...editing, is_active: v })} /> Active</label>
              <Button onClick={() => save.mutate(editing)} disabled={save.isPending}>{save.isPending ? "Saving..." : "Save Offer"}</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminOffers;
