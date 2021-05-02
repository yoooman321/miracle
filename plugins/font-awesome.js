import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faUser, faHome, faFire, faPlay, faHeart, faCircle, faMusic, faGamepad, faNewspaper, faChevronRight, faHistory, faClock, faFilm, faArrowLeft, faSignInAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faUser, faHome, faFire, faPlay, faHeart, faCircle, faMusic, faGamepad, faNewspaper, faChevronRight, faHistory, faClock, faFilm, faArrowLeft, faSignInAlt, faTimes)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.config.productionTip = false
