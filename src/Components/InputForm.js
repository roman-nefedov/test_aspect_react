import React from 'react';
import { useDispatch } from 'react-redux';
import { change } from '../redux/actions';

export const InputForm = () => {
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        const path = event.target[0].value;
        const newValue = event.target[1].value;
        dispatch(change({ path, newValue }));
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="path">Путь</label>
            <input type="text" id="path" />
            <label htmlFor="newValue">Новое значение</label>
            <input type="text" id="newValue" />
            <button type="submit">Применить</button>
        </form>
    )
};
