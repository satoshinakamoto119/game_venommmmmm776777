
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
        return <Badge className="bg-green-100 text-green-800">نشط</Badge>;
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
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            إضافة بروكسي جديد
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="IP:Port (مثال: 192.168.1.1:8080)"
              value={newProxy}
              onChange={(e) => setNewProxy(e.target.value)}
              className="flex-1"
            />
            <Button onClick={addProxy}>
              <Plus className="h-4 w-4 mr-2" />
              إضافة
            </Button>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">إضافة متعددة (سطر لكل بروكسي)</label>
            <Textarea
              placeholder="192.168.1.1:8080&#10;192.168.1.2:8080&#10;192.168.1.3:8080"
              value={bulkProxies}
              onChange={(e) => setBulkProxies(e.target.value)}
              rows={4}
            />
            <Button onClick={addBulkProxies} className="w-full">
              <Upload className="h-4 w-4 mr-2" />
              إضافة جميع البروكسيات
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Proxy List */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              قائمة البروكسيات
            </span>
            <Button onClick={testAllProxies} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              اختبار الكل
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {proxies.map((proxy) => (
              <div
                key={proxy.id}
                className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-medium">
                      {proxy.ip}:{proxy.port}
                    </span>
                    {getStatusBadge(proxy.status)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">الدولة:</span> {proxy.country}
                  </div>
                  <div>
                    <span className="font-medium">السرعة:</span> {proxy.speed}
                  </div>
                  <div>
                    <span className="font-medium">الحالة:</span> {proxy.status}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {proxies.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Globe className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>لم يتم إضافة أي بروكسي بعد</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
