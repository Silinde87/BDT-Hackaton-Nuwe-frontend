import React from 'react'

export default function Button({text, type}) {
    return (
        <button type={type}>{text}</button>
    )
}
