
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Download, Eye, CheckCircle, XCircle, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AccountsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const accounts = [
    {
      id: 1,
      email: "ahmed.ali@tempmail.com",
      name: "أحمد علي محمد",
      country: "الجزائر", 
      passport: "DZ123456789",
      status: "active",
      createdAt: "2024-01-15 14:30",
      proxy: "192.168.1.1:8080",
    },
    {
      id: 2,
      email: "fatima.salem@tempmail.com",
      name: "فاطمة سالم",
      country: "المغرب",
      passport: "MA987654321", 
      status: "pending",
      createdAt: "2024-01-15 13:15",
      proxy: "192.168.1.2:8080",
    },
    {
      id: 3,
      email: "mohamed.ahmed@tempmail.com",
      name: "محمد الأحمد",
      country: "تونس",
      passport: "TN456789123",
      status: "failed",
      createdAt: "2024-01-15 12:45",
      proxy: "192.168.1.3:8080",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            مفعل
          </Badge>
        );
      case "pending":
        return <Badge variant="secondary">في الانتظار</Badge>;
      case "failed":
        return (
          <Badge variant="destructive">
            <XCircle className="h-3 w-3 mr-1" />
            فشل
          </Badge>
        );
      default:
        return <Badge variant="outline">غير محدد</Badge>;
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "تم النسخ",
      description: "تم نسخ النص إلى الحافظة",
    });
  };

  const filteredAccounts = accounts.filter(
    (account) =>
      account.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>قائمة الحسابات المسجلة</span>
          <Button className="bg-green-600 hover:bg-green-700">
            <Download className="h-4 w-4 mr-2" />
            تصدير CSV
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="البحث في الحسابات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredAccounts.map((account) => (
            <div
              key={account.id}
              className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-medium">{account.name}</span>
                  {getStatusBadge(account.status)}
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(account.email)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-gray-600">
                <div>
                  <span className="font-medium">البريد الإلكتروني:</span>
                  <div>{account.email}</div>
                </div>
                <div>
                  <span className="font-medium">الدولة:</span>
                  <div>{account.country}</div>
                </div>
                <div>
                  <span className="font-medium">رقم الجواز:</span>
                  <div className="font-mono">{account.passport}</div>
                </div>
                <div>
                  <span className="font-medium">تاريخ الإنشاء:</span>
                  <div>{account.createdAt}</div>
                </div>
              </div>

              <div className="mt-2 text-xs text-gray-500">
                <span className="font-medium">البروكسي المستخدم:</span> {account.proxy}
              </div>
            </div>
          ))}
        </div>

        {filteredAccounts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Search className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>لم يتم العثور على حسابات مطابقة</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
