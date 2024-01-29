import { computed } from 'vue'
import {svgService} from 'https://cdn.jsdelivr.net/gh/tal0311/svg-cdn/svg.service.js';

export function useSvg(key) {
    return computed(()=> svgService.getSvg(key)).value
 }