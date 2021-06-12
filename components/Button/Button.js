import React from 'react'
import SCButton from './Button.styled'

export default function Button({text, type}) {
    return (
        <SCButton type={type}>{text}</SCButton>
    )
}
