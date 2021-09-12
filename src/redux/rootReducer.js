export const rootReducer = () => {
    
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

    const change = (state = initialState, action) => {
        const changeState = ({ type, ...payload }) => {
            return {...state, ...payload};
        }
        switch (action.type) {
            case 'CHANGE':
                return {...state, ...changeState(action)};
            default: 
                return state;
        }
    }
    
    return {

    };
};