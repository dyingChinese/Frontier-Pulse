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
