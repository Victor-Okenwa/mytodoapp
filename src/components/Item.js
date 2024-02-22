import React from 'react'

const Item = ({ id, item, handleCheck, handleDelete }) => {
    return (
        <li className={`item ${item.checked ? 'checked' : ''}`}>
            <input type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(id)}
                id={id} />
            <b className="name">{item.item}</b>
            <button type='button' className="btn" onClick={() => handleDelete(id)}><i className="fa fa-trash"></i></button>
        </li>
    )
}

export default Item