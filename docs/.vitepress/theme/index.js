import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";

export default {
...DefaultTheme,
enhanceApp(ctx) {
DefaultTheme.enhanceApp(ctx);
},
setup() {
const { frontmatter } = toRefs(useData());
const route = useRoute();

        giscusTalk({
            repo: 'doocs/doocs.github.io',
            repoId: 'MDEwOlJlcG9zaXRvcnkxNjQzMDM4NTM=',
            mapping: 'number',
            inputPosition: 'top',
            lang: 'zh-CN',
            locales: {
                'zh-Hans': 'zh-CN',
                'en-US': 'en'
            },
            homePageShowComment: true,
            term: '241',
            lightTheme: 'light',
            darkTheme: 'transparent_dark',
        }, {
            frontmatter,
            route
        }, true);
    }
};