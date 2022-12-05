import create from 'zustand'

const useFavourites = create((set, get) => ({
  favourites: [],
  addToFavourites: (jobId) =>
    set((state) => ({ favourites: [...state.favourites, jobId] })),
  removeFromFavourites: (id) => {
    const jobsToKeep = get().favourites.filter((jobId) => {
      return jobId !== id
    })
    set({ favourites: jobsToKeep })
  },
}))

export default useFavourites
