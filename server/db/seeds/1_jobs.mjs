export const seed = async (knex) => {
  // Deletes ALL existing entries, but id auto-increment is not reset:
  // await knex('jobs').del()
  // Deletes ALL existing entries, and resets auto-increment id to 0:
  await knex('jobs').truncate()

  await knex('jobs').insert(jobRows)
}

const jobRows = [
  {
    id: 0,
    company_name: "Fingo",
    role: "Java Developer",
    location: "Wellington",
    byline: "Are you keen on working in a collegial, DevOps team that focuses on supporting the Social Sector with a focus on connection and enabling growth?",
    logo: "fingo.png",
    apply_link: "https://www.seek.co.nz/job/59130544?type=promoted#sol=ae4aa914580cc7404a5718b0f20bd9009b24f7af",
  },
  {
    id: 1,
    company_name: "Tribe",
    role: "Software Engineer",
    location: "Auckland",
    byline: "Showcase how technology can enhance performance in sport",
    logo: "tribe.png",
    apply_link: "https://www.seek.co.nz/job/59243722?type=standout#sol=138d99a65a217c76a2f4a0120e1a71da3bee7bfc",
  },
  {
    id: 2,
    company_name: "Radford Software developer",
    role: "Jnr Software Developer",
    location: "Tauranga",
    byline: "This role is in the busy, expanding fresh produce sector, and located in sunny Tauranga!",
    logo: "radford.png",
    apply_link: "https://www.seek.co.nz/job/59292591?type=standard#sol=637988e22570ee517f25fc517dddfd777be36aca",
  },
  {
    id: 3,
    company_name: "SiteHost",
    role: "Junior Developer",
    location: "Auckland",
    byline: "SiteHost is a well known cloud infrastructure provider. We're looking for Developers to join our team",
    logo: "sitehost.png",
    apply_link: "https://www.seek.co.nz/job/59179971?type=standout#sol=ce1a76c9a44b2304ad9d451687c02f31e46fe939",
  },
  {
    id: 4,
    company_name: "Xero",
    role: "Platform Engineer - PaaS",
    location: "Auckland",
    byline: "Join the Platform-as-a-Service Data team, creating a platform to provide data services to Xero product teams in a highly automated fashion.",
    logo: "xero.png",
    apply_link: "https://www.seek.co.nz/job/58963253?type=standout#sol=8e118826057eb24488dbe78ff424eaffb8ede9cc",
  },
  {
    id: 5,
    company_name: "Dunedin City Council",
    role: "Junior Application Support Analyst/Developer",
    location: "Dunedin",
    byline: "In this role, you will be assisting application support, reporting writing as well as business analysis to support the organisation.",
    logo: "dunedin.png",
    apply_link: "https://www.seek.co.nz/job/59334044?type=standout#sol=7049ed01dc0b0ce7acdab05cee0252e26cb804f3",
  },
  {
    id: 6,
    company_name: "Socialite Recruitment Ltd.",
    role: "Junior Frontend Developer",
    location: "Wellington",
    byline: "Join these guys in the fight to combine visual branding with analytics and create a more effective business tool that turns communication smarter, bolder, and represents your brand in the best light.",
    logo: "socialite.png",
    apply_link: "https://www.seek.co.nz/job/59306306?type=standout#sol=0866aea075a00c0ae1528d607e74ffdb6cc2d6b8",
  },
  {
    id: 7,
    company_name: "Napier City Council",
    role: "Web Developer",
    location: "Napier",
    byline: "Web Developer with enthusiasm, flair & is highly proficient in applying the latest web tech for building & maintaining the 45+ websites under HB5C.",
    logo: "napier.png",
    apply_link: "https://www.seek.co.nz/job/59064809?type=standout#sol=a46bfc068ad0ba50f18834c0a0175827a981f076",
  },
  {
    id: 8,
    company_name: "ASB",
    role: "Software Specialist - Full Stack",
    location: "Auckland",
    byline: "Be part of a diverse and highly engaged team, working on leading tech projects",
    logo: "asb.png",
    apply_link: "https://www.seek.co.nz/job/59277293?type=standout#sol=f61a486979f47ecae532dff23e0860581374020b",
  },
  {
    id: 9,
    company_name: "RiverWatch",
    role: "Software Engineer",
    location: "Dunedin",
    byline: "3 years of experience with software development in one or more programming languages, and with data structures/algorithms",
    logo: "riverwatch.png",
    apply_link: "https://www.seek.co.nz/job/59286883?type=standard#sol=9ac939559a260955c535905e1e3bc283cf52e4f4",
  },
]
