import create from 'zustand'

const useFavourites = create((set) => ({
  favourites: [],
  addToFavourites: (job) => set((state) => (
    { favourites: [...state.favourites, job] }
  )),
}))

export default useFavourites
