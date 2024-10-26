import {loadEnv} from "vitepress";
import {IEnv} from "../../global";

export enum EProjectEnv {
    DEV = "development",
    PROD_GITHUB = "prod_github",
    PROD_Alibaba = "prod_alibaba"
}
export const getProjectEnv = (): IEnv => {
    let env: IEnv | undefined;
    if (process.env.ENVIRONMENT === EProjectEnv.DEV) {
        env = loadEnv(EProjectEnv.DEV, process.cwd()) as IEnv
    } else if (process.env.ENVIRONMENT === EProjectEnv.PROD_GITHUB) {
        env = loadEnv(EProjectEnv.PROD_GITHUB, process.cwd()) as IEnv;
    } else if (process.env.ENVIRONMENT === EProjectEnv.PROD_Alibaba) {
        env = loadEnv(EProjectEnv.PROD_Alibaba, process.cwd()) as IEnv;
    }
    console.log(`${process.env.ENVIRONMENT} ====> ${JSON.stringify(env, null, 2)}`)
    return env;
}


