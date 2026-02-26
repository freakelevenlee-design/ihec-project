import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Mail, MapPin, Phone } from 'lucide-react';

/* ============== NEWS PAGE ============== */
export function NewsPage() {
  const [filter, setFilter] = useState('all');

  const newsItems = [
    { id: 1, date: 'Mar 15, 2026', category: 'Innovation', title: 'IHEC Innovation Competition Opens Global Submissions', excerpt: 'Join global innovators in hydrogen energy...' },
    { id: 2, date: 'Mar 8, 2026', category: 'Project', title: 'Baotou Green Hydrogen Project Reaches Major Milestone', excerpt: 'Green ammonia production facility advances...' },
    { id: 3, date: 'Mar 1, 2026', category: 'Event', title: '2025 International Hydrogen Energy Forum Concludes', excerpt: 'Bringing together global hydrogen leaders...' },
    { id: 4, date: 'Feb 22, 2026', category: 'Partnership', title: 'IHEC Partners with European Green Hydrogen Initiative', excerpt: 'Expanding international cooperation networks...' },
  ];

  const filtered = filter === 'all' ? newsItems : newsItems.filter(item => item.category === filter);

  return (
    <div className="bg-white">
      <section className="bg-ihec-blue text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-4">News & Events</h1>
          <p className="text-lg text-gray-100">Stay updated with the latest hydrogen energy innovations</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex gap-4 mb-8">
            {['all', 'Innovation', 'Project', 'Event', 'Partnership'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  filter === cat ? 'bg-ihec-blue text-white' : 'bg-light-gray text-neutral-gray hover:bg-gray-200'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-light-gray p-6 rounded-lg hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-bold text-ihec-green uppercase">{item.category}</span>
                  <span className="text-xs text-neutral-gray">{item.date}</span>
                </div>
                <h3 className="heading-3 text-neutral-gray mb-3">{item.title}</h3>
                <p className="text-neutral-gray mb-4">{item.excerpt}</p>
                <a href="#" className="text-ihec-blue font-semibold hover:text-ihec-blue-dark">Read Full Article →</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============== SERVICES PAGE ============== */
export function ServicesPage() {
  const services = [
    {
      title: 'Technology R&D',
      desc: 'Research and development of hydrogen production, storage, transportation, and fuel cell technologies',
      achievements: ['3+ test platforms', '20+ key technologies PoC'],
      icon: '⚡'
    },
    {
      title: 'Application Demonstration',
      desc: 'Real-world deployment of hydrogen technology across transportation, chemicals, and metallurgy',
      achievements: ['850+ fuel cell buses', '320+ million km operation', '10+ demonstration projects'],
      icon: '🚀'
    },
    {
      title: 'Knowledge Dissemination',
      desc: 'Publishing industry reports, research papers, and educational materials',
      achievements: ['Industry reports', 'Technical publications', 'Training programs'],
      icon: '📚'
    },
    {
      title: 'Capacity Building',
      desc: 'Training and support for developing hydrogen energy industries',
      achievements: ['Developer training', 'Policy consultation', 'Skill enhancement'],
      icon: '👥'
    },
    {
      title: 'Policy & Industry Research',
      desc: 'Strategic research and consulting on hydrogen energy development',
      achievements: ['Industry analysis', 'Policy recommendations', 'Market research'],
      icon: '📊'
    },
    {
      title: 'International Cooperation',
      desc: 'Building global partnerships and cross-border hydrogen networks',
      achievements: ['50+ countries', '300+ partners', 'Multi-stakeholder platform'],
      icon: '🌍'
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-ihec-blue text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-4">Our Services</h1>
          <p className="text-lg text-gray-100">Comprehensive hydrogen energy solutions</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-light-gray p-8 rounded-lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="heading-3 text-neutral-gray mb-3">{service.title}</h3>
                <p className="text-neutral-gray mb-6">{service.desc}</p>
                <div className="space-y-2">
                  {service.achievements.map((item, i) => (
                    <p key={i} className="text-sm text-ihec-blue">✓ {item}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============== PROJECTS PAGE ============== */
export function ProjectsPage() {
  const projects = [
    {
      title: 'Hydrogen Commercial Vehicles',
      location: 'Zhangjiakou, Hebei',
      status: 'Operational',
      highlights: ['850+ FCE buses', '320M km operation', '2000+ tons CO2 reduction', '2022 Winter Olympics'],
      desc: 'World\'s largest hydrogen fuel cell bus demonstration program'
    },
    {
      title: 'Green Hydrogen Metallurgy',
      location: 'Baotou, Inner Mongolia',
      status: 'Under Construction (2025)',
      highlights: ['100,000 tons electrolysis', 'Green ammonia synthesis', 'Steel production decarbonization'],
      desc: 'Global first comprehensive green hydrogen and metallurgy integration'
    },
    {
      title: 'Hydrogen Logistics Hub',
      location: 'Daxing, Beijing',
      status: 'Development Phase',
      highlights: ['Global largest refueling station', 'Logistics vehicle demo', 'Infrastructure network'],
      desc: 'Hydrogen fuel cell logistics and infrastructure demonstration'
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-ihec-blue text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-4">Demonstration Projects</h1>
          <p className="text-lg text-gray-100">Large-scale hydrogen energy implementation</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-light-gray p-8 rounded-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="heading-3 text-neutral-gray mb-2">{project.title}</h3>
                    <p className="text-neutral-gray">{project.location}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    project.status.includes('Operational') ? 'bg-ihec-green text-white' : 'bg-ihec-blue text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-neutral-gray mb-6">{project.desc}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="bg-white p-4 rounded text-center">
                      <p className="text-sm text-neutral-gray">{h}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============== RESOURCES PAGE ============== */
export function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    { title: 'Hydrogen Industry 2021-2035 Development Plan', type: 'Report', year: 2022 },
    { title: 'International Hydrogen Energy Centre Progress Report 2022', type: 'Report', year: 2023 },
    { title: 'Green Hydrogen Production Technologies', type: 'Technical Paper', year: 2024 },
    { title: 'UNIDO Global Programme for Hydrogen in Industry', type: 'Guide', year: 2025 },
  ];

  const filtered = resources.filter(r => 
    r.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white">
      <section className="bg-ihec-blue text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-4">Resources</h1>
          <p className="text-lg text-gray-100">Publications, reports, and industry insights</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-8 relative">
            <Search className="absolute left-3 top-3 text-neutral-gray" size={20} />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-ihec-blue"
            />
          </div>

          <div className="space-y-4">
            {filtered.map((res, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-light-gray p-6 rounded-lg flex justify-between items-center"
              >
                <div>
                  <h3 className="heading-4 text-neutral-gray mb-2">{res.title}</h3>
                  <p className="text-sm text-neutral-gray">{res.type} • {res.year}</p>
                </div>
                <button className="btn-primary text-sm">Download</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============== CONTACT PAGE ============== */
export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-white">
      <section className="bg-ihec-blue text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-4">Contact Us</h1>
          <p className="text-lg text-gray-100">Get in touch with our team</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-light-gray p-8 rounded-lg"
            >
              <Mail className="text-ihec-green mb-4" size={32} />
              <h3 className="heading-4 text-neutral-gray mb-2">Email</h3>
              <p className="text-neutral-gray">IHEC@hycentre.org.cn</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-light-gray p-8 rounded-lg"
            >
              <Phone className="text-ihec-green mb-4" size={32} />
              <h3 className="heading-4 text-neutral-gray mb-2">Phone</h3>
              <p className="text-neutral-gray">+86 10-82355885</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-light-gray p-8 rounded-lg"
            >
              <MapPin className="text-ihec-green mb-4" size={32} />
              <h3 className="heading-4 text-neutral-gray mb-2">Address</h3>
              <p className="text-neutral-gray text-sm">1st Floor, Building 7, DongSheng International Science Park, Beijing</p>
            </motion.div>
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-light-gray p-8 rounded-lg"
            >
              <div className="mb-6">
                <label className="block text-neutral-gray font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-ihec-blue"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-neutral-gray font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-ihec-blue"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-neutral-gray font-semibold mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-ihec-blue"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
