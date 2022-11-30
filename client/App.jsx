import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { deleteFacilitator, fetchFacilitators } from './apiClient/facilitators'
import { FullPageSpinner } from './components/Spinner'

function App() {
  const queryClient = useQueryClient()
  const {
    data: facilitators,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ['facilitators'],
    queryFn: fetchFacilitators,
  })

  const mutation = useMutation({
    mutationFn: deleteFacilitator,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['facilitators'] })
    },
  })

  function handleDelete(id) {
    mutation.mutate(id)
  }

  if (isLoading) {
    return <FullPageSpinner />
  }

  if (isError) {
    return <div>Something went wrong: {error}</div>
  }

  return (
    <main className='mx-auto mt-8 max-w-screen-md'>
      <h1 className='mb-4 font-heading text-4xl'>Facilitators</h1>
      {facilitators.map((f) => (
        <div key={f.id} className='mb-4'>
          <h2 className='text-3xl font-bold'>{f.name}</h2>
          <p>{f.phrase}</p>
          <button onClick={() => handleDelete(f.id)}>purge</button>
        </div>
      ))}
    </main>
  )
}

export default App
