import React from 'react'

export const HeaderItem = ({name, Icon}) => {
  return (
    <div className='flex  items-center gap-3 font-semibold text-[15px] hover:underline underline-offset-8'>
        <Icon/>
        <h2>{name}</h2>
    </div>
  )
}

export default HeaderItem;