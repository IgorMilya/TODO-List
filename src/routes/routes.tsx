import { useCallback, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { LoginPage, SignUpPage, UnauthorizedPage, HomePage, NotFoundPage } from 'pages'
import { auth } from 'config/firebase'
import { useUserReducerHook } from 'hooks'
import { ROUTES } from './routes.utils'

export const AppRouter = () => {
  const { userState, addNewUserToStore, authState } = useUserReducerHook()
  const memoizedAddNewUserToStore = useCallback(addNewUserToStore, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.uid) {
        const { uid } = currentUser
        if (userState.uid !== uid) {
          memoizedAddNewUserToStore({ uid })
        }
      }
    })

    return () => unsubscribe()
  }, [userState, memoizedAddNewUserToStore])


  return (
    <Routes>
      {!authState && (
        <>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
          <Route path={ROUTES.UNAUTHORIZED} element={<UnauthorizedPage />} />
          <Route path="/*" element={<Navigate to={ROUTES.LOGIN} />} />
        </>
      )}
      {!!authState && (
        <>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.LOGIN} element={<Navigate to={ROUTES.HOME} />} />
          <Route path={ROUTES.SIGNUP} element={<Navigate to={ROUTES.HOME} />} />
          <Route path="*" element={<NotFoundPage />} />
        </>
      )}

    </Routes>
  )
}