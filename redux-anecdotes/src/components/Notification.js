import { useSelector, useDispatch } from 'react-redux'
import { hide } from '../reducers/notificationReducer'

let timer = null

const Notification = () => {
  const dispatch = useDispatch()
  const { message } = useSelector(state => state.notification)

  if (message === null) {
    return null
  }

  clearTimeout(timer)

  timer = setTimeout(() => {
    dispatch(hide())
  }, 5000);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification