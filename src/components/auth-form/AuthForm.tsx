import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { Form, Formik, FormikHelpers } from 'formik'
import { useAddUserMutation, useLazyGetOneUserQuery } from 'store/api'
import { Input, Button } from 'UI'
import { auth, googleProvider } from 'config'
import { Icon } from 'assets'
import { ROUTES } from 'routes'
import { LoginFormType, NewUserType } from 'types'
import { initialValues, validationSchema } from './authForm.utils'

interface AuthFormProps {
  title: string,
  isNotLogin?: boolean
}

const AuthForm: FC<AuthFormProps> = ({ title, isNotLogin }) => {
  const navigate = useNavigate()
  const [addUser] = useAddUserMutation()
  const [getOneUser] = useLazyGetOneUserQuery()
  const handleSubmit = async ({ email, password }: LoginFormType, actions: FormikHelpers<LoginFormType>) => {

    try {
      if (isNotLogin) {
        await createUserWithEmailAndPassword(auth, email, password)

        const preparedData: NewUserType = {
          uid: auth.currentUser?.uid!,
          name: auth.currentUser?.displayName,
          email: auth.currentUser?.email!,
          permission: true,
        }

        addUser(preparedData)
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }

      localStorage.setItem('isAuth', 'true')
      actions.resetForm()
      navigate(ROUTES.HOME)
    } catch (err) {
      navigate(ROUTES.UNAUTHORIZED)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)

      if (auth.currentUser?.uid) {
        const { data } = await getOneUser(auth.currentUser.uid)
        if (!data?.length) {
          const preparedData: NewUserType = {
            uid: auth.currentUser?.uid!,
            name: auth.currentUser?.displayName,
            email: auth.currentUser?.email!,
            permission: true,
          }
          addUser(preparedData)
        }
      }

      localStorage.setItem('isAuth', 'true')
      navigate(ROUTES.HOME)
    } catch
      (err) {
      navigate(ROUTES.UNAUTHORIZED)
    }
  }

  const formikConfig = {
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  }

  return (
    <Formik {...formikConfig}>
      <Form className="w-full flex flex-col justify-between h-full">
        <h1 className="text-5xl font-bold mb-8">{title}</h1>
        <div className="mb-8 flex flex-col gap-3">
          <Input name="email" type="email" placeholder="Enter your email" />
          <Input name="password" type="password" placeholder="Enter your password" />
        </div>
        <div className="flex flex-col gap-2 mb-2.5">
          <Button variant="secondary" type="submit">{title}</Button>
          <Button variant="primary" startIcon={Icon.Google} onClick={handleGoogleLogin}>Google</Button>
        </div>
        {!isNotLogin && <div className="text-center">
          <p className="text-gray-600">Don't have an account yet?
            <Link to={ROUTES.SIGNUP} className="text-secondary hover:underline"> Sign Up</Link></p>
        </div>}
      </Form>
    </Formik>
  )
}

export default AuthForm