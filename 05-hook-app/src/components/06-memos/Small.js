import React from 'react'

export const Small = React.memo(({ value }) => { // solo se dispara si las priperties cambian
  return (
    <div>
      <small> { value } </small>
    </div>
  )
});
