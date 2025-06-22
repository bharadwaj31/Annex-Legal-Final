import React, { useState, useEffect } from "react";
import { ArrowRight, Scale, Shield, Users, Award, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const practiceAreas = [
    {
      icon: Scale,
      title: "Corporate Law",
      description: "Comprehensive corporate legal services including mergers, acquisitions, and corporate governance."
    },
    {
      icon: Shield,
      title: "Commercial Litigation",
      description: "Expert representation in complex commercial disputes and litigation matters."
    },
    {
      icon: Users,
      title: "Employment Law",
      description: "Strategic counsel on employment matters, compliance, and workplace disputes."
    },
    {
      icon: Award,
      title: "Intellectual Property",
      description: "Protection and enforcement of patents, trademarks, and intellectual property rights."
    }
  ];

  const Attorney = [
    {
      name: "Pooja Rao Putrevu",position: "Managing Partner" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Disclaimer Popup */}
      {showDisclaimer && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
            animation: 'fadeIn 0.5s ease-out'
          }}
        >
          <div 
            className="relative max-w-2xl w-full text-white rounded-xl shadow-2xl overflow-hidden"
            style={{
              backgroundColor: '#003934',
              background: 'linear-gradient(135deg, #003934 0%, #004d42 50%, #003934 100%)',
              animation: 'disclaimerSlideIn 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 25px 50px rgba(0, 57, 52, 0.5)'
            }}
          >
            {/* Animated background elements */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                background: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.2) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                animation: 'pulse 4s ease-in-out infinite alternate'
              }}
            ></div>
            
            {/* Header */}
            <div className="relative z-10 p-6 border-b border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Shield 
                    className="h-8 w-8 text-yellow-400 mr-3"
                    style={{
                      filter: 'drop-shadow(0 4px 8px rgba(251, 191, 36, 0.3))',
                      animation: 'float 3s ease-in-out infinite'
                    }}
                  />
                  <h2 
                    className="text-2xl font-bold"
                    style={{
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                      animation: 'slideInLeft 0.8s ease-out 0.2s both'
                    }}
                  >
                    Legal Disclaimer
                  </h2>
                </div>
                <button
                  onClick={() => setShowDisclaimer(false)}
                  className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-90 p-2 rounded-full hover:bg-white/10"
                  style={{
                    animation: 'slideInRight 0.8s ease-out 0.3s both'
                  }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div 
              className="relative z-10 p-6"
              style={{
                animation: 'fadeInUp 1s ease-out 0.4s both'
              }}
            >
              <p className="text-blue-100 leading-relaxed text-sm md:text-base">
                This page contains general information regarding <span className="text-yellow-400 font-semibold">Annex Legal</span> and is not intended as a solicitation or an advertisement of its services or any invitation or inducement of any sort. Nothing contained in this website constitutes legal advice or creation of a lawyer-client relationship. If you have any issues, you must seek legal advice. <span className="text-yellow-400 font-semibold">Annex Legal</span> is not liable for the consequences of any action taken by relying on the material/information provided on this website. For more information, please read our terms of use and our privacy policy.
              </p>
            </div>
            
            {/* Footer */}
            <div 
              className="relative z-10 p-6 border-t border-white/20 flex justify-end"
              style={{
                animation: 'slideInUp 1s ease-out 0.6s both'
              }}
            >
              <button
                onClick={() => setShowDisclaimer(false)}
                className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:bg-yellow-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                style={{
                  boxShadow: '0 4px 15px rgba(251, 191, 36, 0.3)'
                }}
              >
                I Understand
              </button>
            </div>
            
            {/* Decorative elements */}
            <div 
              className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full"
              style={{
                animation: 'float 6s ease-in-out infinite'
              }}
            ></div>
            <div 
              className="absolute bottom-4 left-4 w-12 h-12 border border-yellow-400/30 rounded-full"
              style={{
                animation: 'float 8s ease-in-out infinite reverse'
              }}
            ></div>
          </div>
        </div>
      )}
      {/* Navigation */}
      <nav 
        className="bg-white shadow-sm border-b fixed w-full top-0 z-50 transition-all duration-500 ease-out"
        style={{
          transform: `translateY(${scrollY > 100 ? '0' : '0'})`,
          backgroundColor: scrollY > 100 ? 'rgba(255, 255, 255, 0.95)' : 'white',
          backdropFilter: scrollY > 100 ? 'blur(10px)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex items-center transform transition-all duration-700 ease-out hover:scale-105"
              style={{
                animation: 'slideInLeft 1s ease-out'
              }}
            >
              <img 
                src="/logo123.png" 
                alt="Logo" 
                className="h-8 w-8 mr-2 transition-transform duration-500 hover:rotate-12" 
              />
              <span 
                className="text-2xl font-bold transition-all duration-300" 
                style={{ 
                  color: '#003934',
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              > 
                Annex Legal
              </span>
            </div>
            <div 
              className="hidden md:flex space-x-8"
              style={{
                animation: 'slideInRight 1s ease-out'
              }}
            >
              {['Services', 'About', 'Attorney', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-700 font-medium relative overflow-hidden transition-all duration-300 hover:text-opacity-80"
                  style={{ 
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    animationDelay: `${index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
(e.currentTarget as HTMLElement).style.color = '#003934';

(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';

                  }}
                  onMouseLeave={(e) => {
(e.currentTarget as HTMLElement).style.color = '';

(e.currentTarget as HTMLElement).style.transform = 'translateY(0)';

                  }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="text-white py-20 relative overflow-hidden"
        style={{ 
          backgroundColor: '#003934',
          background: `linear-gradient(135deg, #003934 0%, #004d42 50%, #003934 100%)`,
          marginTop: '64px'
        }}
      >
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            animation: 'pulse 4s ease-in-out infinite alternate'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 
              className="text-5xl md:text-6xl font-bold mb-6 transform transition-all duration-1000 ease-out"
              style={{
                animation: 'fadeInUp 1.2s ease-out',
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                background: 'linear-gradient(to bottom, #ffffff, #e0e0e0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Excellence in
              <span 
                className="block transition-all duration-700 hover:scale-105"
                style={{
                  background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 3s ease-in-out infinite',
                  textShadow: '0 0 30px rgba(251, 191, 36, 0.5)'
                }}
              >
                Corporate Law
              </span>
            </h1>
            <p 
              className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto transform transition-all duration-1000 ease-out"
              style={{
                animation: 'fadeInUp 1.4s ease-out',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              Your Partner-In-Law
            </p>
          </div>
        </div>
        
        {/* Floating elements */}
        <div 
          className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"
          style={{
            animation: 'float 6s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute bottom-10 right-10 w-16 h-16 border border-yellow-400/30 rounded-full"
          style={{
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        ></div>
      </section>

      {/* Practice Areas */}
      <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(45deg, #003934 25%, transparent 25%), 
                             linear-gradient(-45deg, #003934 25%, transparent 25%)`,
            backgroundSize: '60px 60px',
            animation: 'slide 20s linear infinite'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            className="text-center mb-16"
            data-animate
            id="services-header"
            style={{
              transform: isVisible['services-header'] ? 'translateY(0)' : 'translateY(50px)',
              opacity: isVisible['services-header'] ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Practice Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal services tailored to meet the diverse needs of modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 ease-out border-0 shadow-md bg-white relative overflow-hidden cursor-pointer"
                data-animate
                id={`practice-${index}`}
                style={{
                  transform: isVisible[`practice-${index}`] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                  opacity: isVisible[`practice-${index}`] ? 1 : 0,
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
                
                <CardHeader className="text-center relative z-10">
                  <area.icon 
                    className="h-12 w-12 mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" 
                    style={{ 
                      color: '#003934',
                      filter: 'drop-shadow(0 4px 8px rgba(0,57,52,0.2))'
                    }} 
                  />
                  <CardTitle className="text-xl text-gray-900 transition-colors duration-300 group-hover:text-blue-900">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 text-center transition-colors duration-300 group-hover:text-gray-700">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-1/3 h-full opacity-5"
          style={{
            background: 'linear-gradient(45deg, #003934, transparent)',
            clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%)'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              data-animate
              id="about-content"
              style={{
                transform: isVisible['about-content'] ? 'translateX(0)' : 'translateX(-50px)',
                opacity: isVisible['about-content'] ? 1 : 0,
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 relative">
                A Trusted Legal Counsel 
                <div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-1000"
                  style={{
                    width: isVisible['about-content'] ? '60%' : '0%'
                  }}
                ></div>
              </h2>
              <p className="text-lg text-gray-600 mb-6 transition-all duration-500 hover:text-gray-700">
                Annex Legal is a full-service corporate law firm offering strategic, business-focused legal 
                solutions across industries. With deep expertise in corporate consultancy, contract negotiation,
                 employment law, and regulatory compliance, the firm supports a diverse clientele including 
                 startups, multinational companies, IT & ITES firms, manufacturers, 
                 educational institutions, and real estate developers.
              </p>
              <p className="text-lg text-gray-600 mb-8 transition-all duration-500 hover:text-gray-700">
                From structuring contracts and managing cross-border transactions to workplace compliance 
                and dispute resolution, Annex Legal delivers clear, practical advice tailored to each
                 client's needs. Committed to precision, professionalism, and long-term client partnerships,
                 Annex Legal stands as a trusted advisor in an evolving legal and business landscape.
              </p>
              
              <div 
                className="grid grid-cols-3 gap-8"
                data-animate
                id="stats"
              >
                {[
                  { number: '500+', label: 'Clients Served' },
                  { number: '5+', label: 'Years Experience' },
                  { number: '98%', label: 'Success Rate' }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center group cursor-pointer"
                    style={{
                      transform: isVisible['stats'] ? 'translateY(0)' : 'translateY(30px)',
                      opacity: isVisible['stats'] ? 1 : 0,
                      transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`
                    }}
                  >
                    <div 
                      className="text-3xl font-bold transition-all duration-300 group-hover:scale-110" 
                      style={{ 
                        color: '#003934',
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div
              className="rounded-lg p-8 text-white relative overflow-hidden group"
              data-animate
              id="why-choose"
              style={{ 
                background: 'linear-gradient(135deg, #003934 0%, #004d42 50%, #003934 100%)',
                transform: isVisible['why-choose'] ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.95)',
                opacity: isVisible['why-choose'] ? 1 : 0,
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
                boxShadow: '0 20px 40px rgba(0,57,52,0.3)'
              }}
            >
              <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)'
                }}
              ></div>
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Why Choose Annex Legal?</h3>
              <ul className="space-y-4 relative z-10">
                {[
                  { icon: Shield, text: 'Trusted' },
                  { icon: Users, text: 'Responsive' },
                  { icon: Scale, text: 'Practical' },
                  { icon: Award, text: 'Experienced' }
                ].map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start group/item transition-all duration-300 hover:transform hover:translate-x-2"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <item.icon className="h-6 w-6 text-yellow-400 mr-3 mt-0.5 flex-shrink-0 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-6" />
                    <span className="transition-all duration-300 group-hover/item:text-yellow-100">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Attorneys */}
      <section id="attorneys" className="py-20 bg-gray-50 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003934' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'move 10s linear infinite'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            className="text-center mb-16"
            data-animate
            id="attorneys-header"
            style={{
              transform: isVisible['attorneys-header'] ? 'translateY(0)' : 'translateY(50px)',
              opacity: isVisible['attorneys-header'] ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Attorneys</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our experienced legal professionals committed to your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 justify-center">
            {Attorney.map((attorney, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-2xl transition-all duration-700 ease-out max-w-md mx-auto group relative overflow-hidden bg-white"
                data-animate
                id={`attorney-${index}`}
                style={{
                  transform: isVisible[`attorney-${index}`] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                  opacity: isVisible[`attorney-${index}`] ? 1 : 0,
                  transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.3}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
                
                <CardHeader className="relative z-10">
                  <div
                    className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-500 group-hover:scale-105 relative overflow-hidden"
                    style={{ backgroundColor: '#003934' }}
                  >
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    ></div>
                    <Users className="h-16 w-16 text-white transition-all duration-500 group-hover:scale-110 relative z-10" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 transition-all duration-300 group-hover:text-blue-900">
                    {attorney.name}
                  </CardTitle>
                  <CardDescription className="text-blue-900 font-semibold transition-all duration-300 group-hover:text-blue-700">
                    {attorney.position}
                  </CardDescription>
                  <CardDescription className="text-gray-600 font-medium transition-all duration-300 group-hover:text-gray-800">
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-20 text-white relative overflow-hidden" 
        style={{ 
          background: `linear-gradient(135deg, #003934 0%, #004d42 50%, #003934 100%)`
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                        radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            animation: 'pulse 6s ease-in-out infinite alternate'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            className="text-center mb-16"
            data-animate
            id="contact-header"
            style={{
              transform: isVisible['contact-header'] ? 'translateY(0)' : 'translateY(50px)',
              opacity: isVisible['contact-header'] ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to discuss your legal needs? Contact us for a consultation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: 'Call Us', content: '+91 99999 99999', subtitle: 'Mon-Fri 9AM-7PM' },
              { icon: Mail, title: 'Email Us', content: 'info@annexlegal.co.in',  },
              { icon: MapPin, title: 'Office', content: 'Hyderbad, TG, IN', subtitle: '' }
            ].map((contact, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 text-white backdrop-blur-sm relative overflow-hidden group"
                data-animate
                id={`contact-${index}`}
                style={{
                  transform: isVisible[`contact-${index}`] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                  opacity: isVisible[`contact-${index}`] ? 1 : 0,
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
                
                <CardHeader className="text-center relative z-10">
                  <contact.icon
                    className="h-12 w-12 text-yellow-400 mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      filter: 'drop-shadow(0 4px 8px rgba(251, 191, 36, 0.3))'
                    }}
                  />
                  <CardTitle className="transition-all duration-300 group-hover:text-yellow-100">
                    {contact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <p className={`${index === 0 ? 'text-2xl font-bold' : 'text-lg'} transition-all duration-300 group-hover:text-yellow-100`}>
                    {contact.content.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < contact.content.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  {contact.subtitle && (
                    <p className="text-blue-100 transition-all duration-300 group-hover:text-blue-50">
                      {contact.subtitle}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(45deg, #ffffff 25%, transparent 25%), 
                             linear-gradient(-45deg, #ffffff 25%, transparent 25%)`,
            backgroundSize: '40px 40px',
            animation: 'slide 15s linear infinite reverse'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            className="grid md:grid-cols-4 gap-8"
            data-animate
            id="footer-content"
            style={{
              transform: isVisible['footer-content'] ? 'translateY(0)' : 'translateY(30px)',
              opacity: isVisible['footer-content'] ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="group">
              <div className="flex items-center mb-4 transition-all duration-300 group-hover:scale-105">
                <img 
                  src="/logo123.png" 
                  alt="Logo" 
                  className="h-8 w-8 mr-2 transition-transform duration-500 group-hover:rotate-12" 
                />
                <span className="text-2xl font-bold transition-colors duration-300 group-hover:text-yellow-400">
                  Annex Legal
                </span>
              </div>
              <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                Excellence in corporate law. Strategic counsel for modern businesses.
              </p>
            </div>
            
            {[
              { title: 'Practice Areas', items: ['Corporate Law', 'Commercial Litigation', 'Employment Law', 'Intellectual Property'] },
              { title: 'Quick Links', items: [
                { text: 'About Us', href: '#about' },
                { text: 'Our Team', href: '#attorneys' },
                { text: 'Contact', href: '#contact' },
                { text: 'Resources', href: '#' }
              ] },
              { title: 'Contact Info', items: ['+91 72078 62355', 'info@annexlegal.co.in'] }
            ].map((section, index) => (
              <div key={index} className="group">
                <h4 className="text-lg font-semibold mb-4 transition-colors duration-300 group-hover:text-yellow-400">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-gray-400">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="transition-all duration-300 hover:text-white hover:translate-x-1">
                      {typeof item === 'string' ? (
                        item
                      ) : (
                        <a href={item.href} className="hover:text-white transition-colors duration-300">
                          {item.text}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div 
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
            style={{
              animation: 'fadeIn 2s ease-out 1s both'
            }}
          >
            <p className="transition-colors duration-300 hover:text-white">
              &copy; 2025 Annex Legal. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(60px);
          }
        }

        @keyframes move {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(60px) translateY(60px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes disclaimerSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;