export const seed = async (knex) => {
  await knex('facilitators').del()

  await knex('facilitators').insert([
    { id: 1, name: 'JV', phrase: 'Questions or Comments?' },
    { id: 2, name: 'Gerard', phrase: "I'm literally a pineapple" },
    { id: 3, name: 'David', phrase: '~Catch ya~!' },
    { id: 4, name: 'Ben H', phrase: 'Cool Beanssss' },
    { id: 5, name: 'Ysabel', phrase: 'I need to go to the bathroom' },
    { id: 7, name: 'Rohan', phrase: 'DOO DO DOO' },
    { id: 6, name: 'Krissy', phrase: "And that's me!" },
    {
      id: 8,
      name: 'John',
      phrase:
        "Get into a comfortable position, we'll do 5 minutes of mindfulness",
    },
    {
      id: 9,
      name: 'Jatin',
      phrase: "Whenever I'm sad, my dog makes me happy, he makes the Qui-Gon.",
    },
    { id: 10, name: 'Benjamin', phrase: 'Hi! 👋🏻' },
    { id: 11, name: 'Lani', phrase: 'OMGGGGGG' },
    { id: 12, name: 'Elise', phrase: "That's pretty cool!" },
  ])
}
