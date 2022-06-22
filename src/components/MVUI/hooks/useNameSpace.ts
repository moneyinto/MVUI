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

export const useNamespace = (block: string) => {
    const namespace = "mv";
    const b = (blockSuffix = "") => _bem(namespace, block, blockSuffix, "", "");

    const m = (modifier?: string) => modifier ? _bem(namespace, block, "", "", modifier) : "";
    
    return {
        b,
        m
    };
};

export type UseNamespaceReturn = ReturnType<typeof useNamespace>;
