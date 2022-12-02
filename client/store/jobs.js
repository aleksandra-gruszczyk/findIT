import create from 'zustand'

const useJobs = create((set) => ({
  jobs: [],
  setJobs: (jobs) => set((state) => ({ jobs })),
}))

export default useJobs
