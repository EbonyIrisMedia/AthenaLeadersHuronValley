/**
 * Design Philosophy: Modern Empowerment Minimalism
 * - Clean contact information layout
 * - Orange accents for contact methods
 * - Map showing service area
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Facebook, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A3A52] to-[#2A4A62] text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              We'd love to hear from you. Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Email */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FF8C00] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-[#1A3A52] mb-3">
                        Email Us
                      </h3>
                      <a 
                        href="mailto:chair@ATHENALeadersoftheHuronValley.org" 
                        className="block text-gray-700 hover:text-[#FF8C00] transition-colors break-all"
                      >
                        chair@ATHENALeadersoftheHuronValley.org
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FF8C00] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-[#1A3A52] mb-3">
                        Call or Text
                      </h3>
                      <a 
                        href="tel:734-417-5745" 
                        className="text-gray-700 hover:text-[#FF8C00] transition-colors text-lg"
                      >
                        734-417-5745
                      </a>
                      <p className="text-sm text-gray-600 mt-2">
                        Available for calls and text messages
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FF8C00] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Facebook className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-[#1A3A52] mb-3">
                        Follow Us
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Stay connected on Facebook for updates, events, and inspiring stories.
                      </p>
                      <a 
                        href="https://www.facebook.com/ATHENALeadersActionNetworkHuronValley" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white">
                          Visit Our Page
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Area */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FF8C00] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-[#1A3A52] mb-3">
                        Service Area
                      </h3>
                      <p className="text-gray-700 mb-3">
                        We serve five counties in Southeast Michigan:
                      </p>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Washtenaw County</li>
                        <li>• Livingston County</li>
                        <li>• Monroe County</li>
                        <li>• Western Oakland County</li>
                        <li>• Western Wayne County</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form Alternative */}
            <Card className="bg-gradient-to-r from-[#1A3A52] to-[#2A4A62] text-white shadow-xl">
              <CardContent className="p-12 text-center">
                <h2 className="font-serif font-bold text-3xl mb-4">
                  Have Questions?
                </h2>
                <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                  Whether you're interested in membership, volunteering, hosting an event, or learning more about our programs, we're here to help.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="mailto:chair@ATHENALeadersoftheHuronValley.org?subject=General Inquiry">
                    <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white px-8 py-6 text-lg">
                      <Mail className="mr-2" size={20} />
                      Send Us an Email
                    </Button>
                  </a>
                  <a href="tel:734-417-5745">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A3A52] px-8 py-6 text-lg">
                      <Phone className="mr-2" size={20} />
                      Call Us
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-3xl text-[#1A3A52] mb-8 text-center">
              Looking for Something Specific?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center shadow-md hover:shadow-lg transition-shadow flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg text-[#1A3A52] mb-2">
                    Membership
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Learn about joining our network
                  </p>
                  <div className="mt-auto">
                    <a href="mailto:chair@ATHENALeadersoftheHuronValley.org?subject=Membership Inquiry">
                      <Button variant="link" className="text-[#FF8C00] hover:text-[#E67E00]">
                        Get Info
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center shadow-md hover:shadow-lg transition-shadow flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg text-[#1A3A52] mb-2">
                    Volunteering
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Become a mentor or volunteer
                  </p>
                  <div className="mt-auto">
                    <a href="mailto:chair@ATHENALeadersoftheHuronValley.org?subject=Volunteer Inquiry">
                      <Button variant="link" className="text-[#FF8C00] hover:text-[#E67E00]">
                        Get Involved
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center shadow-md hover:shadow-lg transition-shadow flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg text-[#1A3A52] mb-2">
                    Hosting Events
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Host a mentoring event at your school
                  </p>
                  <div className="mt-auto">
                    <a href="mailto:chair@ATHENALeadersoftheHuronValley.org?subject=Event Hosting Inquiry">
                      <Button variant="link" className="text-[#FF8C00] hover:text-[#E67E00]">
                        Learn More
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
