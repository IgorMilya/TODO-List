import { FC } from 'react'

const UnauthorizedPage: FC = () => {

  return (
    <div className="w-full h-screen bg-background flex justify-center items-center">
      <h1 className="text-8xl font-bold">401 Unauthorized</h1>
    </div>
  )
}

export default UnauthorizedPage