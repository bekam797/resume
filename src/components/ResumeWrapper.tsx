'use client'

import React from 'react'
import Resume from '../components/Resume'

const ResumeWrapper: React.FC = () => {
  const resumeData = {
    name: 'JOHN SPRING JOHNSON',
    title: 'Rocket Scientist',
    sectionTitles: {
      summary: 'Professional Summary',
      experience: 'Employment History',
      skills: 'Skills',
      education: 'Education',
      courses: 'Courses',
      hobbies: 'Hobbies',
    },
    contact: {
      address: '709 9TH W23RD ST, AUSTIN, USA, 55912',
      email: 'JOHN@EXAMPLE.COM',
      phone: '23434343434',
    },
    summary:
      'Rocket Scientist with 2 years of experience in designing and testing advanced propulsion systems, achieving notable efficiency improvements. Demonstrates a proven track record in digital transformation and cross-functional leadership, driving operational enhancements and aligning teams with mission objectives. Passionate about pioneering next-gen space exploration technologies and developing strategic roadmaps for future missions.',
    experience: [
      {
        title: 'ROCKET SCIENTIST',
        company: 'NASA',
        location: 'Washington DC',
        date: 'Jan 2024 - Mar 2024',
        responsibilities: [
          'Designed and tested propulsion systems, achieving a 12% increase in efficiency and reliability.',
          'Spearheaded digital transformation initiatives, optimizing workflows and enhancing productivity. Implemented cutting-edge solutions, driving significant operational improvements.',
          'Pioneered advanced propulsion systems, driving a 12% boost in efficiency. Led digital transformation, streamlining workflows for enhanced productivity.',
          'Conducted rigorous analyses of spacecraft systems, identifying critical areas for improvement. Implemented data-driven solutions, elevating mission success rates.',
          'Fostered cross-functional partnerships, aligning engineering teams with mission objectives. Facilitated knowledge sharing, accelerating project timelines.',
          'Conceptualized next-gen space exploration technologies, pushing boundaries of current capabilities. Developed strategic roadmaps for future missions.',
        ],
      },
      {
        title: 'JET PROPULSION ENGINEER',
        company: 'Lockheed Martin',
        location: 'Austin',
        date: 'Jan 2022 - Feb 2023',
        responsibilities: [
          'Spearheaded project management initiatives, delivering measurable results and optimizing team efficiency. Implemented streamlined processes, reducing turnaround times.',
          'Designed cutting-edge propulsion systems for next-gen aircraft, enhancing fuel efficiency and reducing environmental impact. Led cross-functional teams to prototype success.',
          'Conducted rigorous performance analyses on jet engines, identifying critical areas for improvement. Developed data-driven solutions, significantly boosting thrust-to-weight ratios.',
          'Optimized engine manufacturing processes, slashing production time and costs. Implemented lean methodologies, resulting in substantial savings and improved product quality.',
        ],
      },
    ],
    skills: [
      'Project Management',
      'Data Analysis',
      'Cross-Functional Leadership',
      'Lean Methodologies',
      'Performance Optimization',
      'Strategic Planning',
      'Digital Transformation',
    ],
    education: [
      {
        degree: 'BACHELORS DEGREE IN PHYSICS',
        school: 'Harvard University',
        location: 'Cambridge',
        date: '2015 - 2021',
        details: 'Graduated with honors',
      },
    ],
    courses: [
      {
        name: 'ADVANCED ROCKET PROPULSION SYSTEMS',
        institution: 'Institute of Space Sciences',
        date: '2014 - 2015',
      },
    ],
    hobbies: [],
  }

  return (
    <div className="flex h-screen">
      <div className="flex-1 overflow-auto">
        <Resume data={resumeData} />
      </div>
    </div>
  )
}

export default ResumeWrapper
