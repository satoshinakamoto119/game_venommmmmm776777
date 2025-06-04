
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Download, Eye, Trash2, RefreshCw } from "lucide-react";

export const AccountsList = () => {
  const accounts = [
    { 
      id: 1, 
      email: "ahmed.ali@tempmail.com", 
      password: "SecurePass123!", 
      country: "الجزائر", 
      status: "active", 
      created: "2024-01-15 14:30",
      lastLogin: "2024-01-20 09:15"
    },
    { 
      id: 2, 
      email: "fatima.salem@1secmail.org", 
      password: "MyPass456#", 
      country: "المغرب", 
      status: "active", 
      created: "2024-01-15 13:25",
      lastLogin: "2024-01-19 16:20"
    },
    { 
      id: 3, 
      email: "mohamed.hassan@guerrillamail.com", 
      password: "StrongPass789$", 
      country: "تونس", 
      status: "suspended", 
      created: "2024-01-15 12:20",
      lastLogin: "2024-01-18 11:30"
    },
    { 
      id: 4, 
      email: "zeinab.ahmed@tempmail.io", 
      password: "ComplexPass101@", 
      country: "مصر", 
      status: "inactive", 
      created: "2024-01-15 11:15",
      lastLogin: "2024-01-17 14:45"
    },
    { 
      id: 5, 
      email: "youssef.karim@temp-mail.org", 
      password: "SecretPass202!", 
      country: "الأردن", 
      status: "active", 
      created: "2024-01-15 10:10",
      lastLogin: "2024-01-21 08:00"
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">نشط</Badge>;
      case "inactive":
        return <Badge variant="secondary">غير نشط</Badge>;
      case "suspended":
        return <Badge variant="destructive">معلق</Badge>;
      default:
        return <Badge variant="outline">غير محدد</Badge>;
    }
  };

  const exportAccounts = () => {
    console.log("تصدير الحسابات...");
  };

  return (
    <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            الحسابات المسجلة ({accounts.length} حساب)
          </span>
          <Button onClick={exportAccounts} className="bg-blue-600 hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            تصدير CSV
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {accounts.map((account) => (
            <div
              key={account.id}
              className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-medium">{account.email}</span>
                  {getStatusBadge(account.status)}
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-gray-600">
                <div>
                  <span className="font-medium">كلمة المرور:</span> 
                  <span className="font-mono ml-1">{"*".repeat(8)}</span>
                </div>
                <div>
                  <span className="font-medium">الدولة:</span> {account.country}
                </div>
                <div>
                  <span className="font-medium">تاريخ الإنشاء:</span> {account.created}
                </div>
                <div>
                  <span className="font-medium">آخر دخول:</span> {account.lastLogin}
                </div>
              </div>
            </div>
          ))}
        </div>

        {accounts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Database className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>لم يتم تسجيل أي حسابات بعد</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
