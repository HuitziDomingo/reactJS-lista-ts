'use client'
import { useState } from 'react'
import type { Item } from './interfaces/items/Item'
import InputForm from './components/input-form/InputForm'
import ItemList from './components/item-list/ItemList'

function App() {


  const [items, setItems] = useState<Item[]>([])

  const hadleAddItem = (newItem: Omit<Item, 'id'>) => {
    let item: Item = {
      ...newItem,
      id: crypto.randomUUID()
    }
    setItems(prevItems => [item, ...prevItems])
  }

  return (
    <>
      <main>
        <h1>Mi app de Listas.</h1>

        <section>
          <h2>Agregar Nuevo Elemento</h2>
          <InputForm onAddItem={hadleAddItem}/>
        </section>

        <section>
          <ItemList items={items}/>
        </section>
      </main>
    </>
  )
}

export default App
