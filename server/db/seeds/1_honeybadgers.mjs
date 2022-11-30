export const seed = async (knex) => {
  // Deletes ALL existing entries, but id auto-increment is not reset:
  // await knex('honeybadgers').del()
  // Deletes ALL existing entries, and resets auto-increment id to 0:
  await knex('honeybadgers').truncate()

  await knex('honeybadgers').insert([
    {
      id: 0,
      name: "Jabari",
      image: "/images/hb1.jpg",
    },
    {
      id: 1,
      name: "Coco",
      image: "/images/hb2.jpg",
    },
    {
      id: 2,
      name: "Shani",
      image: "/images/hb3.jpg",
    },
    {
      id: 3,
      name: "Eshe",
      image: "/images/hb4.jpg",
    }
  ])
}
