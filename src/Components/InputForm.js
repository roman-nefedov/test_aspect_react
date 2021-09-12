import React from 'react';

export const InputForm = () => {
    function handleSubmit(event) {
        event.preventDefault();
        console.log('clicked', event.target);
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
