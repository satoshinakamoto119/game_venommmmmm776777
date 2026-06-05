
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Globe, Shield, Mail, MessageCircle } from "lucide-react";

export const SettingsPanel = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5 bg-card/80 backdrop-blur-sm border border-border/60 p-1">
          <TabsTrigger value="general">عام</TabsTrigger>
          <TabsTrigger value="proxy">البروكسي</TabsTrigger>
          <TabsTrigger value="captcha">الكابتشا</TabsTrigger>
          <TabsTrigger value="email">البريد</TabsTrigger>
          <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                الإعدادات العامة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="max-accounts">عدد الحسابات القصوى</Label>
                  <Input id="max-accounts" type="number" defaultValue="100" className="bg-muted/30 border-border/40" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="delay">التأخير بين المحاولات (ثانية)</Label>
                  <Input id="delay" type="number" defaultValue="5" className="bg-muted/30 border-border/40" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="target-country">الدولة المستهدفة</Label>
                <Select defaultValue="algeria">
                  <SelectTrigger className="bg-muted/30 border-border/40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="algeria">الجزائر</SelectItem>
                    <SelectItem value="morocco">المغرب</SelectItem>
                    <SelectItem value="tunisia">تونس</SelectItem>
                    <SelectItem value="egypt">مصر</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/40">
                <div className="space-y-0.5">
                  <Label>تفعيل وضع التصحيح</Label>
                  <p className="text-sm text-muted-foreground">عرض معلومات مفصلة في السجل</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/40">
                <div className="space-y-0.5">
                  <Label>حفظ لقطات الشاشة</Label>
                  <p className="text-sm text-muted-foreground">التقاط صور عند الأخطاء</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="proxy">
          <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                إعدادات البروكسي
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/40">
                <div className="space-y-0.5">
                  <Label>تفعيل البروكسي</Label>
                  <p className="text-sm text-muted-foreground">استخدام البروكسي للاتصال</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="proxy-rotation">فترة دوران البروكسي</Label>
                <Select defaultValue="every-request">
                  <SelectTrigger className="bg-muted/30 border-border/40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="every-request">مع كل طلب</SelectItem>
                    <SelectItem value="every-5-min">كل 5 دقائق</SelectItem>
                    <SelectItem value="every-hour">كل ساعة</SelectItem>
                    <SelectItem value="manual">يدوياً</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="proxy-timeout">مهلة انتظار البروكسي (ثانية)</Label>
                <Input id="proxy-timeout" type="number" defaultValue="30" className="bg-muted/30 border-border/40" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/40">
                <div className="space-y-0.5">
                  <Label>فحص البروكسي تلقائياً</Label>
                  <p className="text-sm text-muted-foreground">اختبار البروكسيات قبل الاستخدام</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="captcha">
          <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                إعدادات الكابتشا
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="captcha-service">خدمة حل الكابتشا</Label>
                <Select defaultValue="2captcha">
                  <SelectTrigger className="bg-muted/30 border-border/40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2captcha">2Captcha</SelectItem>
                    <SelectItem value="anticaptcha">AntiCaptcha</SelectItem>
                    <SelectItem value="capmonster">CapMonster</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="captcha-api-key">مفتاح API</Label>
                <Input id="captcha-api-key" type="password" placeholder="أدخل مفتاح API" className="bg-muted/30 border-border/40" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="captcha-timeout">مهلة انتظار الكابتشا (ثانية)</Label>
                <Input id="captcha-timeout" type="number" defaultValue="120" className="bg-muted/30 border-border/40" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/40">
                <div className="space-y-0.5">
                  <Label>إعادة المحاولة عند الفشل</Label>
                  <p className="text-sm text-muted-foreground">محاولة حل الكابتشا مرة أخرى</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email">
          <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                إعدادات البريد الإلكتروني
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email-service">خدمة البريد المؤقت</Label>
                <Select defaultValue="tempmail">
                  <SelectTrigger className="bg-muted/30 border-border/40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tempmail">TempMail</SelectItem>
                    <SelectItem value="1secmail">1SecMail</SelectItem>
                    <SelectItem value="guerrillamail">GuerrillaMail</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-domain">نطاق البريد المفضل</Label>
                <Input id="email-domain" placeholder="مثال: @tempmail.com" className="bg-muted/30 border-border/40" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-check-interval">فترة فحص البريد (ثانية)</Label>
                <Input id="email-check-interval" type="number" defaultValue="30" className="bg-muted/30 border-border/40" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/40">
                <div className="space-y-0.5">
                  <Label>تفعيل التلقائي</Label>
                  <p className="text-sm text-muted-foreground">تفعيل الحسابات تلقائياً عبر البريد</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="border-border/60 bg-card/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                إعدادات الإشعارات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="telegram-token">رمز بوت تلغرام</Label>
                <Input id="telegram-token" type="password" placeholder="أدخل رمز البوت" className="bg-muted/30 border-border/40" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telegram-chat-id">معرف الدردشة</Label>
                <Input id="telegram-chat-id" placeholder="أدخل معرف الدردشة" className="bg-muted/30 border-border/40" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/40">
                <div className="space-y-0.5">
                  <Label>إشعارات النجاح</Label>
                  <p className="text-sm text-muted-foreground">إرسال إشعار عند نجاح التسجيل</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/40">
                <div className="space-y-0.5">
                  <Label>إشعارات الفشل</Label>
                  <p className="text-sm text-muted-foreground">إرسال إشعار عند فشل التسجيل</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/40">
                <div className="space-y-0.5">
                  <Label>ملخص يومي</Label>
                  <p className="text-sm text-muted-foreground">إرسال ملخص يومي للعمليات</p>
                </div>
                <Switch />
              </div>

              <Button className="w-full">
                حفظ الإعدادات
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
