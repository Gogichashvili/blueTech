// import Vue from "vue"
// import VueI18n from "vue-i18n"

// Vue.use(VueI18n)

// function loadLocalMessages() {
//     const locales = require.context('.Locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//     const messages = {}
//     locales.keys().forEach(key => {
//         const matched = key.match(/([A-Za-z0-9-_\s]+)\./i)
//         if (matched && matched.length > 1) {
//             const locale = matched[1]
//             messages[locale] = locales(key)
//         }
//     })
//     return messages
// }

// export default new VueI18n({
//     locale: 'en',
//     fallbackLocale: 'en',
//     messages: loadLocalMessages()
// })