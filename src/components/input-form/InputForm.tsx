'use client'

import type { InputFormProps } from "../../interfaces/items/Item"
import { useState } from "react"

function InputForm({ onAddItem }: InputFormProps) {

    const [inputValue, setInputValue] = useState<string>('')

    const handleSubmit = (evt: React.FormEvent) => {
        evt.preventDefault()
        if (inputValue.trim()) {
            onAddItem({
                text: inputValue.trim(),
                createdAt: new Date()
            })
            setInputValue('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-container">
                <input
                    type="text"
                    placeholder="Texto"
                    value={inputValue}
                    onChange={(evt) => setInputValue(evt.target.value)}
                    className="text-field"
                />
                <button type="submit" className="submit-button">Agregar</button>
            </form>
        </div>
    )
}

export default InputForm