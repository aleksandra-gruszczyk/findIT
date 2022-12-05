import create from 'zustand'

const useFavourites = create((set, get) => ({
  favourites: [],
  addToFavourites: (job) => set((state) => (
    { favourites: [...state.favourites, job] }
  )),
  removeFromFavourites: (id) => {
    const jobsToKeep = get().favourites.filter(job => {
      return job.id !== id
    })
    set({favourites: jobsToKeep})
  }
}))

export default useFavourites
