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
    company_name: 'Fingo',
    role: 'Java Developer',
    location: 'Wellington',
    byline:
      'Are you keen on working in a collegial, DevOps team that focuses on supporting the Social Sector with a focus on connection and enabling growth?',
    logo: 'fingo.png',
    details:
      'We have a passion for modernising and supporting legacy systems, either to their graceful retirement or integrating with newer off-the-shelf solutions. This role would suit those of you who also share this passion and are seeking opportunities to learn from highly experienced developers. As a result of growth, we are looking for a Java Developer to join us permanently. This is a supportive, high-performing, and client-centered team, and will be a hybrid role working in our central Wellington office and at home.',
    apply_link:
      'https://www.seek.co.nz/job/59130544?type=promoted#sol=ae4aa914580cc7404a5718b0f20bd9009b24f7af',
  },
  {
    id: 1,
    company_name: 'Tribe',
    role: 'Software Engineer',
    location: 'Auckland',
    byline: 'Showcase how technology can enhance performance in sport',
    logo: 'tribe.png',
    details:
      'At Tribe we have our guiding light to show us the way. We bring our whole selves to work. We encourage inclusion in every single interaction. We genuinely care about people and are curious about their stories. We celebrate all points of view. We will help you find your tribe, the same way we have. We’re all on a journey together so come along…',
    apply_link:
      'https://www.seek.co.nz/job/59243722?type=standout#sol=138d99a65a217c76a2f4a0120e1a71da3bee7bfc',
  },
  {
    id: 2,
    company_name: 'Radford Software developer',
    role: 'Jnr Software Developer',
    location: 'Tauranga',
    byline:
      'This role is in the busy, expanding fresh produce sector, and located in sunny Tauranga!',
    logo: 'radford.png',
    details:
      "As a software developer, you are capable to contribute in the lifecycle of development for our software applications. You will work with colleagues in the same team and across departments to build high performance connected systems. We are Agile-based, with fully cross-functional teams. We're a driven, fun-loving bunch and to keep things exciting, there is often considerable pressure from seasonal deadlines on both our local and international projects.",
    apply_link:
      'https://www.seek.co.nz/job/59292591?type=standard#sol=637988e22570ee517f25fc517dddfd777be36aca',
  },
  {
    id: 3,
    company_name: 'SiteHost',
    role: 'Junior Developer',
    location: 'Auckland',
    byline:
      "SiteHost is a well known cloud infrastructure provider. We're looking for Developers to join our team",
    logo: 'sitehost.png',
    details:
      "You’ll be closely involved with your teammates. We’re an agile company with members around the world. We make good use of collaboration tools and techniques for remote working. We’re always communicating with each other and working together as we solve problems. We have a wonderful team that knows how to ship while being relaxed and friendly. You’ll get to work across a variety of projects, infrastructure and languages – also known as full-stack. You’ll work with talented developers on new and existing products that keep our customers happy. As well as that, you’ll also work on internal tools to help our Operations team be as productive as possible. You'll report to the head of our larger team while being part of small sprint-based project teams.",
    apply_link:
      'https://www.seek.co.nz/job/59179971?type=standout#sol=ce1a76c9a44b2304ad9d451687c02f31e46fe939',
  },
  {
    id: 4,
    company_name: 'Xero',
    role: 'Platform Engineer - PaaS',
    location: 'Auckland',
    byline:
      'Join the Platform-as-a-Service Data team, creating a platform to provide data services to Xero product teams in a highly automated fashion.',
    logo: 'xero.png',
    details:
      'At Xero, our purpose is to make life better for people in small business, their advisors, and communities around the world. This purpose sits at the centre of everything we do. We support our people to do the best work of their lives so that they can help small businesses succeed through better tools, information and connections. Because when they succeed they make a difference, and when millions of small businesses are making a difference, the world is a more beautiful place.',
    apply_link:
      'https://www.seek.co.nz/job/58963253?type=standout#sol=8e118826057eb24488dbe78ff424eaffb8ede9cc',
  },
  {
    id: 5,
    company_name: 'Dunedin City Council',
    role: 'Junior Application Support Analyst/Developer',
    location: 'Dunedin',
    byline:
      'In this role, you will be assisting application support, reporting writing as well as business analysis to support the organisation.',
    logo: 'dunedin.png',
    details:
      "As a Junior Application Support Analyst/Developer working along with the BIS team, you'll have exposure to various systems, as well as extensive training and mentoring as you take our products and your career to the next level. You will learn to develop new features and functionality for large scale enterprise systems.  Participate in design and code reviews. Salary Range $58,425 - $68,735",
    apply_link:
      'https://www.seek.co.nz/job/59334044?type=standout#sol=7049ed01dc0b0ce7acdab05cee0252e26cb804f3',
  },
  {
    id: 6,
    company_name: 'Socialite Recruitment Ltd.',
    role: 'Junior Frontend Developer',
    location: 'Wellington',
    byline:
      'Join these guys in the fight to combine visual branding with analytics and create a more effective business tool that turns communication smarter, bolder, and represents your brand in the best light.',
    logo: 'socialite.png',
    details:
      'Their vision is bold; they seek to create a suite of products with benefits, pricing, and packaging that’s both applicable and purchasable by every business in the world. Join these guys in the fight to combine visual branding with analytics and create a more effective business tool that turns communication smarter, bolder, and represents your brand in the best light. On a day-to-day basis, you will be working with front-end technologies and liaising with a team of primarily back-end developers on delivering some pretty cool outcomes for their clients around the globe.',
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
    logo: 'napier.png',
    details:
      "We are seeking a Web Developer who has enthusiasm, flair and is highly proficient in implementing the latest web technologies. Reporting to the Senior Web / Online Developer, you will work in a small but efficient team that maintains the 45+ websites that fall under the HB5C (Hawke's Bay 5 Councils) umbrella. These websites vary in context from local government, facilities, tourism, and emergency management.",
    apply_link:
      'https://www.seek.co.nz/job/59064809?type=standout#sol=a46bfc068ad0ba50f18834c0a0175827a981f076',
  },
  {
    id: 8,
    company_name: 'ASB',
    role: 'Software Specialist - Full Stack',
    location: 'Auckland',
    byline:
      'Be part of a diverse and highly engaged team, working on leading tech projects',
    logo: 'asb.png',
    details:
      "At ASB, we're all about doing what we can to help our customers get `One Step Ahead` by giving them the tools they need to manage their lives and plans for their families and future. Our products don't just serve ads or stream movies - they underpin our economy and touch people's lives. If you've always wanted to apply your skills to a large-scale Kiwi success story, then today is your lucky day - as we are on the lookout for a software specialist to join us in our Transactional Banking platform.",
    apply_link:
      'https://www.seek.co.nz/job/59277293?type=standout#sol=f61a486979f47ecae532dff23e0860581374020b',
  },
  {
    id: 9,
    company_name: 'RiverWatch',
    role: 'Software Engineer',
    location: 'Dunedin',
    byline:
      '3 years of experience with software development in one or more programming languages, and with data structures/algorithms',
    logo: 'riverwatch.png',
    details:
      'As a software engineer at RiverWatch, you will work on specific projects critical to RiverWatch’s needs with opportunities to drive the direction of Engineering as our fast-paced business grows and evolves. We need our engineers to be self-starters, problem-solvers, versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward. You will partner with Product, Hardware, and Data Science and develop, test, deploy, maintain, and enhance software solutions. You will be excited to evolve the tech stack from startup mode to having a focus on setting up scalable tooling and processes.',
    apply_link:
      'https://www.seek.co.nz/job/59286883?type=standard#sol=9ac939559a260955c535905e1e3bc283cf52e4f4',
  },
]
