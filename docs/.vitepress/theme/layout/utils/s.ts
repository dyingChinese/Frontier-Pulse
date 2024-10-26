import fs from 'node:fs/promises';
import path from 'node:path';

export const fileExists = async (filePath: string) => {
    try {
        await fs.access(filePath, fs.constants.F_OK);
        return true;
    } catch {
        return false;
    }
};
export const generatePages = async (
    outDir?: string,
    lang?: string,
    pageSize?: number,
    homepage?: boolean,
    total?: number
) => {
    const indexPath = path.resolve(outDir, 'index.md');

    const indexExist = await fileExists(indexPath);
    const pageTotal = total > 0 ? Math.ceil(total / pageSize) : 0;

    for (let i = 1; i <= pageTotal; i++) {
        const title = i === 1 && homepage ? '' : lang === 'zh' ? `\ntitle: 第${i}页` : `\ntitle: Page ${i}`;
        const page = `
---${title}
layout: CustomPage
---

<Page :pagination="${i}" :total="${pageTotal}" :size="${pageSize}" :homepage="${homepage}" />
`.trim();
        const pagePath = i === 1 && homepage ? indexPath : path.resolve(outDir, `page-${i}.md`);
        await fs.writeFile(pagePath, page);
    }

};
