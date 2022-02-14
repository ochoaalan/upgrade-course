import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [coords, setCoords] = useState({ x:0, y:0 })
  const { x, y } = coords

  useEffect(() => {

    const mouseMove = (e) => {
      const cordenadas = { x: e.x, y: e.y }
      console.log(cordenadas);
      setCoords( cordenadas );
    }

    window.addEventListener('mousemove', mouseMove );

    return () => {
      window.removeEventListener('mousemove', mouseMove );
    }
  }, [])

  return (
    <div>
      <h3>Hello there</h3>
      <p>
        x:{ x } y:{ y }
      </p>
    </div>
  )
}
