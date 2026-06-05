
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Play, Eye, Settings, Globe, ArrowRight, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const API = () => {
  const [apiKey, setApiKey] = useState("bls_sk_1234567890abcdef");
  const [endpoint, setEndpoint] = useState("https://api.blsauto.com/v1");
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "تم النسخ",
      description: "تم نسخ الكود إلى الحافظة",
    });
  };

  const endpoints = [
    {
      method: "POST",
      path: "/registration/start",
      description: "بدء عملية تسجيل جديدة",
      params: ["country", "email_count", "proxy_pool"]
    },
    {
      method: "GET", 
      path: "/registration/status/{id}",
      description: "فحص حالة عملية التسجيل",
      params: ["id"]
    },
    {
      method: "GET",
      path: "/accounts",
      description: "جلب قائمة الحسابات المسجلة",
      params: ["limit", "offset", "status"]
    },
    {
      method: "POST",
      path: "/proxy/add",
      description: "إضافة بروكسي جديد",
      params: ["ip", "port", "username", "password"]
    },
    {
      method: "GET",
      path: "/stats",
      description: "جلب إحصائيات النظام",
      params: []
    }
  ];

  const codeExamples = {
    python: `import requests

# إعداد API
API_KEY = "${apiKey}"
BASE_URL = "${endpoint}"
headers = {"Authorization": f"Bearer {API_KEY}"}

# بدء عملية تسجيل جديدة
response = requests.post(f"{BASE_URL}/registration/start", 
    headers=headers,
    json={
        "country": "DZ",
        "email_count": 5,
        "proxy_pool": "auto"
    }
)

registration_id = response.json()["id"]
print(f"تم بدء التسجيل: {registration_id}")

# فحص الحالة
status = requests.get(f"{BASE_URL}/registration/status/{registration_id}", 
    headers=headers
)
print(status.json())`,

    javascript: `const API_KEY = "${apiKey}";
const BASE_URL = "${endpoint}";

const headers = {
    "Authorization": \`Bearer \${API_KEY}\`,
    "Content-Type": "application/json"
};

// بدء عملية تسجيل جديدة
async function startRegistration() {
    const response = await fetch(\`\${BASE_URL}/registration/start\`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            country: "DZ",
            email_count: 5,
            proxy_pool: "auto"
        })
    });
    
    const data = await response.json();
    console.log("تم بدء التسجيل:", data.id);
    return data.id;
}

// فحص الحالة
async function checkStatus(registrationId) {
    const response = await fetch(\`\${BASE_URL}/registration/status/\${registrationId}\`, {
        headers: headers
    });
    
    const status = await response.json();
    console.log(status);
}`,

    curl: `# بدء عملية تسجيل جديدة
curl -X POST "${endpoint}/registration/start" \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "country": "DZ",
    "email_count": 5,
    "proxy_pool": "auto"
  }'

# فحص حالة التسجيل
curl -X GET "${endpoint}/registration/status/123" \\
  -H "Authorization: Bearer ${apiKey}"

# جلب الحسابات
curl -X GET "${endpoint}/accounts?limit=10" \\
  -H "Authorization: Bearer ${apiKey}"`
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-card/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">واجهة برمجة التطبيقات</h1>
              <p className="text-xs text-muted-foreground">REST API لنظام BLS التلقائي</p>
            </div>
          </div>
          <Link to="/">
            <Button variant="outline" size="sm" className="gap-1.5">
              <ArrowRight className="h-3.5 w-3.5" />
              العودة للرئيسية
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {/* API Configuration */}
        <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              إعدادات API
            </CardTitle>
            <CardDescription>
              مفتاح API الخاص بك ونقطة النهاية الأساسية
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">مفتاح API</label>
                <div className="flex gap-2">
                  <Input
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="font-mono bg-muted/30 border-border/40"
                  />
                  <Button onClick={() => copyToClipboard(apiKey)} variant="outline" className="border-border/60">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">نقطة النهاية الأساسية</label>
                <div className="flex gap-2">
                  <Input
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    className="font-mono bg-muted/30 border-border/40"
                  />
                  <Button onClick={() => copyToClipboard(endpoint)} variant="outline" className="border-border/60">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Documentation */}
        <Tabs defaultValue="endpoints" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card/80 backdrop-blur-sm border border-border/60 h-12 p-1">
            <TabsTrigger value="endpoints" className="gap-2">
              <Globe className="h-4 w-4" />
              نقاط النهاية
            </TabsTrigger>
            <TabsTrigger value="python" className="gap-2">
              Python
            </TabsTrigger>
            <TabsTrigger value="javascript" className="gap-2">
              JavaScript
            </TabsTrigger>
            <TabsTrigger value="curl" className="gap-2">
              cURL
            </TabsTrigger>
          </TabsList>

          <TabsContent value="endpoints">
            <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle>نقاط النهاية المتاحة</CardTitle>
                <CardDescription>جميع API endpoints المدعومة في النظام</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {endpoints.map((ep, index) => (
                    <div key={index} className="border border-border/40 rounded-lg p-4 bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <Badge variant={ep.method === "GET" ? "default" : "secondary"}>
                            {ep.method}
                          </Badge>
                          <code className="font-mono text-sm text-foreground">{ep.path}</code>
                        </div>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-muted-foreground mb-2">{ep.description}</p>
                      {ep.params.length > 0 && (
                        <div className="text-sm">
                          <span className="font-medium text-foreground/70">المعاملات:</span>
                          <span className="mr-2 text-muted-foreground">
                            {ep.params.join(", ")}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="python">
            <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  مثال Python
                  <Button onClick={() => copyToClipboard(codeExamples.python)} variant="outline" className="border-border/60">
                    <Copy className="h-4 w-4 ml-2" />
                    نسخ الكود
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm border border-slate-700">
                  <code>{codeExamples.python}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="javascript">
            <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  مثال JavaScript
                  <Button onClick={() => copyToClipboard(codeExamples.javascript)} variant="outline" className="border-border/60">
                    <Copy className="h-4 w-4 ml-2" />
                    نسخ الكود
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-slate-900 text-yellow-400 p-4 rounded-lg overflow-x-auto text-sm border border-slate-700">
                  <code>{codeExamples.javascript}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="curl">
            <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  مثال cURL
                  <Button onClick={() => copyToClipboard(codeExamples.curl)} variant="outline" className="border-border/60">
                    <Copy className="h-4 w-4 ml-2" />
                    نسخ الكود
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-slate-900 text-blue-400 p-4 rounded-lg overflow-x-auto text-sm border border-slate-700">
                  <code>{codeExamples.curl}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* API Testing */}
        <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5 text-primary" />
              اختبار API
            </CardTitle>
            <CardDescription>
              اختبر نقاط النهاية مباشرة من هذه الواجهة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">طلب JSON</label>
                <Textarea
                  placeholder='{"country": "DZ", "email_count": 5}'
                  rows={4}
                  className="font-mono text-sm bg-muted/30 border-border/40"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">الاستجابة</label>
                <Textarea
                  value='{"id": "reg_123", "status": "started", "message": "تم بدء التسجيل بنجاح"}'
                  readOnly
                  rows={4}
                  className="font-mono text-sm bg-muted/30 border-border/40"
                />
              </div>
            </div>
            <Button className="w-full">
              <Play className="h-4 w-4 ml-2" />
              إرسال الطلب
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default API;
