/**
 * Design Philosophy: Modern Empowerment Minimalism
 * - Clean event listings with visual hierarchy
 * - Orange accents for dates and CTAs
 * - Card-based layouts for upcoming events
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Facebook, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AddToCalendar from "@/components/AddToCalendar";

export default function Events() {
  const galleryPhotos = [
    { url: "/images/MaSnfbfvIiaYJKFG.jpeg", alt: "Young woman presenting at podium" },
    { url: "/images/cnSXLdAfkrPXQhof.webp", alt: "Leaders Kim Burley and Jan Davies McDermott" },
    { url: "/images/VKoySeYLVIQoAdcj.webp", alt: "Registration interaction" },
    { url: "/images/vTUywLAuhihQkDjb.webp", alt: "Wide view of panel and audience" },
    { url: "/images/YBxbZjICDPSGOyls.webp", alt: "Event room from back showing full scope" },
    { url: "/images/lGGHDTDffAIHornW.webp", alt: "Young woman speaking at panel" },
    { url: "/images/PNKVQFdwZDjrggsO.webp", alt: "Girl smiling broadly" },
    { url: "/images/khYMztgzATwPovfc.webp", alt: "Girls in conversation" },
    { url: "/images/jQArQrayurzrNfJQ.webp", alt: "Group working at table" },
    { url: "/images/MbkGSOfJMyBAqZQm.webp", alt: "Young woman engaged in learning" },
    { url: "/images/DMWsNemgtYnTPKpk.webp", alt: "Girl with laptop focused on work" },
    { url: "/images/RWsfuMQNkZCKRHsN.webp", alt: "Table group collaborating with laptops" },
    { url: "/images/rvRWOvxglpSxsBrL.webp", alt: "Girl using tablet for learning" },
    { url: "/images/hZcVcsydROViVlnL.jpeg", alt: "Two girls working together at laptop" },
    { url: "/images/LDXNUevirFnyZFzj.jpeg", alt: "Girls collaborating on laptops" },
    { url: "/images/NDXOtMfJQSHRzXth.jpeg", alt: "Girl in pink working at laptop" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1A3A52] to-[#2A4A62] text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6">
              Events
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Join us for inspiring gatherings, mentoring events, and leadership celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[#FF8C00] shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center">
                      <Facebook className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="font-serif font-bold text-2xl text-[#1A3A52] mb-2">
                      Stay Updated on Upcoming Events
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Follow us on Facebook to receive the latest updates on our events, programs, and community activities.
                    </p>
                    <a 
                      href="https://www.facebook.com/ATHENALeadersActionNetworkHuronValley" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white">
                        Follow on Facebook
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-4xl text-[#1A3A52] mb-8 text-center">
              Upcoming Events
            </h2>

            {/* YEW Conference 2026 */}
            <Card className="mb-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-[#1A3A52] to-[#2A4A62] text-white">
                <div className="flex items-center gap-3">
                  <Calendar className="text-[#FF8C00]" size={32} />
                  <div>
                    <CardTitle className="font-serif text-2xl">
                      Young Enterprising Women National Leadership Conference
                    </CardTitle>
                    <p className="text-gray-200 text-sm mt-1">
                      Annual national conference for scholarship recipients
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="text-[#FF8C00]" size={20} />
                    <span className="font-semibold">April 24-26, 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="text-[#FF8C00]" size={20} />
                    <span>DoubleTree Hotel by Hilton – Washington DC – Crystal City, Arlington, VA</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  High school girls from across the country will gather for this inspiring leadership conference featuring workshops, keynote speakers, and networking opportunities with successful women entrepreneurs and leaders.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600">
                    <strong>Scholarship Opportunity:</strong> We provide scholarships for deserving high school girls from our region to attend this conference. Contact us to learn more about the application process.
                  </p>
                </div>
                <AddToCalendar
                  event={{
                    title: "Young Enterprising Women National Leadership Conference",
                    description: "Annual national conference for scholarship recipients. High school girls from across the country will gather for this inspiring leadership conference featuring workshops, keynote speakers, and networking opportunities with successful women entrepreneurs and leaders.",
                    location: "DoubleTree Hotel by Hilton – Washington DC – Crystal City, Arlington, VA",
                    startDate: new Date("2026-04-24T09:00:00"),
                    endDate: new Date("2026-04-26T17:00:00"),
                  }}
                  variant="default"
                  className="bg-[#FF8C00] hover:bg-[#E67E00] text-white"
                />
              </CardContent>
            </Card>

            {/* Placeholder for more events */}
            <Card className="shadow-md">
              <CardContent className="p-8 text-center">
                <Calendar className="text-[#FF8C00] mx-auto mb-4" size={48} />
                <h3 className="font-serif font-bold text-2xl text-[#1A3A52] mb-3">
                  More Events Coming Soon
                </h3>
                <p className="text-gray-600 mb-6">
                  We're planning exciting mentoring events, networking gatherings, and leadership celebrations throughout the year. Check back soon or follow us on Facebook for the latest updates.
                </p>
                <a 
                  href="https://www.facebook.com/ATHENALeadersActionNetworkHuronValley" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white">
                    Follow for Updates
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-4xl text-[#1A3A52] mb-8 text-center">
              Past Events
            </h2>
            
            <div className="grid grid-cols-1 gap-6 mb-12">
              <Card className="shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/images/VATAfsHpLSZQjvxd.webp" 
                    alt="Young woman smiling at Young Enterprising Women event" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-[#1A3A52]">
                    Young Enterprising Women Mentoring Forum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>February 2, 2026</strong>
                  </p>
                  <p className="text-gray-700 mb-4">
                    High school girls from across the Huron Valley region connected with successful women business leaders, including CoChairs Kim Burley and Jan Davies McDermott, and Enterprising Women Foundation Founder Monica Smiley.
                  </p>
                  <p className="text-sm text-[#FF8C00] font-semibold mb-3">
                    📍 Washtenaw Community College
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif font-bold text-4xl text-[#1A3A52] mb-4 text-center">
              February 2, 2026 Event Gallery
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Highlights from our Young Enterprising Women Mentoring Forum where high school girls connected with successful women business leaders.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryPhotos.map((photo, index) => (
                <div 
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
                >
                  <img 
                    src={photo.url} 
                    alt={photo.alt} 
                    className="w-full h-64 object-cover"
                    
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="https://www.facebook.com/ATHENALeadersActionNetworkHuronValley/photos" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white">
                  <Facebook className="mr-2" size={20} />
                  View More Photos & Follow Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#FF8C00]">
        <div className="container text-center">
          <h2 className="font-serif font-bold text-3xl text-white mb-4">
            Want to Host an Event?
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Interested in hosting a Young Enterprising Women event at your school or organization? We'd love to hear from you.
          </p>
          <a href="mailto:chair@ATHENALeadersoftheHuronValley.org">
            <Button className="bg-white text-[#FF8C00] hover:bg-gray-100 px-8 py-6 text-lg">
              Contact Us
            </Button>
          </a>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
}
