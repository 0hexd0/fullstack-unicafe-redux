import { useSelector, useDispatch } from 'react-redux'
import { vote } from "../reducers/anecdoteReducer";
import { show } from "../reducers/notificationReducer";

const AnecdoteList = () => {
    const sortByVotes = (a, b) => a.votes > b.votes ? -1 : 1
    const filter = useSelector(state => state.filter)
    const anecdotes = useSelector(state => state.anecdotes.filter(anecdote => anecdote.content.includes(filter)).sort(sortByVotes))
    const dispatch = useDispatch()

    const onVote = (anecdote) => {
        dispatch(vote(anecdote.id))
        dispatch(show({ message: `you voted '${anecdote.content}'` }))
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
                        <button onClick={() => onVote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList