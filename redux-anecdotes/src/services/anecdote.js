import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const asObject = (anecdote) => {
    return {
        content: anecdote,
        votes: 0
    }
}

const createNew = async (anecdote) => {
    const object = asObject(anecdote)
    const response = await axios.post(baseUrl, object)
    return response.data
}

export default { getAll, createNew }