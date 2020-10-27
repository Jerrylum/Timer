'use strict';

let vuePanel = new Vue({
    el: '#setting-panel',
    mounted() {
        let cookie = getCookie();

        this.theme = cookie.theme || this.theme;
    },
    data: {
        isHideOptional: false,
        theme: 'dark',
        themesList: [
            'dark',
            'light'
        ]
    },
    watch: {
        isHideOptional: function() {
            document.body.style.cursor = this.isHideOptional ? 'none' : '';
        },
        theme: {
            handler: function() {
                this.themesList.forEach(x => document.body.classList.remove(x));
                document.body.classList.add(this.theme);
                setCookie({ theme: this.theme });
            },
            immediate: true
        }
    },
});