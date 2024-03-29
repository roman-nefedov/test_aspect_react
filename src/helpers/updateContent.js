import { addContentItem } from "./parser";

const checkIsContent = step => step.match(/content\[(\d+)\]/);

export const updateContent = ({ content }, path, newValue) => {
    if (!newValue) return { content };

    if (path === '') {
        return {
            content: [
                ...content,
                addContentItem(newValue)()
            ],
        };
    }

    const steps = path.split(".");
    const [nodes] = steps.reduce((acc, step) => {
        const isContent = checkIsContent(step);
        const [nodesList, cursor] = acc;
        const nextNode = isContent
            ? cursor.content[Number(isContent[1])]
            : cursor[step];
        return [[nextNode, ...nodesList], nextNode];
    }, [[], { content }]);

    // eslint-disable-next-line no-unused-vars
    const [_, ...rest] = nodes;
    return [...rest, { content }].reduce((acc, node, i) => {
        const step = steps[steps.length - 1 - i];
        const isContent = checkIsContent(step);
        if (isContent) {
            node.content[Number(isContent[1])] = acc;
        } else {
            node[step] = acc;
        }
        return node;
    }, addContentItem(newValue)());
};
