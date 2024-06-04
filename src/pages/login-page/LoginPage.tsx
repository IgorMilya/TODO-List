import { FC } from 'react'
import { AuthForm } from 'components'
import { Icon } from 'assets'

const LoginPage: FC = () => {

  return (
    <div className="w-full h-screen bg-background">
      <div className="flex gap-2 w-full">
        <div className="w-[50%] flex justify-center items-center px-[160px]">
          <div className="flex flex-col w-full">
            <AuthForm title="Log in" />
          </div>
        </div>
        <div className="w-[50%] h-screen flex items-center justify-center">
          <img src={Icon.Login} alt="Login" />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
