
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageSquare, Calendar, MapPin, FileText, Phone } from "lucide-react";

interface ConfirmationStepProps {
  country: string;
  center: string;
  date: string;
}

export const ConfirmationStep = ({ country, center, date }: ConfirmationStepProps) => {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [smsStatus, setSmsStatus] = useState("sending");

  useEffect(() => {
    // Generate reference number
    const ref = `VIS${Date.now().toString().slice(-6)}`;
    setReferenceNumber(ref);

    // Simulate SMS sending
    setTimeout(() => {
      setSmsStatus("sent");
    }, 2000);
  }, []);

  const appointmentDetails = {
    country,
    center,
    date: new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    time: "10:00 AM", // This would come from the appointment step
    reference: referenceNumber,
  };

  const smsMessage = `Your visa appointment is confirmed for ${appointmentDetails.date} at ${appointmentDetails.time}. Ref: #${referenceNumber}`;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-green-600 mb-2">Application Submitted Successfully!</h2>
        <p className="text-gray-600">Your visa appointment has been confirmed</p>
      </div>

      {/* Confirmation Details */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center gap-2">
            <CheckCircle className="h-6 w-6" />
            Appointment Confirmation
          </CardTitle>
          <CardDescription>Please save this information for your records</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-600" />
                <span className="font-medium">Location:</span>
              </div>
              <p className="text-gray-700 ml-6">{center}, {country}</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-600" />
                <span className="font-medium">Date & Time:</span>
              </div>
              <p className="text-gray-700 ml-6">{appointmentDetails.date}</p>
              <p className="text-gray-700 ml-6">{appointmentDetails.time}</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-4 w-4 text-gray-600" />
              <span className="font-medium">Reference Number:</span>
            </div>
            <Badge className="text-lg px-4 py-2 bg-green-600 text-white ml-6">
              #{referenceNumber}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* SMS Confirmation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            SMS Confirmation
          </CardTitle>
          <CardDescription>We're sending you a confirmation message</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <Phone className="h-5 w-5 text-blue-600 mt-1" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">SMS Status:</span>
                <Badge 
                  variant={smsStatus === "sent" ? "default" : "secondary"}
                  className={smsStatus === "sent" ? "bg-green-600" : "bg-yellow-500"}
                >
                  {smsStatus === "sent" ? "✅ Sent" : "📤 Sending..."}
                </Badge>
              </div>
              <div className="text-sm text-gray-600 p-3 bg-white rounded border">
                "{smsMessage}"
              </div>
              {smsStatus === "sent" && (
                <p className="text-xs text-green-600 mt-2">
                  ✅ SMS confirmation sent to your registered phone number
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Reminders */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">📋 Important Reminders</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Arrive 15 minutes before your appointment time</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Bring all required documents and your passport</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Carry a printed copy of this confirmation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>Contact support if you need to reschedule</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <Button variant="outline">
          📧 Email Confirmation
        </Button>
        <Button variant="outline">
          📱 Add to Calendar
        </Button>
        <Button>
          🆕 New Application
        </Button>
      </div>
    </div>
  );
};
