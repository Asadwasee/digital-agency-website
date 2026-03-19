import React from "react";
import AsadImg from '../../assets/Members/Asad.jpeg'
import JunaidImg from '../../assets/Members/Junaid.png'
import FasiullahImg from '../../assets/Members/Fasiullah.jpeg'
import ShoaibImg from '../../assets/Members/Shoaib.png'
import AhmadImg from '../../assets/Members/Ahmad.png'
import AbdullahImg from '../../assets/Members/Abdullah.jpeg'

const teamMembers = [
  {
    name: "Asad Wasee",
    role: "Team Lead",
    image: AsadImg,
  },
  {
    name: "Junaid Akbar",
    role: "Integration Specialist & QA Engineer",
    image: JunaidImg,
  },
  {
    name: "Fasiullah",
    role: "Frontend Developer",
    image: FasiullahImg,
  },
  {
    name: "Abdullah",
    role: "Frontend Developer",
    image: AbdullahImg,
  },

  {
    name: "Ahmed Abdullah",
    role: "Frontend Developer",
    image: AhmadImg,
  },
  {
    name: "Shoaib",
    role: "Frontend Developer",
    image: ShoaibImg,
  },
]

const About = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen">

      {/* Intro Section */}
      <section className="py-20 px-6 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Our Agency
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          We are a modern digital agency focused on creating high-quality
          web applications, beautiful UI/UX designs, and scalable
          software solutions. Our team combines creativity with strong
          technical expertise to deliver impactful digital experiences.
        </p>
      </section>

      {/* Mission Vision */}
      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            Our Mission
          </h2>
          <p className="text-gray-300">
            Our mission is to help businesses grow through innovative
            digital solutions. We aim to deliver reliable, scalable,
            and user-friendly products that create real value.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">
            Our Vision
          </h2>
          <p className="text-gray-300">
            Our vision is to become a leading global digital agency
            known for creativity, quality, and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:scale-105 transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">
                {member.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default About