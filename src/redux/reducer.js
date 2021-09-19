import { CHANGE } from './types';
const initialState = {
  content: [
    {
      type: "panel",
      props: {
        width: 500,
        height: 200,
        visible: true,
      },
    },
    {
      type: "label",
      props: {
        caption: "test",
        visible: false,
      },
    },
    {
      type: "button",
      props: {
        width: 100,
        height: 50,
        visible: true,
      },
    },
  ],
};

export const reducer = (state = initialState, { type, path, newValue }) => {
  switch (type) {
    case CHANGE:
      console.log(state);
      return {
        //TODO: необходимо преобразовать строковые path/value в валидный объект с последующим его добавлением в стейт
        ...state, ...{ [path]: newValue }
      }
    default:
      return state;
  }
};
