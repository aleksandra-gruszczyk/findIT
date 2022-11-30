# findIT

## User story

As a new developer graduate I can visit the web app and be greeted with a landing page with an input to filter available job roles to my preferred skills and region.

I can then click a button that shows a stack of cards representing jobs matching any preferences set.

These job cards can then be:
- Swiped left - Dismisses a role the user is not interested in.
- Swiped right - Saves a role into a collection for interacting with later.
- Flipped to a card backside - Reveals more information, including an apply button (or share link).

On the top-right corner is a button to view the collection of saved jobs. Here we see the same cards that were swiped right from before, but there some extra buttons to interact with:
- Remove - Remove the card from the collection.
- Apply - Takes the user to the website from which the role was sourced (eg: Seek).

## Stretch

If there are no results, a message pops up.
If the user has runs out of results, show message to indicate.
Dark/light mode

### Testing:

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest](https://vitest.dev/)
- [nock](https://github.com/nock/nock)
- [supertest](https://github.com/visionmedia/supertest)

## Contributing Guide 🐱

**NOTE**: Vite is set up to redirect all requests to `/api/anything` to the Express server. This is done in `vite.config.js`. Be sure to run both of them when developing!

## Snippets 🐈

These are small snippets of code that may help you out. Note that this is not an exhaustive list, and you may need to mix and match concepts.

### React/Redux

#### Redux Reducers

To make data-fetching consistent for users and those writing code, reducers will have the following format for their state:
```js
{
  data: null, // the data that is fetched, is initially null
  error: null, // error is null or an error message
  loading: false, // loading is true or false
}
```

<details>
  <summary>Code:</summary>

  ```js
  // reducers/fruits.js
  const initialState = {
    data: null,
    error: null,
    loading: false,
  }

  export default function fruitsReducer(state = initialState, action) {
    switch (action.type) {
      // when we make a new request, data is loading
      case 'FETCH_FRUITS_REQUEST':
        return {
          ...state,
          error: null
          loading: true,
        }
      // when we get a response, data is loaded, and there was no error
      case 'FETCH_FRUITS_SUCCESS':
        return {
          ...state,
          data: action.payload,
          error: null,
          loading: false,
        }
      // when we get an error, data is not loading
      case 'FETCH_FRUITS_FAILURE':
        return {
          ...state,
          error: action.payload,
          loading: false,
        }
      default:
        return state
    }
  }
  ```

</details>

#### Redux Thunky Action Creator (Fetch Fruits)

<details>
  <summary>Code:</summary>

```js
// actions/fruits.js
const FETCH_FRUITS_REQUEST = 'FETCH_FRUITS_REQUEST'
const FETCH_FRUITS_SUCCESS = 'FETCH_FRUITS_SUCCESS'
const FETCH_FRUITS_FAILURE = 'FETCH_FRUITS_FAILURE'

const fetchFruitsRequest = () => ({
  type: FETCH_FRUITS_REQUEST,
})

const fetchFruitsSuccess = (fruits) => ({
  type: FETCH_FRUITS_SUCCESS,
  payload: fruits,
})

const fetchFruitsFailure = (error) => ({
  type: FETCH_FRUITS_FAILURE,
  payload: error,
})

const fetchFruits = () => (dispatch) => {
  dispatch(fetchFruitsRequest())
  getFruits()
    .then((fruits) => {
      dispatch(fetchFruitsSuccess(fruits))
    })
    .catch((error) => {
      dispatch(fetchFruitsFailure(error))
    })
}

// Component.jsx
const { data: fruits, loading, error } = useSelector((state) => state.fruits)
useEffect(() => {
  dispatch(fetchFruits())
}, [])

if (loading) {
  return (/* ... */)
}

if (error) {
  return (/* ... */)
}

return (/* ... */)
```

</details>



#### Fetch from Component (Fetch Fruits)

<details>
  <summary>Code:</summary>

```js
// Component.jsx
const [fruits, setFruits] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

function fetchFruits() {
  setLoading(true)
  getFruits()
    .then((fruits) => {
      setFruits(fruits)
    })
    .catch((err) => {
      setError(err)
    })
    .finally(() => {
      setLoading(false)
    })
}

useEffect(() => {
  getFruits()
}, [])

if (loading) {
  return (/* ... */)
}

if (error) {
  return (/* ... */)
}

return (/* ... */)
```
</details>

#### Fetch from Component with Authentication (with async/await)

<details>
  <summary>Code:</summary>

```js
// Component.jsx
const [fruits, setFruits] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
const { getAccessTokenSilently } = useAuth0()

async function fetchForbiddenFruits() {
  try {
    const token = await getAccessTokenSilently() // requires user to be authenticated
    setLoading(true)
    const fruits = await getForbiddenFruits(token)
    setFruits(fruits)
  } catch (err) {
    setError(err)
  } finally {
    setLoading(false)
  }
}

useEffect(() => {
  fetchForbiddenFruits()
}, [])

if (loading) {
  return (/* ... */)
}

if (error) {
  return (/* ... */)
}

return (/* ... */)
```

</details>

#### Fetch with Redux and Authentication from Component (with .then())

<details>
  <summary>Code:</summary>

```js
// Component.jsx
const dispatch = useDispatch()
const { data: fruits, loading, error } = useSelector((state) => state.fruits)

useEffect(() => {
  getAccessTokenSilently()
    .then((token) => {
      dispatch(fetchForbiddenFruits(token))
    })
    .catch((err) => {
      // this will catch errors with getAccessTokenSilently
    })
}, [])

if (loading) {
  return (/* ... */)
}

if (error) {
  return (/* ... */)
}

return (/* ... */)
```

</details>

---
### API Client

#### Set Authorization Header for API Requests (with .then())

<details>
  <summary>Code:</summary>

```js
// api/fruits.js
function getForbiddenFruits(token) {
  return request
    .get('/api/v1/fruits')
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body.fruits)
}
```

</details>

### Express Routes

#### Check for Authentication (server-side)

<details>
  <summary>Code:</summary>

```js
// server/routes/fruits.js
router.get('/', checkJwt, (req, res) => {
  // req.auth is available here
  const userId = req.auth.sub
  db.getForbiddenFruits(userId)
  // .then(...)
  // .catch(...)
})
```
</details>

---
### Database/Knex

#### Database Join

<details>
  <summary>Code:</summary>

```js
// server/db/fuctions/reviews.js
function getFruits(db = connection) {
  //         table 1
  return db('reviews')
    //     table 2   column 1           column 2
    .join('fruits', 'reviews.fruitId', 'fruits.id')
    .select(
      // make sure column names end up being unique
      'fruits.id',
      'fruits.name',
      'fruits.color',
      'fruits.taste',
      'reviews.tasteRating',
      'reviews.textureRating',
      'reviews.content'
    )
}
```
</details>

### Extra
#### Image Uploading: Cloudinary
<details>
  <summary>Code:</summary>

```jsx
// Component.jsx

function MyComponentWithForm() {
  // ... other state
  const [selectedFile, setSelectedFile] = useState(null)

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0])
  }

  function handleSubmit() {
    e.preventDefault()
    try {
      const token = await getAccessTokenSilently()
      const imageUrl = await getImageUrl(selectedFile, token)

      // ... do stuff with imageUrl
    } catch (err) {
      // ... deal with the error
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* ... other inputs */}
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
  )
}



```
</details>
