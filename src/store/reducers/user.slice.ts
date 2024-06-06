import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from 'types'

interface userAction {
  user: UserType
  auth: string | null
}

const initialState: userAction = {
  user: {} as UserType,
  auth: localStorage.getItem("isAuth")
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload
      state.auth = "true"
    },
    logoutUser: (state) => {
      state.user = {} as UserType
      state.auth = null
    },
  },
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer
