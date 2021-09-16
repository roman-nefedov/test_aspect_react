import React from 'react';
import { useSelector } from 'react-redux';

export const InputForm = () => {
    const store = useSelector(store => store.change.content);

    function handleSubmit(event) {
        event.preventDefault();
        const path = event.target[0].value;
        const newValue = event.target[1].value;
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="path">Путь</label>
            <input type="text" name="path" />
            <label htmlFor="newValue">Новое значение</label>
            <input type="text" name="newValue"/>
            <button type="submit">Применить</button>
        </form>
    )
};
