

import Player from "@vimeo/player";
import { common } from "./common";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000, {
    leading: false,
}));

const current_time = JSON.parse(localStorage.getItem(common.LS_KEY)) || 0;
player.setCurrentTime(current_time);

function onPlay(data) {
    localStorage.setItem(common.LS_KEY, JSON.stringify(data.seconds));
}