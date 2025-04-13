
import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import PageBanner from '../components/ui/PageBanner';
import { projects } from '../data/projectsData';
import { Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeYear, setActiveYear] = useState<number | null>(null);

  // Get unique categories and years
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  const years = [...new Set(projects.map(project => project.year))].sort((a, b) => b - a);

  // Filter projects based on active filter
  const filteredProjects = projects.filter(project => {
    const categoryMatch = activeFilter === 'all' || project.category === activeFilter;
    const yearMatch = activeYear === null || project.year === activeYear;
    return categoryMatch && yearMatch;
  });

  return (
    <PageLayout>
      <PageBanner 
        title="Our Projects" 
        subtitle="Discover our successful projects and implementations"
        backgroundImage="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
      />

      <section className="py-16 bg-light-grey">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-navy">Our Completed Projects</h2>
              <p className="text-gray-600">Explore our portfolio of successful implementations</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-navy" />
              <span className="font-medium text-navy">Filters:</span>
            </div>
          </div>
          
          {/* Filter Buttons */}
          <div className="mb-8">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Filter by Category:</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === category
                        ? 'bg-navy text-white'
                        : 'bg-white text-navy hover:bg-navy/10'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Filter by Year:</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveYear(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeYear === null
                      ? 'bg-navy text-white'
                      : 'bg-white text-navy hover:bg-navy/10'
                  }`}
                >
                  All Years
                </button>
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeYear === year
                        ? 'bg-navy text-white'
                        : 'bg-white text-navy hover:bg-navy/10'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-navy text-white px-3 py-1 text-sm rounded-full">
                      {project.year}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-gold text-navy px-3 py-1 text-sm rounded-full">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-2">{project.title}</h3>
                    <div className="mb-4">
                      <p className="text-gray-700"><span className="font-medium">Client:</span> {project.client}</p>
                      <p className="text-gray-700"><span className="font-medium">Location:</span> {project.location}</p>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-navy mb-2">No projects found</h3>
              <p className="text-gray-600">
                No projects match the current filters. Please try different criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
