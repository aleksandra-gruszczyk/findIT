// Data prep for 2nd and 3rd seeds

const mockData = [
  {company: "fingo", skills: ['Java']},
  {company: "tribe", skills: ['.Net', 'React Native']},
  {company: "radford", skills: ['.Net', 'C#', 'HTML', 'CSS', 'Javascript', 'Blazor']},
  {company: "sitehost", skills: ['PHP', 'Python', 'Go']},
  {company: "xero", skills: ['C#', 'Python', 'Go', 'AWS', 'Kubernetes', 'GitHub', 'Terraform']},
  {company: "dunedin_city_council", skills: ['SQL', 'SSRS', 'PowerBI', 'C#', '.Net', 'Javascript', 'Python']},
  {company: "socialite_recruitment", skills: ['Javascript', 'Typescript', 'React']},
  {company: "napier_city_council", skills: ['PHP', 'HTML', 'CSS', 'Javascript']},
  {company: "asb", skills: ['SQL', 'C#', '.Net', 'React', 'Typescript']},
  {company: "riverwatch", skills: ['Firebase', 'SQL', 'IoT']},
]

// Jobs lookup table, company name to expected seeded job id (index)
const jobs = mockData.reduce((lookup, current, index) => {
  if(!lookup[current.company]) {
    lookup[current.company] = index
  }

  return lookup
}, {})

// Collect all skills into a unique list,
// then use the skill as an object key mapped to the index (based on first occurence in the unique list)
// Apparently object keys can be strings with spaces and other special chars?...
const skills = Array.from(
  new Set(mockData.map((job) => job.skills).flat())
  )
  .reduce((lookup, skill, index) => {
    if(!lookup[skill]) {
      lookup[skill] = index
    }

    return lookup
  }, {})

// Final transform of the mockData to an array of objects to insert as rows into our table.
// Leverages the two lookup tables we made above (jobs, skills)
const jobs_skills_mapping = mockData.map((job) => {
  return job.skills.map(skill => ({
    jobs_id: jobs[job.company],
    skills_id: skills[skill],
  }))
}).flat()

export default {
  // jobs,
  skills,
  jobs_skills_mapping,
}
