import React, { memo } from 'react'

export const Small = memo(({ value }) => {
    console.log('me volvì a llamar')
    return (
        <small> { value } </small>
    )
})
