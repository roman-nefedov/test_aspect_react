//TODO: доработать изменение стейта при клике на кнопке формы
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

export const change = (state = initialState, action) => {
    switch (action.type) {
      // case 'CHANGE': 
      //   return state; //TODO
      default:
        return state;
    }
};
