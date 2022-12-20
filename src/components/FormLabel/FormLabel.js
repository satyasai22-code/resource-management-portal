import React from 'react'

const Label = (props) => {
    const { className, label } = props
    return (
    <label className={className} htmlFor={`${label}`}>
        {label}
    </label>
    )
}

export default Label