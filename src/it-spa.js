import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';
import $ from 'jquery';
import './it-spa.scss';
import './scss/rooms.scss';
import { Router } from './router/router';
import { nav } from './navigation/nav';

const main = $('main');

const router = new Router();

router.mount(main);

router.init();

main.before(nav());
