import create from 'zustand'

const useJobs = create((set) => ({
  jobs: [],
  setJobs: (jobs) => set((state) => ({ jobs })),
  resetJobs: () => set({jobs: []}),
}))

export default useJobs
