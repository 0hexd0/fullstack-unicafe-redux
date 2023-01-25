import { useDispatch } from 'react-redux'
import { add } from "../reducers/anecdoteReducer";
import { show } from "../reducers/notificationReducer";
import anecdoteService from '../services/anecdote'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        // dispatch(add(anecdote))
        const newAnecdote = await anecdoteService.createNew(anecdote)
        dispatch(add(newAnecdote))
        dispatch(show({ message: `you added '${anecdote}'` }))
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={handleSubmit}>
                <div><input name='anecdote' /></div>
                <button>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm