import Clay from '@csii/vx-clay'

// @ts-ignore
Clay.series('ui-outline-1', [function() {
    return {
        link(painter, attr) {

            painter.config({
                'strokeStyle': "#2fa6b6",
                'lineWidth': 4,
                'lineDash': [10, this._width - 20, 10, 0, 10, this._height - 20, 10, 0, 10, this._width - 20, 10, 0, 10, this._height - 20]
            })

            .beginPath()
                .moveTo(0, 0)
                .lineTo(this._width, 0)
                .lineTo(this._width, this._height)
                .lineTo(0, this._height)
                .closePath()
                .stroke()

        }
    }
}])