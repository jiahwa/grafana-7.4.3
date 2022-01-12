
import React, { Component } from 'react'
import { PanelProps } from '@grafana/data'
import {Options} from './types'

import './common-clay'
import './outline-1'

interface AimfocusPanelProps extends PanelProps<Options> {}
export class AimfocusPanel extends Component<AimfocusPanelProps> {
    constructor(props:AimfocusPanelProps){
        super(props)
    }
    render() {
        const {data} = this.props
        const clayOptions = {
            render: <ui-outline-1></ui-outline-1>
        }

        return (
            <clay options={clayOptions}></clay>
        )
    }
}