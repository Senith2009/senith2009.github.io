import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Personalized Diabetes Prediction & Diet Recommendation System',
      description: 'An AI-powered web application that predicts diabetes risk and provides personalized diet recommendations based on health metrics and user preferences.',
      fullDescription: 'This project is a machine learning–driven health platform designed to support individuals in managing and preventing diabetes. Using a combination of predictive modeling and recommendation algorithms, the system analyzes user input such as blood sugar levels, BMI, and lifestyle factors. This solution demonstrates the intersection of machine learning, health informatics and user-centric design, aiming to empower patients with actionable, personalized insights for healthier living. ',
      image: '/EatSafe.png',
      tags: ['Machine Learning', 'Healthcare AI', 'Diabetes Prediction', 'Personalization', 'Diet Recommendation', 'Web Application'],
      category: 'Web Application',
      timeline: '6 months',
      teamSize: '1 developer',
      technologies: ['Python', 'Railway', 'Supabase', 'Dash', 'PostgreSQL', 'NeuralFM']
    },
    {
      title: 'Smart POS System for Retail & Restaurant Management',
      description: 'A modern Point-of-Sale (POS) system designed to streamline billing, inventory, and customer management for businesses.',
      fullDescription: 'This project is a full-featured Point-of-Sale (POS) application built to simplify business operations for retail shops and restaurants. It integrates billing, inventory tracking and customer management into one seamless system. The system was developed using modern web technologies, ensuring real-time data sync and cross-device accessibility. Designed with usability in mind, it reduces operational bottlenecks and enhances decision-making through clear insights. This POS solution showcases the blend of business logic, database management and clean UI design, offering an efficient tool for day-to-day business operations.',
      image: '/POS.png',
      tags: ['POS System', 'Business Management', 'Inventory Tracking', 'Billing System', 'Retail Tech', 'Restaurant Management'],
      category: 'Web Application',
      timeline: '4 months',
      teamSize: '1 developer',
      technologies: ['Java', 'SQL', 'JSP', 'AWS']
    },
    {
      title: 'Salon Management & Booking Application',
      description: 'A digital solution for salons and spas that enables online appointment booking, customer management, and service scheduling.',
      fullDescription: 'This project is a comprehensive salon management application designed to enhance customer experience and streamline salon operations. It provides both clients and salon staff with an intuitive, user-friendly interface to handle bookings, services and customer engagement efficiently. The app was developed with mobile-first responsiveness, ensuring clients can book appointments easily via smartphone, while salon staff manage operations efficiently through a centralized dashboard. This salon app highlights a strong focus on user-centered design, database integration and business workflow automation, making it a valuable digital tool for modern beauty businesses.',
      image: '/SalonZen.png',
      tags: ['Salon Management', 'Appointment Booking', 'Beauty & Wellness Tech', 'Customer Management', 'Scheduling App', 'Business Automation', 'Mobile Responsive'],
      category: 'Web Application',
      timeline: '4 months',
      teamSize: '2 developers',
      technologies: ['Laravel', 'SQLite']
    },
    {
      title: 'SafeSure – Motor Vehicle Insurance Mobile App',
      description: 'A mobile application for managing motor vehicle insurance, allowing users to submit claims, take photos of incidents, and track policies seamlessly.',
      fullDescription: 'SafeSure is a mobile-first insurance application designed to simplify motor vehicle insurance management for users. The app integrates policy tracking, claims submission and documentation into a smooth, user-friendly interface, reducing paperwork and improving response times. SafeSure demonstrates the integration of mobile development, UI/UX design and real-time data handling to create a practical solution for both users and insurance providers. It emphasizes efficiency, security, and convenience, making insurance processes simpler and faster.',
      image: '/SafeSure.png',
      tags: ['Insurance Tech', 'Motor Vehicle Insurance', 'Claims Management', 'Photo Documentation', 'UI/UX Design', 'Mobile Development', 'Secure App', 'Mobile App'],
      category: 'Mobile Application',
      timeline: '6 months',
      teamSize: '2 developers',
      technologies: ['Flutter', 'Firebase', 'Java']
    },
    {
      title: 'Job Networking & Project Showcase Platform',
      description: 'A professional networking web application where users can find jobs, connect with opportunities and showcase their projects.',
      fullDescription: 'It is a career-focused platform designed to connect job seekers, professionals and employers while also giving users the ability to manage and display their projects. Inspired by platforms like LinkedIn, it combines job searching, project management, and professional showcasing into one solution. It demonstrates skills in web application development, full-stack design, database integration, and user-centered functionality. It merges career networking with project showcasing, creating a platform where professionals can both find jobs and display their work effectively.',
      image: '/Job.png',
      tags: ['Professional Networking', 'Job Platform', 'Project Portfolio', 'Career Development', 'Full-Stack Development', 'Web Application'],
      category: 'Web Application',
      timeline: '2 months',
      teamSize: '4 developers',
      technologies: ['React.js', 'Node.js', 'SQL', 'Tailwind CSS', 'Vercel']
    },
    {
      title: 'Smart Food Delivery App',
      description: 'A mobile-first food delivery application connecting customers with restaurants for fast and convenient ordering.',
      fullDescription: 'It is a modern food delivery solution designed to simplify the way customers order meals and how restaurants manage deliveries. The application provides an intuitive mobile interface for browsing restaurants, exploring menus, placing orders and tracking deliveries in real time. This project highlights expertise in mobile app development, UI/UX design, database integration and scalable backend systems, making it a robust solution for the growing food-tech space.',
      image: '/Food.png',
      tags: ['Food Delivery', 'Restaurant Management', 'E-Commerce', 'Real-Time Tracking', 'Payments Integration', 'UI/UX', 'Mobile App'],
      category: 'Mobile Application',
      timeline: '1 months',
      teamSize: '5 developers',
      technologies: ['Flutter', 'Firebase', 'Figma']
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence with innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-xs text-cyan-400 font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700/50 border border-gray-600/50 rounded-md text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <button 
                  onClick={() => setSelectedProject(index)}
                  className="flex items-center text-cyan-400 hover:text-white transition-colors duration-300 group/link"
                >
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </button>
              </div>


              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedProject !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            ></div>
            
            {/* Modal Content */}
            <div className="relative bg-gray-800 border border-cyan-400/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
              {/* Modal Header */}
              <div className="sticky top-0 bg-gray-800 border-b border-gray-700/50 p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">
                  {projects[selectedProject].title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-gray-400 hover:text-white" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {/* Project Image */}
                <div className="mb-6">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>

                {/* Project Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-700/30 rounded-xl p-4 border border-gray-600/30">
                    <span className="text-cyan-400 font-medium text-sm">Timeline</span>
                    <p className="text-white text-lg font-semibold">{projects[selectedProject].timeline}</p>
                  </div>
                  <div className="bg-gray-700/30 rounded-xl p-4 border border-gray-600/30">
                    <span className="text-cyan-400 font-medium text-sm">Team Size</span>
                    <p className="text-white text-lg font-semibold">{projects[selectedProject].teamSize}</p>
                  </div>
                  <div className="bg-gray-700/30 rounded-xl p-4 border border-gray-600/30">
                    <span className="text-cyan-400 font-medium text-sm">Category</span>
                    <p className="text-white text-lg font-semibold">{projects[selectedProject].category}</p>
                  </div>
                </div>

                {/* Full Description */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Project Overview</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {projects[selectedProject].fullDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg text-sm text-cyan-400 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-md text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;