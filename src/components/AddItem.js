import React from 'react'

const AddItem = ({ newItem, setNewItem, addItem }) => {
    return (
        <div className='addItem' onSubmit={addItem}>
            <form id='addForm'>
                <label htmlFor="itemInput" style={{ display: 'none' }}>Add Item</label>
                <input type="text"
                    placeholder='Add new item'
                    required
                    value={newItem}
                    name='itemInput'
                    id='itemInput'
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button type='submit' className='btn'><i className="fa fa-plus"></i></button>
            </form>
        </div>
    )
}

export default AddItem