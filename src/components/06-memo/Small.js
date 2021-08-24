import React  from 'react'

export const Small =  React.memo(  ({ value } ) => {
    return (
        <div>
            <h3> { value } </h3>
        </div>
    )
});
