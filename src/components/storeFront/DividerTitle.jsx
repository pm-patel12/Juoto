import React from 'react'

const DividerTitle = ({ title, side = 'center' }) => {
    return (
        <div className={`divider-title ${side}`}>
            {
                title &&
                <span>{title}</span>
            }
        </div>
    )
}

export default DividerTitle