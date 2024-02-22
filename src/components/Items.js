import React from 'react'
import Item from './Item'

const Items = ({ items, isLoading, fetchError, handleCheck, handleDelete }) => {
    return (
        <>
            {isLoading && <p className='text-center fw-bold'>Loading Your List</p>}
            {!isLoading && fetchError && <p className='text-red'>{fetchError}</p>}
            {!isLoading && !fetchError &&
                <ul className='items'>
                    {items.length ? items.map((item) => <Item
                        key={item.id} id={item.id}
                        item={item} handleCheck={handleCheck}
                        handleDelete={handleDelete} />) : <p className='text-center'>No Items to display</p>}
                </ul>
            }
        </>

    )
}

export default Items