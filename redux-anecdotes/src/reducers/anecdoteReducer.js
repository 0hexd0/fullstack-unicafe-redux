import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from "../services/anecdote";
import { setNotification } from "../reducers/notificationReducer";

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    update(state, action) {
      const updatedAnecdote = action.payload
      const idxToUpdate= state.findIndex(anecdote => anecdote.id === updatedAnecdote.id)
      state[idxToUpdate] = updatedAnecdote
    },
    add(state, action) {
      state.push(action.payload)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  }
})

export const { add, update, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = anecdote => {
  return async dispatch => {
    const anecdotes = await anecdoteService.createNew(anecdote)
    dispatch(add(anecdotes))
    dispatch(setNotification(`you added '${anecdote}'`, 5000))
  }
}

export const voteAnecdote = anecdote => {
  return async dispatch => {
    const votedAnecdote = await anecdoteService.vote(anecdote)
    dispatch(update(votedAnecdote))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5000))
  }
}

export default anecdoteSlice.reducer