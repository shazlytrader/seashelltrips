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

type Review = Database["public"]["Tables"]["reviews"]["Row"];

const AdminReviews = () => {
  const qc = useQueryClient();
  const [editing, setEditing] = useState<Partial<Review> | null>(null);

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["admin-reviews"],
    queryFn: async () => {
      const { data, error } = await supabase.from("reviews").select("*").order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  const save = useMutation({
    mutationFn: async (r: Partial<Review>) => {
      const { id, created_at, updated_at, ...rest } = r as any;
      if (id && reviews.find(rv => rv.id === id)) {
        const { error } = await supabase.from("reviews").update(rest).eq("id", id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("reviews").insert(rest);
        if (error) throw error;
      }
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin-reviews"] }); setEditing(null); toast.success("Review saved!"); },
    onError: (e) => toast.error(e.message),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("reviews").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin-reviews"] }); toast.success("Review deleted"); },
    onError: (e) => toast.error(e.message),
  });

  if (isLoading) return <p>Loading reviews...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Reviews ({reviews.length})</h2>
        <Button size="sm" onClick={() => setEditing({ name: "", country: "", rating: 5, text: "", type: "couple", is_active: true, sort_order: 0 })}>
          <Plus className="w-4 h-4 mr-1" /> Add Review
        </Button>
      </div>

      <div className="bg-card border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Country</th>
              <th className="text-left p-3">Rating</th>
              <th className="text-left p-3">Active</th>
              <th className="text-right p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map(r => (
              <tr key={r.id} className="border-t">
                <td className="p-3 font-medium">{r.name}</td>
                <td className="p-3">{r.country}</td>
                <td className="p-3">{"⭐".repeat(r.rating)}</td>
                <td className="p-3">{r.is_active ? "✓" : "✗"}</td>
                <td className="p-3 text-right space-x-1">
                  <Button variant="ghost" size="icon" onClick={() => setEditing({ ...r })}><Pencil className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => { if (confirm("Delete?")) remove.mutate(r.id); }}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={!!editing} onOpenChange={(o) => { if (!o) setEditing(null); }}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editing?.id ? "Edit Review" : "Add Review"}</DialogTitle></DialogHeader>
          {editing && (
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-sm font-medium">Name</label><Input value={editing.name || ""} onChange={e => setEditing({ ...editing, name: e.target.value })} /></div>
                <div><label className="text-sm font-medium">Country</label><Input value={editing.country || ""} onChange={e => setEditing({ ...editing, country: e.target.value })} /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-sm font-medium">Rating</label><Input type="number" min={1} max={5} value={editing.rating || 5} onChange={e => setEditing({ ...editing, rating: parseInt(e.target.value) || 5 })} /></div>
                <div><label className="text-sm font-medium">Type</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={editing.type || "couple"} onChange={e => setEditing({ ...editing, type: e.target.value })}>
                    <option value="couple">Couple</option><option value="family">Family</option><option value="group">Group</option><option value="solo">Solo</option>
                  </select>
                </div>
              </div>
              <div><label className="text-sm font-medium">Review Text</label><Textarea value={editing.text || ""} onChange={e => setEditing({ ...editing, text: e.target.value })} rows={4} /></div>
              <label className="flex items-center gap-2 text-sm"><Switch checked={editing.is_active !== false} onCheckedChange={v => setEditing({ ...editing, is_active: v })} /> Active</label>
              <Button onClick={() => save.mutate(editing)} disabled={save.isPending}>{save.isPending ? "Saving..." : "Save Review"}</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminReviews;
