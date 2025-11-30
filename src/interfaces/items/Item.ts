export interface Item {
    id: string
    text: string
    createdAt: Date
}

export interface InputFormProps {
    onAddItem: (item: Omit<Item, 'id'>) => void
}

export interface ItemListProps {
    items: Item[]
    onDelete: (id: string) => void
}