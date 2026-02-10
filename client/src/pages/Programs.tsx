/**
 * Design Philosophy: Modern Empowerment Minimalism
 * - Detailed program descriptions with visual hierarchy
 * - Orange accents for key information
 * - Card-based layouts with subtle shadows
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, GraduationCap, Calendar, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Programs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A3A52] to-[#2A4A62] text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Empowering the next generation through mentorship, recognition, and education
            </p>
          </div>
        </div>
      </section>

      {/* Young Enterprising Women */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/images/cEsMurBInhFERoKt.jpeg" 
                alt="Young Enterprising Women Mentoring - February 2026" 
                className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover object-center"
                
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FF8C00] rounded-lg flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <h2 className="font-serif font-bold text-4xl text-[#1A3A52]">
                  Young Enterprising Women
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our partnership with the Enterprising Women Foundation provides high school girls with an opportunity to meet and connect with outstanding women entrepreneurs in their community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The program is designed to recognize their leadership potential, inspire them to dream big, and focus on the next steps to realize their potential as entrepreneurs or leaders in STEM-based fields and other industries.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-lg text-[#1A3A52] mb-3">Program Highlights:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full mt-2"></span>
                    <span>Mentoring events connecting girls with successful women entrepreneurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full mt-2"></span>
                    <span>Focus on STEM fields and entrepreneurship opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full mt-2"></span>
                    <span>Panel discussions and small group mentoring sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full mt-2"></span>
                    <span>Hosted at local high schools across our five-county region</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 italic">
                Local event chair: Jan Davies McDermott, Ann Arbor, MI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ATHENA Leadership Award */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FF8C00] rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <h2 className="font-serif font-bold text-4xl text-[#1A3A52]">
                  ATHENA Leadership Award
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The ATHENA Leadership Award recognizes outstanding women leaders in our community who excel professionally, give back to their communities, and actively support women's leadership development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Recipients embody the Eight Principles of Enlightened Leadership and serve as role models for the next generation of women leaders.
              </p>
              <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
                <h3 className="font-semibold text-lg text-[#1A3A52] mb-3">Award Criteria:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full mt-2"></span>
                    <span>Excellence in their chosen profession</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full mt-2"></span>
                    <span>Active community service and giving back</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full mt-2"></span>
                    <span>Mentoring and supporting women's leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full mt-2"></span>
                    <span>Embodying the ATHENA Principles</span>
                  </li>
                </ul>
              </div>
              <Card className="border-l-4 border-l-[#FF8C00]">
                <CardHeader>
                  <CardTitle className="text-[#1A3A52]">Past Recipients</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">
                    <strong>2017:</strong> Pat Montgomery
                  </p>
                  <p className="text-sm text-gray-600">
                    Recognized for innovative work in developing young people through education leadership.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <img 
                src="/images/mNXiyHOQeECNDGSw.jpeg" 
                alt="ATHENA Leadership Award" 
                className="rounded-lg shadow-xl w-full h-64 md:h-[500px] object-cover"
                
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Program */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FF8C00] rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h2 className="font-serif font-bold text-4xl text-[#1A3A52]">
                Scholarship Program
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We provide scholarships to high school girls to attend the Young Enterprising Women National Leadership Conference, giving them access to inspiring women leaders, educational workshops, and networking opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <Calendar className="text-[#FF8C00] mb-3" size={32} />
                  <h3 className="font-semibold text-lg text-[#1A3A52] mb-2">
                    2026 Conference
                  </h3>
                  <p className="text-gray-600 mb-2">
                    April 24-26, 2026
                  </p>
                  <p className="text-sm text-gray-600">
                    DoubleTree Hotel by Hilton, Arlington, VA
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardContent className="p-6">
                  <Heart className="text-[#FF8C00] mb-3" size={32} />
                  <h3 className="font-semibold text-lg text-[#1A3A52] mb-2">
                    Scholarship Coverage
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Airfare, hotel, conference registration, meals, transportation, and $100 gift card for incidental expenses
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-[#FF8C00] to-[#E67E00] rounded-lg p-8 text-white text-center">
              <h3 className="font-serif font-bold text-2xl mb-4">
                Support Our Scholarship Fund
              </h3>
              <p className="mb-6">
                Your donation helps send deserving young women to leadership conferences and mentoring events.
              </p>
              <Link href="/support">
                <Button className="bg-white text-[#FF8C00] hover:bg-gray-100">
                  Make a Donation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
