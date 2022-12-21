import React from 'react'

const DropDown = (props) => {
    const { className, label, tagList} = props
    return (
        <>
        <select className={className}>
            { tagList.map((tag, index) => (
                <option key={index} className={className} value={tag}>{tag}</option>
                    ))}
        </select>
        </>
    )
}

export default DropDown