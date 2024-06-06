import { FC } from 'react'
import { Icon } from 'assets'

interface CheckboxProps {
  completed: boolean,
  onChange: () => void
}

const Checkbox: FC<CheckboxProps> = ({ completed, onChange }) => {


  return (
    <label
      className="w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded bg-white relative cursor-pointer">
      <input
        type="checkbox"
        className="mr-2 appearance-none"
        checked={completed}
        onChange={onChange}
      />
      {completed && <img className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={Icon.CheckboxArrow} alt="CheckboxArrow" />}
      </label>
        )
      }

      export default Checkbox