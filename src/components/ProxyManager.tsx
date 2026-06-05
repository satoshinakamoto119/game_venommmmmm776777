
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Plus, Trash2, RefreshCw, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ProxyManager = () => {
  const [newProxy, setNewProxy] = useState("");
  const [bulkProxies, setBulkProxies] = useState("");
  const { toast } = useToast();

  const proxies = [
    { id: 1, ip: "192.168.1.1", port: "8080", country: "الولايات المتحدة", status: "active", speed: "250ms" },
    { id: 2, ip: "192.168.1.2", port: "8080", country: "ألمانيا", status: "active", speed: "180ms" },
    { id: 3, ip: "192.168.1.3", port: "8080", country: "فرنسا", status: "failed", speed: "timeout" },
    { id: 4, ip: "192.168.1.4", port: "8080", country: "كندا", status: "active", speed: "320ms" },
    { id: 5, ip: "192.168.1.5", port: "8080", country: "اليابان", status: "testing", speed: "testing..." },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500/10 text-green-400 border border-green-500/20">نشط</Badge>;
      case "failed":
        return <Badge variant="destructive">معطل</Badge>;
      case "testing":
        return <Badge variant="secondary">جاري الاختبار</Badge>;
      default:
        return <Badge variant="outline">غير محدد</Badge>;
    }
  };

  const addProxy = () => {
    if (newProxy.trim()) {
      toast({
        title: "تم إضافة البروكسي",
        description: `تم إضافة ${newProxy} بنجاح`,
      });
      setNewProxy("");
    }
  };

  const addBulkProxies = () => {
    if (bulkProxies.trim()) {
      const proxyList = bulkProxies.split('\n').filter(p => p.trim());
      toast({
        title: "تم إضافة البروكسيات",
        description: `تم إضافة ${proxyList.length} بروكسي بنجاح`,
      });
      setBulkProxies("");
    }
  };

  const testAllProxies = () => {
    toast({
      title: "بدء اختبار البروكسيات",
      description: "جاري اختبار جميع البروكسيات...",
    });
  };

  return (
    <div className="space-y-6">
      {/* Add Proxy Section */}
      <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5 text-primary" />
            إضافة بروكسي جديد
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="IP:Port (مثال: 192.168.1.1:8080)"
              value={newProxy}
              onChange={(e) => setNewProxy(e.target.value)}
              className="flex-1 bg-muted/30 border-border/40"
            />
            <Button onClick={addProxy} className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 ml-2" />
              إضافة
            </Button>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">إضافة متعددة (سطر لكل بروكسي)</label>
            <Textarea
              placeholder="192.168.1.1:8080&#10;192.168.1.2:8080&#10;192.168.1.3:8080"
              value={bulkProxies}
              onChange={(e) => setBulkProxies(e.target.value)}
              rows={4}
              className="bg-muted/30 border-border/40"
            />
            <Button onClick={addBulkProxies} className="w-full">
              <Upload className="h-4 w-4 ml-2" />
              إضافة جميع البروكسيات
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Proxy List */}
      <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              قائمة البروكسيات
            </span>
            <Button onClick={testAllProxies} variant="outline" className="border-border/60">
              <RefreshCw className="h-4 w-4 ml-2" />
              اختبار الكل
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {proxies.map((proxy) => (
              <div
                key={proxy.id}
                className="p-4 rounded-lg border border-border/40 bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-medium text-foreground">
                      {proxy.ip}:{proxy.port}
                    </span>
                    {getStatusBadge(proxy.status)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <RefreshCw className="h-3.5 w-3.5" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive hover:text-destructive">
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div>
                    <span className="font-medium text-foreground/70">الدولة:</span> {proxy.country}
                  </div>
                  <div>
                    <span className="font-medium text-foreground/70">السرعة:</span>{" "}
                    <span className={proxy.speed === "timeout" ? "text-destructive" : "text-green-400"}>
                      {proxy.speed}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
