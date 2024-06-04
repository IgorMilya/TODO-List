import { FC } from 'react'
import { AuthForm } from 'components/auth-form'


const SignUpPage: FC = () => {

  return (
    <div className="w-full h-screen bg-background flex justify-center items-center">
      <div className="w-[550px] border border-gray-300 shadow-md rounded-lg p-[40px]">
      <AuthForm title="Sign Up" isNotLogin/>
      </div>
    </div>
  )
}

export default SignUpPage