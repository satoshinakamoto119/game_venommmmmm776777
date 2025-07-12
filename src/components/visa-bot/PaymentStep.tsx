
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, DollarSign, Shield, ExternalLink, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentStepProps {
  country?: string;
  center?: string;
  onNext: () => void;
}

export const PaymentStep = ({ country = "Tunisia", center = "TLScontact", onNext }: PaymentStepProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("binance");
  const { toast } = useToast();

  const getCountryFees = (country: string, center: string) => {
    const baseFees = {
      "visa_fee": { Tunisia: 80, Algeria: 80, Morocco: 80, Egypt: 60 },
      "service_fee": { 
        TLScontact: 35, 
        "VFS Global": 25, 
        "BLS International": 30,
        Almaviva: 28 
      },
      "processing_fee": 15
    };

    return [
      { item: "رسوم طلب الفيزا", amount: baseFees.visa_fee[country as keyof typeof baseFees.visa_fee] || 80 },
      { item: `رسوم ${center}`, amount: baseFees.service_fee[center as keyof typeof baseFees.service_fee] || 25 },
      { item: "رسوم المعالجة", amount: baseFees.processing_fee },
    ];
  };

  const fees = getCountryFees(country, center);
  const totalAmount = fees.reduce((sum, fee) => sum + fee.amount, 0);

  const paymentMethods = [
    {
      id: "binance",
      name: "Binance Pay",
      icon: "🟡",
      description: "دفع آمن بالعملات المشفرة والبطاقات",
      badge: "موصى به",
      badgeColor: "bg-yellow-100 text-yellow-800"
    },
    {
      id: "card",
      name: "بطاقة ائتمان/خصم",
      icon: "💳",
      description: "فيزا، ماستركارد، أمريكان إكسبريس",
      badge: "سريع",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      id: "bank",
      name: "تحويل بنكي",
      icon: "🏦",
      description: "تحويل مباشر من البنك",
      badge: "آمن",
      badgeColor: "bg-blue-100 text-blue-800"
    }
  ];

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      const paymentData = {
        merchant_id: "visa_bot_xyz",
        amount: totalAmount,
        currency: "USD",
        order_id: `visa_${country}_${Date.now()}`,
        timestamp: Date.now(),
        method: selectedPaymentMethod
      };
      
      let paymentUrl = "";
      let toastMessage = "";
      
      switch (selectedPaymentMethod) {
        case "binance":
          paymentUrl = `https://payer.bnb/visa_bot_xyz/${paymentData.order_id}?amount=${totalAmount}&currency=USD`;
          toastMessage = "جاري التوجيه إلى Binance Pay للدفع الآمن...";
          break;
        case "card":
          paymentUrl = `https://checkout.stripe.com/pay/visa_${paymentData.order_id}`;
          toastMessage = "جاري التوجيه إلى صفحة الدفع بالبطاقة...";
          break;
        case "bank":
          paymentUrl = `https://banking.transfer/visa_${paymentData.order_id}`;
          toastMessage = "جاري التوجيه إلى صفحة التحويل البنكي...";
          break;
      }
      
      toast({
        title: "🔗 تم إنشاء رابط الدفع",
        description: toastMessage,
      });

      // In a real implementation, this would redirect to the actual payment page
      setTimeout(() => {
        setIsProcessing(false);
        toast({
          title: "✅ تم الدفع بنجاح",
          description: "تم معالجة دفعتك بنجاح! سيتم إرسال رسالة تأكيد قريباً.",
        });
        onNext();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">💳 الدفع</h2>
        <p className="text-gray-600">أكمل دفع طلب الفيزا الخاص بك</p>
      </div>

      {/* Fee Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            تفاصيل الرسوم
          </CardTitle>
          <CardDescription>ملخص جميع الرسوم لطلب الفيزا - {country} عبر {center}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {fees.map((fee, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">{fee.item}</span>
              <Badge variant="outline">${fee.amount}</Badge>
            </div>
          ))}
          <div className="border-t pt-3 mt-3">
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span className="text-lg font-bold">المبلغ الإجمالي</span>
              <Badge className="text-lg px-3 py-1 bg-blue-600">${totalAmount}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            طريقة الدفع
          </CardTitle>
          <CardDescription>اختر طريقة الدفع المفضلة لديك</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                selectedPaymentMethod === method.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setSelectedPaymentMethod(method.id)}
            >
              <div className="text-2xl">{method.icon}</div>
              <div className="flex-1">
                <h4 className="font-semibold">{method.name}</h4>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
              <Badge className={method.badgeColor}>{method.badge}</Badge>
              {selectedPaymentMethod === method.id && (
                <CheckCircle className="h-5 w-5 text-blue-500" />
              )}
            </div>
          ))}

          <div className="flex items-center gap-2 text-sm text-gray-600 mt-4">
            <Shield className="h-4 w-4" />
            <span>محمي بتشفير SSL 256-bit وأحدث معايير الأمان</span>
          </div>

          <div className="text-xs text-gray-500 space-y-1">
            <p>• جميع المعاملات محمية ومؤمنة</p>
            <p>• معالجة فورية للدفعات</p>
            <p>• لا توجد رسوم خفية</p>
            <p>• إمكانية الاسترداد حسب الشروط والأحكام</p>
          </div>
        </CardContent>
      </Card>

      {/* Payment Timeline */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            الخطوات التالية بعد الدفع
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold text-sm">1</span>
            </div>
            <span className="text-sm">تأكيد الدفع فوري (خلال دقائق)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">2</span>
            </div>
            <span className="text-sm">إرسال رسالة SMS بتفاصيل الموعد</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold text-sm">3</span>
            </div>
            <span className="text-sm">إرسال إيميل بجميع الوثائق المطلوبة</span>
          </div>
        </CardContent>
      </Card>

      {/* Payment Button */}
      <div className="text-center space-y-4">
        <Button
          onClick={handlePayment}
          disabled={isProcessing}
          size="lg"
          className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 w-full sm:w-auto"
        >
          {isProcessing ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
              جاري معالجة الدفع...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              ادفع ${totalAmount} عبر {paymentMethods.find(p => p.id === selectedPaymentMethod)?.name}
            </div>
          )}
        </Button>

        <p className="text-xs text-gray-500">
          بالمتابعة، أنت توافق على شروط الخدمة وسياسة الخصوصية الخاصة بنا
        </p>
      </div>
    </div>
  );
};
