import { loginUser, logoutUser } from 'store/reducers'
import { useAppDispatch, useAppSelector } from 'hooks'
import { UserType } from 'types'

export const useUserReducerHook = () => {
  const userState: UserType = useAppSelector((state) => state.user.user)
  const authState: string | null = useAppSelector((state) => state.user.auth)
  const dispatch = useAppDispatch()
  const addNewUserToStore = (data: UserType) => dispatch(loginUser(data))
  const deleteUserToStore = () => dispatch(logoutUser())

  return {userState, authState, addNewUserToStore, deleteUserToStore}
}