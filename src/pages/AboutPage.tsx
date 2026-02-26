import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: <Target size={32} />, title: "Innovation", desc: "Pioneering breakthrough technologies" },
    { icon: <Users size={32} />, title: "Collaboration", desc: "Fostering global partnerships" },
    { icon: <Globe size={32} />, title: "Sustainability", desc: "Enabling clean energy transition" },
    { icon: <Award size={32} />, title: "Inclusivity", desc: "Supporting developing nations" },
  ];

  const leaders = [
    { name: "Jin Qinxian", title: "Director", org: "President of Tsinghua EIRI" },
    { name: "Ouyang Minggao", title: "Scientific Advisory Committee Chair", org: "CAS Member, Tsinghua Professor" },
    { name: "Zhang Guoqiang", title: "Board Member", org: "Chairman of Beijing SinoHytec" },
  ];

  const guidingOrgs = [
    { name: "UNIDO", desc: "United Nations Industrial Development Organization" },
    { name: "CICETE", desc: "China International Center for Economic and Technical Exchanges" },
    { name: "BEIT", desc: "Beijing Municipal Bureau of Economy and Information Technology" },
    { name: "TIDRI", desc: "Tsinghua Industrial Development Research Institute" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-ihec-blue text-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-1 text-white mb-4">About IHEC</h1>
            <p className="text-lg text-gray-100 max-w-2xl">
              Building the future of global hydrogen energy innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 text-ihec-blue mb-6">Who We Are</h2>
              <p className="text-body mb-4">
                The International Hydrogen Energy Centre (IHEC) is a globally influential technology innovation hub established in July 2021 with support from UNIDO and the Chinese government.
              </p>
              <p className="text-body mb-4">
                IHEC operates as a platform for hydrogen energy technology development, application demonstration, and international cooperation. We connect research institutions, enterprises, and governments to accelerate the global hydrogen energy transition.
              </p>
              <p className="text-body">
                Headquartered in Beijing with 2,200 square meters of advanced facilities, IHEC houses a modern hydrogen energy exhibition hall and serves as a global hub for hydrogen energy innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-light-gray p-8 rounded-lg"
            >
              <h3 className="heading-3 text-ihec-blue mb-6">Key Facts</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-ihec-green font-bold">✓</span>
                  <span>Established: July 7, 2021</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ihec-green font-bold">✓</span>
                  <span>Location: Beijing, China</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ihec-green font-bold">✓</span>
                  <span>Facility: 2,200 m² headquarters</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ihec-green font-bold">✓</span>
                  <span>Global Network: 50+ countries</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ihec-green font-bold">✓</span>
                  <span>Partners: 300+ organizations</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-light-gray section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-ihec-blue">Our Mission & Vision</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg"
            >
              <h3 className="heading-3 text-ihec-blue mb-4">Mission</h3>
              <p className="text-body">
                To promote hydrogen energy technology development and application, advance international hydrogen cooperation, and support achieving clean and renewable energy goals in alignment with the UN Sustainable Development Goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg"
            >
              <h3 className="heading-3 text-ihec-blue mb-4">Vision</h3>
              <p className="text-body">
                To become a globally influential technology innovation center that drives net-zero industrial development and wealth generation through hydrogen energy, while fostering inclusive and sustainable partnerships worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-2 text-ihec-blue text-center mb-12"
          >
            Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-light-gray p-8 rounded-lg text-center"
              >
                <div className="text-ihec-green mb-4 flex justify-center">{value.icon}</div>
                <h3 className="heading-4 text-neutral-gray mb-2">{value.title}</h3>
                <p className="text-neutral-gray">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-light-gray section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-2 text-ihec-blue text-center mb-12"
          >
            Leadership Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-lg text-center"
              >
                <div className="w-20 h-20 bg-ihec-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">{leader.name[0]}</span>
                </div>
                <h3 className="heading-4 text-neutral-gray">{leader.name}</h3>
                <p className="text-ihec-blue font-semibold text-sm mb-2">{leader.title}</p>
                <p className="text-neutral-gray text-sm">{leader.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Organizations */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-2 text-ihec-blue text-center mb-12"
          >
            Guiding Organizations
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guidingOrgs.map((org, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-light-gray p-6 rounded-lg"
              >
                <h3 className="heading-4 text-ihec-blue mb-3">{org.name}</h3>
                <p className="text-neutral-gray text-sm">{org.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
