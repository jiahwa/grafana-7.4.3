import { PanelPlugin } from '@grafana/data'
import { AimfocusPanel } from './Aimfocus'
import {Options} from './types'
export const plugin = new  PanelPlugin<Options>(AimfocusPanel);