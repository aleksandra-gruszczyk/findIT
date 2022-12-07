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
    company_name: 'EzyVet',
    role: 'Intermediate Full Stack Engineer',
    location: 'Auckland',
    byline:
      "Help build amazing applications for veterinary's around the world.",
    logo: 'ezyvet.svg',
    logo_bg: 'ezyvet-bg.jpeg',
    details:
      'We provide premium cloud-based practice & workflow management software solutions to veterinary businesses around the world.\n\nOur intuitive and innovative ezyVet & Vet Radar products transform the way our customers manage their clinics, specialist centres, hospitals or universities by giving them more time and the tools to better care for our furry friends.',
    apply_link:
      'https://www.seek.co.nz/job/59183935?type=standout#sol=55be71387eb1bb8307a39bcfc7e32bed7df44893',
  },
  {
    id: 1,
    company_name: 'Tribe',
    role: 'Software Engineer',
    location: 'Auckland',
    byline: 'Showcase how technology can enhance performance in sport.',
    logo: 'tribe.svg',
    logo_bg: 'tribe-bg.jpg',
    details:
      'At Tribe we have our guiding light to show us the way. We bring our whole selves to work. We encourage inclusion in every single interaction.\n\nWe genuinely care about people and are curious about their stories. We celebrate all points of view. We will help you find your tribe, the same way we have.\n\nWe’re all on a journey together so come along!',
    apply_link:
      'https://www.seek.co.nz/job/59243722?type=standout#sol=138d99a65a217c76a2f4a0120e1a71da3bee7bfc',
  },
  {
    id: 2,
    company_name: 'Radfords',
    role: 'Junior Software Developer',
    location: 'Tauranga',
    byline:
      'This role is in the busy, expanding fresh produce sector, and located in sunny Tauranga!',
    logo: 'radfords.svg',
    logo_bg: 'radfords-bg.webp',
    details:
      "As a software developer, you are capable to contribute in the lifecycle of development for our software applications.\n\nYou will work with colleagues in the same team and across departments to build high performance connected systems.\n\nWe are Agile-based, with fully cross-functional teams. We're a driven, fun-loving bunch and to keep things exciting, there is often considerable pressure from seasonal deadlines on both our local and international projects.",
    apply_link:
      'https://www.seek.co.nz/job/59292591?type=standard#sol=637988e22570ee517f25fc517dddfd777be36aca',
  },
  {
    id: 3,
    company_name: 'SiteHost',
    role: 'Junior Developer',
    location: 'Auckland',
    byline:
      "SiteHost is a well known cloud infrastructure provider. We're looking for Developers to join our team.",
    logo: 'sitehost.svg',
    logo_bg: '2f3e47',
    details:
      "You'll be closely involved with your teammates. We're an agile company with members around the world. We make good use of collaboration tools and techniques for remote working.\n\nWe’re always communicating with each other and working together as we solve problems. We have a wonderful team that knows how to ship while being relaxed and friendly.\n\nYou’ll get to work across a variety of projects, infrastructure and languages – also known as full-stack. You’ll work with talented developers on new and existing products that keep our customers happy.\n\nAs well as that, you’ll also work on internal tools to help our Operations team be as productive as possible. You'll report to the head of our larger team while being part of small sprint-based project teams.",
    apply_link:
      'https://www.seek.co.nz/job/59179971?type=standout#sol=ce1a76c9a44b2304ad9d451687c02f31e46fe939',
  },
  {
    id: 4,
    company_name: 'Xero',
    role: 'Platform Engineer',
    location: 'Auckland',
    byline:
      'Join the Platform-as-a-Service Data team, creating a platform to provide data services to Xero product teams in a highly automated fashion.',
    logo: 'xero.svg',
    logo_bg: 'xero-bg.jpeg',
    details:
      'At Xero, our purpose is to make life better for people in small business, their advisors, and communities around the world. This purpose sits at the centre of everything we do.\n\nWe support our people to do the best work of their lives so that they can help small businesses succeed through better tools, information and connections.\n\nBecause when they succeed they make a difference, and when millions of small businesses are making a difference, the world is a more beautiful place.',
    apply_link:
      'https://www.seek.co.nz/job/58963253?type=standout#sol=8e118826057eb24488dbe78ff424eaffb8ede9cc',
  },
  {
    id: 5,
    company_name: 'Dunedin City Council',
    role: 'Junior Application Support Analyst / Developer',
    location: 'Dunedin',
    byline:
      'In this role, you will be assisting application support, reporting writing as well as business analysis to support the organisation.',
    logo: 'dunedin-city-council.svg',
    logo_bg: 'dunedin-city-council-bg.jpg',
    details:
      "Working along with the BIS team, you'll have exposure to various systems, as well as extensive training and mentoring as you take our products and your career to the next level.\n\nYou will learn to develop new features and functionality for large scale enterprise systems.  Participate in design and code reviews.\n\nSalary Range $58,425 - $68,735",
    apply_link:
      'https://www.seek.co.nz/job/59334044?type=standout#sol=7049ed01dc0b0ce7acdab05cee0252e26cb804f3',
  },
  {
    id: 6,
    company_name: 'Socialite Recruitment Ltd.',
    role: 'Junior Frontend Developer',
    location: 'Wellington',
    byline:
      'Join these guys in the fight to combine visual branding with analytics and create a more effective business tool.',
    logo: 'socialite.png',
    logo_bg: 'b1d237',
    details:
      'Their vision is bold; they seek to create a suite of products with benefits, pricing, and packaging that’s both applicable and purchasable by every business in the world.\n\nJoin these guys in the fight to combine visual branding with analytics and create a more effective business tool that turns communication smarter, bolder, and represents your brand in the best light.\n\nOn a day-to-day basis, you will be working with front-end technologies and liaising with a team of primarily back-end developers on delivering some pretty cool outcomes for their clients around the globe.',
    apply_link:
      'https://www.seek.co.nz/job/59306306?type=standout#sol=0866aea075a00c0ae1528d607e74ffdb6cc2d6b8',
  },
  {
    id: 7,
    company_name: 'Napier City Council',
    role: 'Web Developer',
    location: 'Napier',
    byline:
      'Web Developer with enthusiasm, flair & is highly proficient in applying the latest web tech for building & maintaining the 45+ websites under HB5C.',
    logo: 'napier-city-council.png',
    logo_bg: 'napier-city-council-bg.jpg',
    details:
      "We are seeking a Web Developer who has enthusiasm, flair and is highly proficient in implementing the latest web technologies.\n\nReporting to the Senior Web / Online Developer, you will work in a small but efficient team that maintains the 45+ websites that fall under the HB5C (Hawke's Bay 5 Councils) umbrella.\n\nThese websites vary in context from local government, facilities, tourism, and emergency management.",
    apply_link:
      'https://www.seek.co.nz/job/59064809?type=standout#sol=a46bfc068ad0ba50f18834c0a0175827a981f076',
  },
  {
    id: 8,
    company_name: 'ASB',
    role: 'Software Specialist - Full Stack',
    location: 'Auckland',
    byline:
      'Be part of a diverse and highly engaged team, working on leading tech projects.',
    logo: 'asb.svg',
    logo_bg: '000',
    details:
      "At ASB, we're all about doing what we can to help our customers get `One Step Ahead` by giving them the tools they need to manage their lives and plans for their families and future.\n\nOur products don't just serve ads or stream movies - they underpin our economy and touch people's lives.\n\nIf you've always wanted to apply your skills to a large-scale Kiwi success story, then today is your lucky day - as we are on the lookout for a software specialist to join us in our Transactional Banking platform.",
    apply_link:
      'https://www.seek.co.nz/job/59277293?type=standout#sol=f61a486979f47ecae532dff23e0860581374020b',
  },
  {
    id: 9,
    company_name: 'RiverWatch',
    role: 'Software Engineer',
    location: 'Dunedin',
    byline:
      'Join us on an exciting journey to leverage innovative technology and help customers actively improve freshwater quality.',
    logo: 'riverwatch.webp',
    logo_bg: 'riverwatch-bg.webp',
    details:
      'As a software engineer at RiverWatch, you will work on specific projects critical to RiverWatch’s needs with opportunities to drive the direction of Engineering as our fast-paced business grows and evolves.\n\nWe need our engineers to be self-starters, problem-solvers, versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.\n\nYou will partner with Product, Hardware, and Data Science and develop, test, deploy, maintain, and enhance software solutions. You will be excited to evolve the tech stack from startup mode to having a focus on setting up scalable tooling and processes.',
    apply_link:
      'https://www.seek.co.nz/job/59286883?type=standard#sol=9ac939559a260955c535905e1e3bc283cf52e4f4',
  },
]
