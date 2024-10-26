import {UserConfig} from 'vitepress';
import mdItCustomAttrs from "markdown-it-custom-attrs";

const MarkdownConfig: UserConfig['markdown'] = {
    config: (md) => {
        md.use(mdItCustomAttrs, "image", {
            "data-fancybox": "gallery",
        });
    },
    math: true,
    image: {
        lazyLoading: true
    }
};

export default MarkdownConfig;
