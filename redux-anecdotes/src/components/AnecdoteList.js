import { useSelector, useDispatch } from 'react-redux'
import { vote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
    const sortByVotes = (a, b) =>  a.votes > b.votes ? -1 : 1
    const anecdotes = useSelector(state => Array.from(state).sort(sortByVotes))
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