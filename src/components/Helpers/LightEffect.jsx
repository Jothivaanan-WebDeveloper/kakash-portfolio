import React from 'react'

const LightEffect = ({ top, left, right, size = 500 }) => {

    const positionStyles = {
        top: `${top}px`,
        height: `${size}px`,
        width: `${size}px`,
        zIndex: -1
    }

    if (left !== undefined) Object.assign(positionStyles, { left: `${left}px` });
    if (right !== undefined) Object.assign(positionStyles, { right: `${right}px` });

    return (
        <div className='shiny-effect overflow-x-hidden' style={positionStyles}></div>
    )
}
export default LightEffect