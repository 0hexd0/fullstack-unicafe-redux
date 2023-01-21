import { useSelector, useDispatch } from 'react-redux'
import { vote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const onVote = (id) => {
        console.log('vote', id)
        dispatch(vote(id))
    }

    return (
        <>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => onVote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList