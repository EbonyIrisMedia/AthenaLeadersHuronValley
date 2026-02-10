/**
 * Design Philosophy: Modern Empowerment Minimalism
 * - Clean layout with asymmetric content sections
 * - Eight Principles displayed prominently
 * - Professional imagery with subtle overlays
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A3A52] to-[#2A4A62] text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Empowering women leaders across Southeast Michigan since our founding
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Region */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-4xl text-[#1A3A52] mb-6">
                Our Mission & Region
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                AthenaLeaders of the Huron Valley is a nonprofit leadership development organization dedicated to supporting and developing girls and emerging women leaders, while honoring outstanding established women leaders.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We serve five counties across Southeast Michigan:
              </p>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF8C00] rounded-full"></span>
                  Washtenaw County
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF8C00] rounded-full"></span>
                  Livingston County
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF8C00] rounded-full"></span>
                  Monroe County
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF8C00] rounded-full"></span>
                  Western Oakland County
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF8C00] rounded-full"></span>
                  Western Wayne County
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/images/mNXiyHOQeECNDGSw.jpeg" 
                alt="Women Leaders" 
                className="rounded-lg shadow-xl w-full h-64 md:h-[500px] object-cover"
                
              />
            </div>
          </div>
        </div>
      </section>

      {/* ATHENA Principles */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl text-[#1A3A52] mb-4">
              The ATHENA Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At the heart of everything we do are the Eight Principles of Enlightened Leadership™, guiding our mission to develop transformative leaders.
            </p>
          </div>

          <div className="w-full overflow-x-auto mb-12">
            <div className="min-w-[800px] px-4 mx-auto max-w-5xl">
              <img 
                src="/images/JciSfKzAkCKFoAhN.png" 
                alt="Eight Principles of Enlightened Leadership" 
                className="w-full h-auto rounded-lg shadow-lg"
                
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="border-l-4 border-l-[#FF8C00] shadow-md">
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-xl text-[#1A3A52] mb-2">
                  Live Authentically
                </h3>
                <p className="text-gray-600">
                  Leaders know their values and remain true to them, creating trust and credibility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#FF8C00] shadow-md">
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-xl text-[#1A3A52] mb-2">
                  Learn Constantly
                </h3>
                <p className="text-gray-600">
                  Leaders seek knowledge, embrace new experiences, and develop themselves.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#FF8C00] shadow-md">
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-xl text-[#1A3A52] mb-2">
                  Build Relationships
                </h3>
                <p className="text-gray-600">
                  Leaders engage and connect with others to build meaningful relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#FF8C00] shadow-md">
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-xl text-[#1A3A52] mb-2">
                  Foster Collaboration
                </h3>
                <p className="text-gray-600">
                  Leaders welcome others' ideas and create environments where collaboration thrives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#FF8C00] shadow-md">
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-xl text-[#1A3A52] mb-2">
                  Act Courageously
                </h3>
                <p className="text-gray-600">
                  Leaders take bold action, speak the truth, and stand up for what's right.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#FF8C00] shadow-md">
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-xl text-[#1A3A52] mb-2">
                  Advocate Fiercely
                </h3>
                <p className="text-gray-600">
                  Leaders champion when they believe in something and advocate for others.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#FF8C00] shadow-md">
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-xl text-[#1A3A52] mb-2">
                  Give Back
                </h3>
                <p className="text-gray-600">
                  Leaders serve their communities and mentor the next generation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#FF8C00] shadow-md">
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-xl text-[#1A3A52] mb-2">
                  Celebrate
                </h3>
                <p className="text-gray-600">
                  Leaders recognize achievements and share joy in celebrating success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif font-bold text-4xl text-[#1A3A52] mb-6">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600">
              Our dedicated board members and leaders work tirelessly to support women's leadership development across the Huron Valley region.
            </p>
          </div>

          {/* Jan Davies McDermott Profile */}
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  {/* Photo */}
                  <div className="md:col-span-1 bg-gradient-to-br from-[#1A3A52] to-[#2A4A62] p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#FF8C00] shadow-xl">
                        <img 
                          src="/images/OAdgZNoXyFvlNoPG.jpg" 
                          alt="Jan Davies McDermott" 
                          className="w-full h-full object-cover"
                          
                        />
                      </div>
                      <h3 className="font-serif font-bold text-2xl text-white mb-2">
                        Jan Davies McDermott
                      </h3>
                      <p className="text-[#FF8C00] font-semibold text-lg">
                        Chair
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="md:col-span-2 p-8">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg text-[#1A3A52] mb-2">Professional Background</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Jan Davies McDermott serves as Director at the Ann Arbor Economic Development Corporation and is an accomplished entrepreneur, business trainer, and coach. A certified Professional Small Business Consultant since 1996, she brings decades of experience supporting business growth and women's leadership development.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg text-[#1A3A52] mb-2">ATHENA Leadership</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Jan has been a driving force in ATHENA International for nearly two decades. She served as International Board Director (2012-2018) and currently serves as an Ambassador. She chairs the Young Enterprising Women Mentoring Forum and has been a Governing Body Member of the Washtenaw ATHENAPowerLink Program since 2006.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg text-[#1A3A52] mb-2">Awards & Recognition</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#FF8C00] rounded-full mt-2 flex-shrink-0"></span>
                            <span>ATHENA Leadership Award (2005)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#FF8C00] rounded-full mt-2 flex-shrink-0"></span>
                            <span>Zonta Woman of Distinction Award (2014)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#FF8C00] rounded-full mt-2 flex-shrink-0"></span>
                            <span>Most Influential Woman, Business Direct Weekly (2003)</span>
                          </li>
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-gray-600 italic">
                          "Supporting and developing women leaders; honoring those who help women reach their full potential; and creating balance in leadership worldwide."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Leadership Note */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Additional leadership team profiles coming soon. Contact us to learn more about our board members.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
