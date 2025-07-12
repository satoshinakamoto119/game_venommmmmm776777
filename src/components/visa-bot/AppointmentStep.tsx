
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

interface AppointmentStepProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  onNext: () => void;
}

export const AppointmentStep = ({ selectedDate, setSelectedDate, onNext }: AppointmentStepProps) => {
  const [selectedTime, setSelectedTime] = useState("");

  // Mock available dates and times
  const availableDates = [
    { date: "2024-02-15", slots: ["09:00", "10:30", "14:00", "15:30"] },
    { date: "2024-02-16", slots: ["09:30", "11:00", "13:00", "16:00"] },
    { date: "2024-02-17", slots: ["10:00", "11:30", "14:30"] },
    { date: "2024-02-18", slots: ["09:00", "12:00", "15:00", "16:30"] },
    { date: "2024-02-19", slots: ["09:30", "10:00", "13:30", "15:00"] },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirmAppointment = () => {
    if (selectedDate && selectedTime) {
      onNext();
    }
  };

  const selectedDateData = availableDates.find(d => d.date === selectedDate);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🕓 Choose Appointment Date</h2>
        <p className="text-gray-600">Select your preferred appointment date and time</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Available Dates */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Available Dates
            </CardTitle>
            <CardDescription>Choose from available appointment dates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {availableDates.map((dateOption) => (
              <Card
                key={dateOption.date}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedDate === dateOption.date
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => handleDateSelect(dateOption.date)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{formatDate(dateOption.date)}</p>
                      <p className="text-sm text-gray-600">{dateOption.date}</p>
                    </div>
                    <Badge variant="outline">
                      {dateOption.slots.length} slots
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Available Times */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Available Times
            </CardTitle>
            <CardDescription>
              {selectedDate ? `Time slots for ${formatDate(selectedDate)}` : "Select a date first"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedDate && selectedDateData ? (
              <div className="grid grid-cols-2 gap-3">
                {selectedDateData.slots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    onClick={() => handleTimeSelect(time)}
                    className="justify-center"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Clock className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>Please select a date to view available times</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Selected Appointment Summary */}
      {selectedDate && selectedTime && (
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Appointment Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><strong>Date:</strong> {formatDate(selectedDate)}</p>
              <p><strong>Time:</strong> {selectedTime}</p>
              <p><strong>Duration:</strong> Approximately 30 minutes</p>
              <p className="text-sm text-green-700">
                ✅ Please arrive 15 minutes before your appointment time
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="text-center">
        <Button
          onClick={handleConfirmAppointment}
          disabled={!selectedDate || !selectedTime}
          size="lg"
          className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
        >
          Confirm Appointment & Continue to Payment
        </Button>
      </div>
    </div>
  );
};
