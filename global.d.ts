namespace NodeJS {
    interface ProcessEnv {
        ENVIRONMENT: string;
    }
}


interface IEnv {
    readonly mode: 'development' | 'production:AlibabaCloud' | 'production:Github';
    readonly mode_description: string;
    VITE_USER_REMOTE: 'local' | 'AlibabaCloud' | 'Github'
    VITE_USER_BASE: string;
    [k: string]: string;
}
export interface IPost {
    title: string;
    date: string;
    permalink: string;
    order: number;
    pinned: boolean;
    tags?: string[];
    category?: string;
    excerpt: string;
}

export interface IPage {
    max?: number;
    pinned?: string;
    outDir?: string;
}

export interface ICommnet {
    serverURL?: string;
    lang?: string;
    locale?: WalineLocale;
    emoji?: (WalineEmojiInfo | WalineEmojiPresets)[] | false;
    commentSorting?: WalineCommentSorting;
    meta?: string[];
    requiredMeta?: string[];
    login?: string;
    wordLimit?: number | [number, number];
    pageSize?: number;
    imageUploader?: WalineImageUploader | false;
    highlighter?: WalineHighlighter | false;
    texRenderer?: WalineTeXRenderer | false;
    search?: WalineSearchOptions | false;
    copyright?: boolean;
    recaptchaV3Key?: string;
    turnstileKey?: string;
    reaction?: boolean | string[];
}
