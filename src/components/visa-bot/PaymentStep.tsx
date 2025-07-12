
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, DollarSign, Shield, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentStepProps {
  onNext: () => void;
}

export const PaymentStep = ({ onNext }: PaymentStepProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const fees = [
    { item: "Visa Application Fee", amount: 80 },
    { item: "Service Center Fee", amount: 25 },
    { item: "Processing Fee", amount: 15 },
  ];

  const totalAmount = fees.reduce((sum, fee) => sum + fee.amount, 0);

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // Generate dynamic Binance Pay link
      const paymentData = {
        merchant_id: "bot_xyz",
        amount: totalAmount,
        currency: "USD",
        order_id: `visa_${Date.now()}`,
        timestamp: Date.now(),
      };
      
      const binancePayUrl = `https://payer.bnb/bot_xyz/${paymentData.order_id}?amount=${totalAmount}&currency=USD`;
      
      toast({
        title: "🔗 Payment Link Generated",
        description: "Redirecting to Binance Pay for secure payment...",
      });

      // In a real implementation, this would redirect to the actual payment page
      setTimeout(() => {
        setIsProcessing(false);
        toast({
          title: "✅ Payment Successful",
          description: "Your payment has been processed successfully!",
        });
        onNext();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">💳 Payment</h2>
        <p className="text-gray-600">Complete your visa application payment</p>
      </div>

      {/* Fee Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Fee Breakdown
          </CardTitle>
          <CardDescription>Summary of all charges for your visa application</CardDescription>
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
              <span className="text-lg font-bold">Total Amount</span>
              <Badge className="text-lg px-3 py-1 bg-blue-600">${totalAmount}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Method
          </CardTitle>
          <CardDescription>Secure payment via Binance Business Pay</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 p-4 border-2 border-yellow-300 bg-yellow-50 rounded-lg">
            <div className="text-2xl">🟡</div>
            <div className="flex-1">
              <h4 className="font-semibold">Binance Pay</h4>
              <p className="text-sm text-gray-600">Secure cryptocurrency and card payments</p>
            </div>
            <Badge className="bg-yellow-100 text-yellow-800">Recommended</Badge>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Shield className="h-4 w-4" />
            <span>Secured by Binance Business with 256-bit SSL encryption</span>
          </div>

          <div className="text-xs text-gray-500 space-y-1">
            <p>• Accepts major credit cards and cryptocurrencies</p>
            <p>• Instant payment processing</p>
            <p>• No hidden fees</p>
          </div>
        </CardContent>
      </Card>

      {/* Payment Button */}
      <div className="text-center space-y-4">
        <Button
          onClick={handlePayment}
          disabled={isProcessing}
          size="lg"
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3"
        >
          {isProcessing ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
              Processing Payment...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              Pay ${totalAmount} with Binance Pay
            </div>
          )}
        </Button>

        <p className="text-xs text-gray-500">
          By proceeding, you agree to our terms of service and privacy policy
        </p>
      </div>
    </div>
  );
};
