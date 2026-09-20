import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, resetCountViaApi } from './store/notification/notifications.slice'
import { selectNotificationsCount } from './store/notification/notifications.selectors'
import type { AppDispatch } from './store/store'

function App() {
  const count = useSelector(selectNotificationsCount)
  const dispatch = useDispatch<AppDispatch>()
  const resetStatus = useSelector((state: any) => state.notification.resetStatus);

  const resetButtonText =  () => {
    switch (resetStatus) {
      case 'idle':
        return 'Reset';
      case 'succeeded':
        return 'Reset';
      case 'error':
        return 'Reset';
      case 'loading':
        return 'loading...';
    }
  };

  return (
    <>
      <section id="center">

          <h1>Get started - Notification Count = {count}</h1>

        <div className="card">        
        <button
          type="button"
          className="counter"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
                <button
          type="button"
          className="counter"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => dispatch(resetCountViaApi())}
        >
          {resetButtonText()}
        </button>
</div>
      </section>

    </>
  )
}

export default App
