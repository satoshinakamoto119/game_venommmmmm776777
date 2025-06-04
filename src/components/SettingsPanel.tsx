
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Globe, Shield, Mail, MessageCircle, Zap } from "lucide-react";

export const SettingsPanel = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5 bg-white/90 backdrop-blur-lg">
          <TabsTrigger value="general">عام</TabsTrigger>
          <TabsTrigger value="proxy">البروكسي</TabsTrigger>
          <TabsTrigger value="captcha">الكابتشا</TabsTrigger>
          <TabsTrigger value="email">البريد</TabsTrigger>
          <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                الإعدادات العامة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="max-accounts">عدد الحسابات القصوى</Label>
                  <Input id="max-accounts" type="number" defaultValue="100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="delay">التأخير بين المحاولات (ثانية)</Label>
                  <Input id="delay" type="number" defaultValue="5" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="target-country">الدولة المستهدفة</Label>
                <Select defaultValue="algeria">
                  <SelectTrigger>
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

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>تفعيل وضع التصحيح</Label>
                  <p className="text-sm text-gray-500">عرض معلومات مفصلة في السجل</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>حفظ لقطات الشاشة</Label>
                  <p className="text-sm text-gray-500">التقاط صور عند الأخطاء</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="proxy">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                إعدادات البروكسي
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>تفعيل البروكسي</Label>
                  <p className="text-sm text-gray-500">استخدام البروكسي للاتصال</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="proxy-rotation">فترة دوران البروكسي</Label>
                <Select defaultValue="every-request">
                  <SelectTrigger>
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
                <Input id="proxy-timeout" type="number" defaultValue="30" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>فحص البروكسي تلقائياً</Label>
                  <p className="text-sm text-gray-500">اختبار البروكسيات قبل الاستخدام</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="captcha">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                إعدادات الكابتشا
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="captcha-service">خدمة حل الكابتشا</Label>
                <Select defaultValue="2captcha">
                  <SelectTrigger>
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
                <Input id="captcha-api-key" type="password" placeholder="أدخل مفتاح API" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="captcha-timeout">مهلة انتظار الكابتشا (ثانية)</Label>
                <Input id="captcha-timeout" type="number" defaultValue="120" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>إعادة المحاولة عند الفشل</Label>
                  <p className="text-sm text-gray-500">محاولة حل الكابتشا مرة أخرى</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                إعدادات البريد الإلكتروني
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email-service">خدمة البريد المؤقت</Label>
                <Select defaultValue="tempmail">
                  <SelectTrigger>
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
                <Input id="email-domain" placeholder="مثال: @tempmail.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-check-interval">فترة فحص البريد (ثانية)</Label>
                <Input id="email-check-interval" type="number" defaultValue="30" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>تفعيل التلقائي</Label>
                  <p className="text-sm text-gray-500">تفعيل الحسابات تلقائياً عبر البريد</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                إعدادات الإشعارات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="telegram-token">رمز بوت تلغرام</Label>
                <Input id="telegram-token" type="password" placeholder="أدخل رمز البوت" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telegram-chat-id">معرف الدردشة</Label>
                <Input id="telegram-chat-id" placeholder="أدخل معرف الدردشة" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>إشعار عند النجاح</Label>
                  <p className="text-sm text-gray-500">إرسال إشعار عند تسجيل حساب جديد</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>إشعار عند الأخطاء</Label>
                  <p className="text-sm text-gray-500">إرسال إشعار عند حدوث خطأ</p>
                </div>
                <Switch />
              </div>

              <Button className="w-full">
                <Zap className="h-4 w-4 mr-2" />
                اختبار الإشعارات
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
