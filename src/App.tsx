import * as React from 'react'

import './sandbox'

const { Suspense, lazy, useState } = React

const LazyD1 = lazy(() => import(/* webpackChunkName: "dynamic" */ './D1'))
const LazyD2 = lazy(() => import(/* webpackChunkName: "dynamic" */ './D2'))

const waitFor = (time: number) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(`Finished wait (${time}ms)`)
    }, time)
  })

// eslint-disable-next-line no-unused-vars
const wait = async () => {
  const result = await waitFor(1000)
  alert(result)
}

const App = () => {
  const [shouldLoad, load] = useState(false)
  return (
    <div className="app">
      <h1>It is working!</h1>
      {shouldLoad && (
        <Suspense fallback="Loading...">
          <LazyD1 />
          <LazyD2 />
        </Suspense>
      )}
      {!shouldLoad && (
        <button type="button" onClick={() => load(true)}>
          Show
        </button>
      )}
    </div>
  )
}

export default App
