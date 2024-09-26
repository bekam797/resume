import React from 'react'

interface ResumeData {
  name: string
  title: string
  contact: {
    address: string
    email: string
    phone: string
  }
  summary: string
  experience: Array<{
    title: string
    company: string
    location: string
    date: string
    responsibilities: string[]
  }>
  skills: string[]
  education: Array<{
    degree: string
    school: string
    location: string
    date: string
    details?: string
  }>
  courses: Array<{
    name: string
    institution: string
    date: string
  }>
  hobbies?: string[]
  sectionTitles: {
    summary: string
    experience: string
    skills: string
    education: string
    courses: string
    hobbies?: string
  }
}

const Resume: React.FC<{ data?: ResumeData }> = ({ data }) => {
  if (!data) {
    return <div>Loading resume data...</div>
  }

  const renderSection = (title: string, content: React.ReactNode) => (
    <section className="mb-6">
      <h2 className="mb-2 border-b-4 border-gray-300 text-center text-xl font-bold uppercase">
        {title}
      </h2>
      {content}
    </section>
  )

  return (
    <div className="mx-auto max-w-4xl bg-white p-8 font-serif text-gray-800">
      <header className="mb-6 text-center">
        <p className="mb-2 text-sm">
          {data.contact?.address || 'N/A'} • {data.contact?.email || 'N/A'}
        </p>
        <p className="mb-2 text-sm">{data.contact?.phone || 'N/A'}</p>
        <h1 className="mb-1 text-3xl font-bold">{data.name || 'N/A'}</h1>
        <p className="text-lg italic">{data.title || 'N/A'}</p>
      </header>

      {renderSection(data.sectionTitles.summary, <p>{data.summary || 'No summary provided.'}</p>)}

      {renderSection(
        data.sectionTitles.experience,
        data.experience && data.experience.length > 0 ? (
          data.experience.map((job, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-bold">{job.title}</h3>
                <span className="text-sm">{job.date}</span>
              </div>
              <p className="italic">
                {job.company}, {job.location}
              </p>
              <ul className="mt-2 list-inside list-disc">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No employment history available.</p>
        )
      )}

      {renderSection(
        data.sectionTitles.skills,
        <p>
          {data.skills && data.skills.length > 0 ? data.skills.join(', ') : 'No skills listed.'}
        </p>
      )}

      {renderSection(
        data.sectionTitles.education,
        data.education && data.education.length > 0 ? (
          data.education.map((edu, index) => (
            <div key={index} className="mb-2">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-bold">{edu.degree}</h3>
                <span className="text-sm">{edu.date}</span>
              </div>
              <p className="italic">
                {edu.school}, {edu.location}
              </p>
              {edu.details && <p className="text-sm">{edu.details}</p>}
            </div>
          ))
        ) : (
          <p>No education history available.</p>
        )
      )}

      {renderSection(
        data.sectionTitles.courses,
        data.courses && data.courses.length > 0 ? (
          data.courses.map((course, index) => (
            <div key={index} className="mb-2">
              <h3 className="text-lg font-bold">{course.name}</h3>
              <p className="italic">{course.institution}</p>
              <p className="text-sm">{course.date}</p>
            </div>
          ))
        ) : (
          <p>No courses listed.</p>
        )
      )}

      {data.hobbies &&
        data.hobbies.length > 0 &&
        data.sectionTitles.hobbies &&
        renderSection(data.sectionTitles.hobbies, <p>{data.hobbies.join(', ')}</p>)}
    </div>
  )
}

export default Resume
