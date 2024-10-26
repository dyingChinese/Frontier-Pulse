import {UserConfig} from "vitepress";

const headConfig: UserConfig['head'] = [
    ["link", {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",},],
    ["script", {src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",},],
];

export default headConfig;
