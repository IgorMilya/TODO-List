import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Formik, FormikHelpers } from 'formik'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { Input, Button } from 'UI'
import { auth, googleProvider } from 'config'
import { Icon } from 'assets'
import { ROUTES } from 'routes'
import { LoginFormType } from 'types'
import { initialValues, validationSchema } from './authForm.utils'

interface AuthFormProps {
  title: string,
  isNotLogin?: boolean
}

const AuthForm: FC<AuthFormProps> = ({ title, isNotLogin }) => {
  const navigate = useNavigate()
  const handleSubmit = async ({ email, password }: LoginFormType, actions: FormikHelpers<LoginFormType>) => {

    try {
      isNotLogin ? await createUserWithEmailAndPassword(auth, email, password) : await signInWithEmailAndPassword(auth, email, password)
      actions.resetForm()
      navigate(ROUTES.HOME)
    } catch (err) {
      navigate(ROUTES.UNAUTHORIZED)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      navigate(ROUTES.HOME)
    } catch (err) {
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
        <h1 className="text-5xl font-bold mb-[30px]">{title}</h1>
        <div className="mb-[30px] flex flex-col gap-3">
          <Input name="email" type="email" placeholder="Enter your email" />
          <Input name="password" type="password" placeholder="Enter your password" />
        </div>
        <div className="flex flex-col gap-2 mb-[10px]">
          <Button color="primary" type="submit">{title}</Button>
          <Button color="secondary" startIcon={Icon.Google} onClick={handleGoogleLogin}>Google</Button>
        </div>
        {!isNotLogin && <div className="text-center">
          <p className="text-gray-600">Don't have an account yet?
            <Link to={ROUTES.SIGNUP} className="text-primary hover:underline"> Sign Up</Link></p>
        </div>}
      </Form>
    </Formik>
  )
}

export default AuthForm