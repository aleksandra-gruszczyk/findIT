import request from 'superagent'
import create from 'zustand'

const useJobFilters = create((set) => ({
  choices: {
    regions: [],
    skills: [],
  },
  // setChoices: (choices) => set((state) => ({ choices })),
  fetchChoices: async () => {
    const {body: choices} = await request.get('/api/v1/job-filters')
    set({ choices })
  },
}))

// Initializes async state here instead of a useEffect calling a `setChoices()`
// https://github.com/pmndrs/zustand/discussions/1415#discussioncomment-4091629
useJobFilters.getState().fetchChoices()

export default useJobFilters
