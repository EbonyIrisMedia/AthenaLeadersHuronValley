/**
 * AddToCalendar Component
 * Provides dropdown menu to add events to Google Calendar, iCal, or Outlook
 */

import { Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { generateGoogleCalendarLink, generateICalLink, generateOutlookLink, CalendarEvent } from "@/lib/calendar";

interface AddToCalendarProps {
  event: CalendarEvent;
  variant?: "default" | "outline";
  className?: string;
}

export default function AddToCalendar({ event, variant = "outline", className = "" }: AddToCalendarProps) {
  const handleGoogleCalendar = () => {
    window.open(generateGoogleCalendarLink(event), '_blank');
  };

  const handleICalDownload = () => {
    const link = document.createElement('a');
    link.href = generateICalLink(event);
    link.download = `${event.title.replace(/\s+/g, '_')}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOutlook = () => {
    window.open(generateOutlookLink(event), '_blank');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} className={className}>
          <Calendar className="mr-2 h-4 w-4" />
          Add to Calendar
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuItem onClick={handleGoogleCalendar} className="cursor-pointer">
          Google Calendar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleICalDownload} className="cursor-pointer">
          Apple Calendar (iCal)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleOutlook} className="cursor-pointer">
          Outlook Calendar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
