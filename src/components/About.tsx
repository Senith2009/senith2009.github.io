import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '95%', label: 'Happy Clients' },
    { icon: Award, value: '100%', label: 'Project Delivery Rate' },
    { icon: Clock, value: '4+', label: 'Years Experience' },
    { icon: Target, value: '99%', label: 'Success Rate' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Senovra
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a cutting-edge IT company that transforms ambitious ideas into 
            exceptional digital experiences. Our passion for innovation drives us to 
            create software solutions that don't just meet expectations—they exceed them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">
              Crafting Digital Excellence
            </h3>
            <p className="text-gray-300 leading-relaxed">
              At Senovra, we believe that great software is more than just code—it's an 
              art form. Our team of expert developers and designers work in perfect 
              harmony to create solutions that are not only functional but beautiful, 
              intuitive, and future-ready.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From concept to deployment, we handle every aspect of your digital journey 
              with meticulous attention to detail and an unwavering commitment to quality.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
              <span className="text-cyan-400 font-semibold">Innovation Driven</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map(({ icon: Icon, value, label }, index) => (
                  <div 
                    key={label}
                    className="text-center group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{value}</div>
                    <div className="text-sm text-gray-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;