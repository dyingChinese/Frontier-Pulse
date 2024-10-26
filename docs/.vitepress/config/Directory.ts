import path, { dirname } from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
// 定义要搜索的文件夹路径
const folderPath = '../../article';

// 获取当前模块的文件URL
const __filename = fileURLToPath(import.meta.url);

// 获取当前模块的目录路径
const __dirname = dirname(__filename);

// 现在你可以使用 __dirname 来获取项目根路径
const rootPath = path.resolve(__dirname, '..');

console.log('Project root path:', rootPath);

// 递归函数来遍历文件夹
function traverseDirectory(dir, callback) {
	fs.readdirSync(dir).forEach((file) => {
		const fullPath = path.join(dir, file);
		if (fs.lstatSync(fullPath).isDirectory()) {
			traverseDirectory(fullPath, callback);
		} else {
			callback(fullPath);
		}
	});
}

// 生成侧边栏配置项
function generateSidebarConfig(folderPath) {
	const sidebarConfig = {};

	traverseDirectory(folderPath, (filePath) => {
		if (path.extname(filePath) === '.md') {
			// 从文件路径中提取目录和文件名
			const relativePath = path.relative(folderPath, filePath);
			const directory = path.dirname(relativePath);
			const fileName = path.basename(filePath, '.md');
			const link = `/${directory}/${fileName}`;

			// 构建配置项结构
			if (!sidebarConfig[directory]) {
				sidebarConfig[directory] = [
					{
						text: directory.split('/').pop(),
						items: []
					}
				];
			}

			sidebarConfig[directory][0].items.push({ text: fileName, link: link });
		}
	});

	return sidebarConfig;
}

// 转换为VitePress sidebar格式
function convertToVitePressSidebar(sidebarConfig) {
	const vitePressSidebar = {};
	for (const [key, value] of Object.entries(sidebarConfig)) {
		// @ts-ignore
		vitePressSidebar[`/${key}/`] = value;
	}
	return vitePressSidebar;
}

// 使用函数并打印结果
const sidebarConfig = generateSidebarConfig(folderPath);
const vitePressSidebar = convertToVitePressSidebar(sidebarConfig);

console.log(JSON.stringify(vitePressSidebar, null, 2));
