import React from 'react';
import { Code2, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Tailored solutions built with cutting-edge technologies to solve your unique business challenges.',
      features: ['Full-Stack Development', 'API Integration', 'Cloud Solutions']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Stunning, user-centric designs that captivate audiences and drive engagement.',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites that perform flawlessly across all devices and platforms.',
      features: ['React/Next.js', 'Performance Optimization', 'SEO Ready']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'App Store Optimization']
    },
    {
      icon: Database,
      title: 'Backend Solutions',
      description: 'Robust, scalable backend architectures that power your applications reliably.',
      features: ['Database Design', 'API Development', 'Cloud Infrastructure']
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Comprehensive digital strategies that modernize your business processes and workflows.',
      features: ['Process Automation', 'Legacy Modernization', 'Digital Strategy']
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your business to new heights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-cyan-400/20 animate-gradient-x"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;