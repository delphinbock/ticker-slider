// React
import { lazy, Suspense } from 'react'

// Components
// const Player = lazy(() => import('@templates/Player'))
import TickerSlider from "@templates/TickerSlider";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <Player /> */}
      <TickerSlider />
    </Suspense>
  )
}

// Display the component name in react dev tools profiler
App.displayName = 'App'

export default App
