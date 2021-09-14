/**
 * When extending the control panel, be sure to uncomment the necessary code for your build process:
 * https://statamic.dev/extending/control-panel
 */
import Isbn from './components/fieldtypes/Isbn.vue'

Statamic.booting(() => {
    Statamic.component('isbn-fieldtype', Isbn)
})
