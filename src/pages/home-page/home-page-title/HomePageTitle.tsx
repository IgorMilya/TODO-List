import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from 'config/firebase'
import { Button } from 'UI'
import { useUserReducerHook } from 'hooks'
import { Icon } from 'assets'
import { ROUTES } from 'routes'

interface HomePageTitleProps {
  length: number | undefined
}

const HomePageTitle: FC<HomePageTitleProps> = ({ length }) => {
  const navigate = useNavigate()
  const { deleteUserToStore } = useUserReducerHook()

  const handleLogout = async () => {
    try {
      await signOut(auth)
      localStorage.clear()
      deleteUserToStore()
      navigate(ROUTES.LOGIN)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="lg:flex justify-between items-center mb-3.5 block">
      <div className="flex gap-8 sm:items-center lg:mb-0 mb-5 sm:flex-row flex-col items-start">
        <h1 className="text-5xl font-bold">My Todo List</h1>
        <div className="text-5xl border-2 rounded px-2.5 py-1.5">{length}</div>
      </div>
      <div>
        <Button variant="secondary" startIcon={Icon.Logout} onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  )
}

export default HomePageTitle