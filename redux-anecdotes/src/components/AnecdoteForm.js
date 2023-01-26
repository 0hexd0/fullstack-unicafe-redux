import { connect } from 'react-redux'
import { createAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = (props) => {
    const handleSubmit = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(anecdote)
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

const mapDispatchToProps = {
    createAnecdote
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)