import create from 'zustand'

const useJobFilters = create((set) => ({
  choices: {
    regions: [],
    skills: [],
  },
  setChoices: (choices) => set((state) => ({ choices })),
}))

export default useJobFilters
