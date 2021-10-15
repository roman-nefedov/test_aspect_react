// eslint-disable-next-line no-new-func
export const addContentItem = string => new Function(`{return (${string})}`);
