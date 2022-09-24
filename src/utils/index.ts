export const readFile = (path: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onload = () => {
            if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject("文件读取失败！")
            }
        };
        req.open("GET", path);
        req.send();
    });
};