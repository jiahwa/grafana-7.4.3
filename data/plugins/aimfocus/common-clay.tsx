import React, { Component } from 'react'
import Clay from '@csii/vx-clay'
let chartRef: Clay

export class clay extends Component {
    props: {
        options:Record<string,string|HTMLElement>
    }
    constructor(){
        super()
    }
    componentDidMount() {
        chartRef = new Clay(this.props.options)
        this.props.options.el = document.getElementById('clay')
    }
    // 

    componentWillUnmount() {
        chartRef.$destroy()
    }

    render () {
        return (<div id='clay' style={{
            width: "100%",
            height: "100%"
        }}></div>)
    }
}