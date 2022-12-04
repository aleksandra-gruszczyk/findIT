# findIT

## The tinder of job sites

![logo](https://user-images.githubusercontent.com/5098581/205482737-8c87a22b-7305-4a3f-99fc-d3e53348d25d.png)

Tired of scrolling through long lists of paginated jobs to apply for?

- Satisfy todays small attention span with job cards!
- Swipe left to forget, swipe right for keen as :sunglasses:
- Find roles meant for graduates, not the kind that ask for 5 years of experience :grimacing:

### Getting started

```bash
git clone https://github.com/aihe-popoto-2022/find-it
cd find-it
npm install
npm run db
npm run dev
```

## User story

As a new graduate developer I can visit the web app and be greeted with a landing page with an input to filter available job roles to my preferred skills and region.

I can then click a button that shows a stack of cards representing jobs matching any preferences set.

These job cards can then be:

- Swiped left - Dismisses a role the user is not interested in.
- Swiped right - Saves a role into a collection for interacting with later.
- Flipped to a card backside - Reveals more information, including an apply button (or share link).

On the top-right corner is a button to view the collection of saved jobs. Here we see the same cards that were swiped right from before, but there some extra buttons to interact with:

- Remove - Remove the card from the collection.
- Apply - Takes the user to the website from which the role was sourced (eg: Seek).

## Stretch

- If there are no results, a message pops up.
- If the user has runs out of results, show message to indicate.
- Dark / light mode.

---

## Testing:

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest](https://vitest.dev/)
- [nock](https://github.com/nock/nock)
- [supertest](https://github.com/visionmedia/supertest)

## Contributing Guide 🐱

**NOTE**: Vite is set up to redirect all requests to `/api/anything` to the Express server. This is done in `vite.config.js`. Be sure to run both of them when developing!
