import { FC } from 'react'
import { AuthForm } from 'components'
import { Icon } from 'assets'

const LoginPage: FC = () => {

  return (
    <div className="w-full h-screen bg-background">
      <div className="flex gap-2 w-full h-full justify-center">
        <div className="w-1/2 flex justify-center items-center lg:px-20 xl:px-40">
          <div className="flex flex-col w-full">
            <AuthForm title="Log in" />
          </div>
        </div>
        <div className="w-1/2 h-screen lg:flex items-center justify-center hidden">
          <img src={Icon.Login} alt="Login" />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
