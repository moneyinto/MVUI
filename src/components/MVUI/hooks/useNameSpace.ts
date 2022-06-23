const _bem = (
    namespace: string,
    block: string,
    blockSuffix: string,
    element: string,
    modifier: string
) => {
    let cls = `${namespace}-${block}`;
    if (blockSuffix) {
        cls += `-${blockSuffix}`;
    }
    if (element) {
        cls += `__${element}`;
    }
    if (modifier) {
        cls += `--${modifier}`;
    }
    return cls;
};

const statePrefix = "is-";

export const useNamespace = (block: string) => {
    const namespace = "mv";
    const b = (blockSuffix = "") => _bem(namespace, block, blockSuffix, "", "");

    const m = (modifier?: string) => modifier ? _bem(namespace, block, "", "", modifier) : "";

    const is = (name: string, ...args: [boolean | undefined] | []) => {
        const state = args.length >= 1 ? args[0]! : true;
        return name && state ? `${statePrefix}${name}` : "";
    };

    return {
        b,
        m,
        is
    };
};

export type UseNamespaceReturn = ReturnType<typeof useNamespace>;
