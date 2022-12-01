import create from 'zustand'

const useData = create((set) => ({
  data: [],
  setData: (data) => set((state) => ({ data })),
}))

export default useData
