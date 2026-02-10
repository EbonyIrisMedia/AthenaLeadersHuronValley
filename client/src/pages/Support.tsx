/**
 * Design Philosophy: Modern Empowerment Minimalism
 * - Clear ways to support with visual hierarchy
 * - Orange accents for CTAs
 * - Card-based layouts for different support options
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Heart, Flower, Recycle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A3A52] to-[#2A4A62] text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6">
              Support Us
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Join us in empowering the next generation of women leaders
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif font-bold text-3xl text-[#1A3A52] mb-6">
              Make a Difference
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you want to become a member, volunteer as a mentor, or support our programs financially, there are many ways to get involved with AthenaLeaders of the Huron Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Membership */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FF8C00] rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <CardTitle className="font-serif text-2xl text-[#1A3A52]">
                  Become a Member
                </CardTitle>
                <CardDescription className="text-base">
                  Join our network of women leaders
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4">
                  Membership connects you with a community of inspiring women leaders, provides access to our events and programs, and supports our mission to develop emerging leaders.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full mt-2"></span>
                    <span>Access to networking events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full mt-2"></span>
                    <span>Opportunities to mentor young women</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full mt-2"></span>
                    <span>Support for leadership development</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <a href="mailto:chair@ATHENALeadersoftheHuronValley.org?subject=Membership Inquiry">
                    <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white w-full">
                      Inquire About Membership
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Volunteer */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FF8C00] rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <CardTitle className="font-serif text-2xl text-[#1A3A52]">
                  Volunteer as a Mentor
                </CardTitle>
                <CardDescription className="text-base">
                  Share your experience with the next generation
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4">
                  Our mentoring programs rely on dedicated volunteers who are willing to share their expertise and inspire high school girls to pursue their dreams.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full mt-2"></span>
                    <span>Participate in mentoring forums</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full mt-2"></span>
                    <span>Share your career journey</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full mt-2"></span>
                    <span>Make a lasting impact</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <a href="mailto:chair@ATHENALeadersoftheHuronValley.org?subject=Volunteer Inquiry">
                    <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white w-full">
                      Volunteer Today
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fundraising Initiatives */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-4xl text-[#1A3A52] mb-8 text-center">
              Support Our Fundraising Initiatives
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Spring Flower Sale */}
              <Card className="border-l-4 border-l-[#FF8C00] shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Flower className="text-[#FF8C00]" size={32} />
                    <CardTitle className="font-serif text-2xl text-[#1A3A52]">
                      Spring Flower Sale
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Our annual flower sale takes place around Mother's Day and Memorial Day. Beautiful flowers for your garden while supporting women's leadership development!
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Check back in spring for ordering information.
                  </p>
                </CardContent>
              </Card>

              {/* Can & Bottle Collection */}
              <Card className="border-l-4 border-l-[#FF8C00] shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Recycle className="text-[#FF8C00]" size={32} />
                    <CardTitle className="font-serif text-2xl text-[#1A3A52]">
                      Can & Bottle Collection
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    We accept returnable cans and bottles year-round. Your recyclables help fund our scholarship and mentoring programs.
                  </p>
                  <p className="text-sm text-gray-600">
                    Contact us to arrange a drop-off or pick-up.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Direct Donation CTA */}
            <Card className="bg-gradient-to-r from-[#FF8C00] to-[#E67E00] text-white shadow-xl">
              <CardContent className="p-8 text-center">
                <Heart className="mx-auto mb-4" size={48} />
                <h3 className="font-serif font-bold text-3xl mb-4">
                  Make a Direct Donation
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Your financial support helps us provide scholarships, host mentoring events, and recognize outstanding women leaders in our community.
                </p>
                <a href="mailto:chair@ATHENALeadersoftheHuronValley.org?subject=Donation Inquiry">
                  <Button className="bg-white text-[#FF8C00] hover:bg-gray-100 px-8 py-6 text-lg">
                    <Mail className="mr-2" size={20} />
                    Contact Us About Donating
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scholarship Support */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif font-bold text-3xl text-[#1A3A52] mb-6">
              Support Our Scholarship Fund
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Donations to our scholarship fund send deserving high school girls to the Young Enterprising Women National Leadership Conference, where they connect with inspiring women leaders and develop their own leadership potential.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <p className="text-gray-700 mb-2">
                <strong>Scholarship Coverage:</strong>
              </p>
              <p className="text-gray-600 mb-6">
                Each $2,500 scholarship covers airfare, hotel, conference registration, meals, transportation, and a $100 gift card for one student and their parent or guardian.
              </p>
              <a href="mailto:chair@ATHENALeadersoftheHuronValley.org?subject=Scholarship Fund Donation">
                <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white px-8 py-4">
                  Support a Scholarship
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
