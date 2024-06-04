import { useCallback, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { LoginPage, SignUpPage, UnauthorizedPage } from 'pages'
import { auth } from 'config/firebase'
import { useUserReducerHook } from 'hooks'
import { ROUTES } from './routes.utils'


export const AppRouter = () => {
  const { user, addNewUserToStore } = useUserReducerHook()
  const memoizedAddNewUserToStore = useCallback(addNewUserToStore, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('User updated:', user)
      if (currentUser?.email && currentUser.uid) {
        const { email, uid } = currentUser

        if (user?.email !== email || user?.uid !== uid) {
          memoizedAddNewUserToStore({ email, uid })
        }
      }
    })

    return () => unsubscribe()
  }, [user, memoizedAddNewUserToStore])

  const isUserEmpty = !user || Object.keys(user).length === 0
  return (
    <Routes>
      {isUserEmpty && (
        <>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
          <Route path={ROUTES.UNAUTHORIZED} element={<UnauthorizedPage />} />
          <Route path="/*" element={<Navigate to={ROUTES.LOGIN} />} />
        </>
      )}
      {!isUserEmpty && (
        <>
          <Route path={ROUTES.HOME} element={<>Hi</>} />
          <Route path={ROUTES.LOGIN} element={<Navigate to={ROUTES.HOME} />} />
          <Route path={ROUTES.SIGNUP} element={<Navigate to={ROUTES.HOME} />} />
        </>
      )}
    </Routes>
  )
}