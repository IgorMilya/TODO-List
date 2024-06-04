import { useAppDispatch, useAppSelector } from 'hooks/useRedux.hook'
import { UserType } from 'types'
import { addNewUser } from 'store/reducers'

export const useUserReducerHook = () => {
  const user = useAppSelector((state) => state.user.user)
  const dispatch = useAppDispatch()
  const addNewUserToStore = (data: UserType) => dispatch(addNewUser(data))

  return {user, addNewUserToStore}
}