import { CHANGE } from "./types"

export const change = ({ path, newValue }) => {
    return { type: CHANGE, path, newValue };
};
