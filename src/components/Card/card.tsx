import React, { MouseEventHandler } from 'react'

interface DivProps extends React.HTMLAttributes<HTMLDivElement>{
  animation: boolean,
  id: string,
  title: string,
  ref: React.Ref<HTMLDivElement>
}

const Card: React.FC<DivProps> = ({ animation, children, id, title, ref, ...props }) => {
  return(
      <div>
        {children}
      </div>
  )
}

export default Card