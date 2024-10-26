import {ContentData, createContentLoader} from 'vitepress';

export default createContentLoader('posts/*.md' /* options */, {

    includeSrc: true,
    // render: true,     // 包含渲染的整页 HTML?
    excerpt(file, options) {
        file.excerpt = file.content.split('<!-- DESC SEP -->')[1];
    },
    transform(raw) {
        return totransform(raw)
    }
});


function totransform(raw: ContentData[]): any {
    return raw.map((page) => {
        return {
            title: getTitle(page),
            url: page.url,
            excerpt: page.excerpt,
            date: formatDate(page.frontmatter.date ?? page.frontmatter.datetime),
            tags: page.frontmatter.tags
        }
    }).sort((a, b) => new Date(b.date.time).getTime() - new Date(a.date.time).getTime())
}


const getTitle = (raw: ContentData, pattern = /^#\s+.+/gim): string => {
    let title: string;
    if (raw.frontmatter.title) title = raw.frontmatter.title;
    else if (pattern.test(raw.src)) {
        title = raw.src.match(pattern)[0].split('#')[1].trim();
    } else title = '无标题文章';
    return title;
}


function formatDate(raw: string): any {
    const date = new Date(raw)
    date.setUTCHours(8)
    return {
        time: +date,
        string: date.toLocaleDateString('zh-Hans', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })
    }
}
