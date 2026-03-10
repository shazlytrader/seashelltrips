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

type Tour = Database["public"]["Tables"]["tours"]["Row"];
type TourInsert = Database["public"]["Tables"]["tours"]["Insert"];

const emptyTour: Partial<TourInsert> = {
  slug: "", category: "tour", title: "", short_desc: "", description: "",
  image: "", alt_text: "", price: "", price_note: "",
  highlights: [], program: [], featured: false, related_slugs: [], sort_order: 0, is_active: true,
};

const AdminTours = () => {
  const qc = useQueryClient();
  const [editing, setEditing] = useState<Partial<TourInsert> | null>(null);
  const [editId, setEditId] = useState<string | null>(null);
  const [hlText, setHlText] = useState("");
  const [progText, setProgText] = useState("");

  const { data: tours = [], isLoading } = useQuery({
    queryKey: ["admin-tours"],
    queryFn: async () => {
      const { data, error } = await supabase.from("tours").select("*").order("sort_order");
      if (error) throw error;
      return data as Tour[];
    },
  });

  const save = useMutation({
    mutationFn: async (tour: Partial<TourInsert> & { id?: string }) => {
      const { id, ...rest } = tour;
      if (id) {
        const { error } = await supabase.from("tours").update(rest).eq("id", id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("tours").insert(rest as TourInsert);
        if (error) throw error;
      }
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin-tours"] }); setEditing(null); setEditId(null); toast.success("Tour saved!"); },
    onError: (e) => toast.error(e.message),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("tours").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin-tours"] }); toast.success("Tour deleted"); },
    onError: (e) => toast.error(e.message),
  });

  const openEdit = (tour?: Tour) => {
    if (tour) {
      setEditId(tour.id);
      setEditing({ ...tour });
      setHlText((tour.highlights || []).join("\n"));
      setProgText((tour.program || []).join("\n"));
    } else {
      setEditId(null);
      setEditing({ ...emptyTour });
      setHlText("");
      setProgText("");
    }
  };

  const handleSave = () => {
    if (!editing) return;
    const data = {
      ...editing,
      highlights: hlText.split("\n").filter(Boolean),
      program: progText.split("\n").filter(Boolean),
      ...(editId ? { id: editId } : {}),
    };
    save.mutate(data);
  };

  if (isLoading) return <p>Loading tours...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Tours ({tours.length})</h2>
        <Button size="sm" onClick={() => openEdit()}><Plus className="w-4 h-4 mr-1" /> Add Tour</Button>
      </div>

      <div className="bg-card border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Category</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Featured</th>
              <th className="text-left p-3">Active</th>
              <th className="text-right p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tours.map(t => (
              <tr key={t.id} className="border-t">
                <td className="p-3 font-medium">{t.title}</td>
                <td className="p-3">{t.category}</td>
                <td className="p-3">{t.price}</td>
                <td className="p-3">{t.featured ? "⭐" : "—"}</td>
                <td className="p-3">{t.is_active ? "✓" : "✗"}</td>
                <td className="p-3 text-right space-x-1">
                  <Button variant="ghost" size="icon" onClick={() => openEdit(t)}><Pencil className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => { if (confirm("Delete this tour?")) remove.mutate(t.id); }}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={!!editing} onOpenChange={(o) => { if (!o) { setEditing(null); setEditId(null); } }}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editId ? "Edit Tour" : "Add Tour"}</DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Title</label>
                  <Input value={editing.title || ""} onChange={e => setEditing({ ...editing, title: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium">Slug</label>
                  <Input value={editing.slug || ""} onChange={e => setEditing({ ...editing, slug: e.target.value })} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={editing.category || "tour"} onChange={e => setEditing({ ...editing, category: e.target.value })}>
                    <option value="tour">Tour</option>
                    <option value="sea">Sea Trip</option>
                    <option value="safari">Safari</option>
                    <option value="transfer">Transfer</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Price</label>
                  <Input value={editing.price || ""} onChange={e => setEditing({ ...editing, price: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Price Note</label>
                <Input value={editing.price_note || ""} onChange={e => setEditing({ ...editing, price_note: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium">Short Description</label>
                <Textarea value={editing.short_desc || ""} onChange={e => setEditing({ ...editing, short_desc: e.target.value })} rows={2} />
              </div>
              <div>
                <label className="text-sm font-medium">Full Description</label>
                <Textarea value={editing.description || ""} onChange={e => setEditing({ ...editing, description: e.target.value })} rows={4} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Image Key</label>
                  <Input value={editing.image || ""} onChange={e => setEditing({ ...editing, image: e.target.value })} placeholder="e.g. dolphins, luxor-temple" />
                </div>
                <div>
                  <label className="text-sm font-medium">Alt Text</label>
                  <Input value={editing.alt_text || ""} onChange={e => setEditing({ ...editing, alt_text: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Highlights (one per line)</label>
                <Textarea value={hlText} onChange={e => setHlText(e.target.value)} rows={4} />
              </div>
              <div>
                <label className="text-sm font-medium">Program (one per line)</label>
                <Textarea value={progText} onChange={e => setProgText(e.target.value)} rows={5} />
              </div>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 text-sm">
                  <Switch checked={editing.featured || false} onCheckedChange={v => setEditing({ ...editing, featured: v })} /> Featured
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Switch checked={editing.is_active !== false} onCheckedChange={v => setEditing({ ...editing, is_active: v })} /> Active
                </label>
                <div className="flex items-center gap-2">
                  <label className="text-sm">Sort Order</label>
                  <Input type="number" className="w-20" value={editing.sort_order || 0} onChange={e => setEditing({ ...editing, sort_order: parseInt(e.target.value) || 0 })} />
                </div>
              </div>
              <Button onClick={handleSave} disabled={save.isPending}>{save.isPending ? "Saving..." : "Save Tour"}</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminTours;
