import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from 'types'

interface userAction {
  user: UserType
}

const initialState: userAction = {
  user: {} as UserType,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload
    },
    removeUser: (state, action: PayloadAction<UserType>) => {
      state.user = {} as UserType
    },
  },
})

export const { addNewUser, removeUser } = userSlice.actions

export default userSlice.reducer
