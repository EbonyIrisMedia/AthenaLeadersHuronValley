/**
 * Design Philosophy: Modern Empowerment Minimalism
 * - Asymmetric layouts with intentional negative space
 * - Full-width hero with diagonal divider
 * - Card-based program displays with subtle elevation
 * - Orange accents for CTAs
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, GraduationCap, ArrowRight, Calendar } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/VATAfsHpLSZQjvxd.webp)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A3A52]/95 to-[#1A3A52]/70"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-serif font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Empowering Women Leaders Across the Huron Valley Region
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Supporting and developing girls and emerging women leaders in Washtenaw, Livingston, Monroe, Western Oakland, and Western Wayne Counties.
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="/support">
                <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white px-8 py-6 text-lg">
                  Get Involved
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A3A52] px-8 py-6 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,0 L1440,100 L1440,100 L0,100 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif font-bold text-4xl text-[#1A3A52] mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              AthenaLeaders of the Huron Valley is a nonprofit leadership development organization that supports and develops girls and emerging women leaders, and honors outstanding established women leaders across five counties in Southeast Michigan.
            </p>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl text-[#1A3A52] mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how we're making a difference through mentorship, recognition, and education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Young Enterprising Women */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FF8C00] rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <CardTitle className="font-serif text-2xl text-[#1A3A52]">
                  Young Enterprising Women
                </CardTitle>
                <CardDescription className="text-base">
                  Mentoring high school girls in STEM and entrepreneurship
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4">
                  Our partnership with the Enterprising Women Foundation connects high school girls with successful women entrepreneurs and leaders in their community.
                </p>
                <div className="mt-auto">
                  <Link href="/programs">
                    <Button variant="link" className="text-[#FF8C00] hover:text-[#E67E00] p-0">
                      Learn More <ArrowRight className="ml-1" size={16} />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* ATHENA Leadership Award */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FF8C00] rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <CardTitle className="font-serif text-2xl text-[#1A3A52]">
                  ATHENA Leadership Award
                </CardTitle>
                <CardDescription className="text-base">
                  Honoring outstanding women leaders in our community
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4">
                  Recognizing women who excel professionally, give back to their communities, and actively support women's leadership.
                </p>
                <div className="mt-auto">
                  <Link href="/programs">
                    <Button variant="link" className="text-[#FF8C00] hover:text-[#E67E00] p-0">
                      Learn More <ArrowRight className="ml-1" size={16} />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Scholarship Program */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FF8C00] rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <CardTitle className="font-serif text-2xl text-[#1A3A52]">
                  Scholarship Program
                </CardTitle>
                <CardDescription className="text-base">
                  Supporting the next generation of women leaders
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4">
                  Providing scholarships to high school girls to attend leadership conferences and develop their potential as future leaders.
                </p>
                <div className="mt-auto">
                  <Link href="/programs">
                    <Button variant="link" className="text-[#FF8C00] hover:text-[#E67E00] p-0">
                      Learn More <ArrowRight className="ml-1" size={16} />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="font-serif font-bold text-4xl text-[#1A3A52] mb-2">
                Upcoming Events
              </h2>
              <p className="text-lg text-gray-600">
                Join us at our next gathering
              </p>
            </div>
            <Link href="/events">
              <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white mt-4 md:mt-0">
                View All Events
                <Calendar className="ml-2" size={18} />
              </Button>
            </Link>
          </div>

          <div className="bg-gradient-to-r from-[#1A3A52] to-[#2A4A62] rounded-lg p-8 text-white">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="text-[#FF8C00] font-semibold mb-2">STAY CONNECTED</div>
                <h3 className="font-serif font-bold text-3xl mb-4">
                  Connect With Us
                </h3>
                <p className="text-gray-200 mb-6">
                  Follow us on Facebook to stay updated on upcoming events, program announcements, and inspiring stories from our community of women leaders.
                </p>
                <a 
                  href="https://www.facebook.com/ATHENALeadersActionNetworkHuronValley" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white">
                    Follow on Facebook
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </a>
              </div>
              <div className="w-full md:w-auto">
                <img 
                  src="/images/mNXiyHOQeECNDGSw.jpeg" 
                  alt="ATHENA Leaders" 
                  className="rounded-lg shadow-xl w-full md:w-80 h-64 object-cover"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#FF8C00]">
        <div className="container text-center">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you want to become a member, volunteer as a mentor, or support our programs, there are many ways to get involved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/support">
              <Button className="bg-white text-[#FF8C00] hover:bg-gray-100 px-8 py-6 text-lg">
                Become a Member
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#FF8C00] px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
