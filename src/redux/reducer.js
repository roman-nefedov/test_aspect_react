import { CHANGE } from './types';
import { updateContent } from '../helpers/updateContent';
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
    {
      type: "panel",
      props: {
        width: 500,
        height: 200,
        visible: true,
      },
      content: [
        {
          type: "label",
          props: {
            caption: "test",
            visible: true,
          },
        },
        {
          type: "label",
          props: {
            caption: "test",
            visible: true,
          },
        },
        {
          type: "button",
          props: {
            width: 100,
            height: 50,
            visible: true,
          },
        }
      ],
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
      try {
        const newState = updateContent(state, path, newValue);
        return {
          content: [...newState.content]
        };
      }
      catch (err) {
        console.log(err.message);
        return state;
      }
    default:
      return state;
  }
};
