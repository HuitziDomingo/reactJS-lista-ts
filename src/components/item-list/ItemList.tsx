'use client'

import type { ItemListProps } from "../../interfaces/items/Item"

function ItemList({ items }: ItemListProps) {

    if (items.length === 0) {
        return(
            <div className="empty-state">No hay elementos</div>
        )
    }


    return (
        <div className="list-container">
            <h3>Lista de Elementos</h3>
            <ul className="item-list"> 
                {
                    items.map(item => (
                        <li key={item.id}>
                            <span>{item.text}</span>
                            <span>{item.createdAt.toLocaleTimeString()}</span>
                        </li>

                    ))
                }
            </ul>
        </div>
    )
}

export default ItemList