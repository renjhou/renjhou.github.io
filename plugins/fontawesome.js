import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

config.autoAddCss = false;

library.add(faArrowUp);
library.add(faLocationDot);
library.add(faPhone);
library.add(faEnvelope);

Vue.component('font-awesome-icon', FontAwesomeIcon);
