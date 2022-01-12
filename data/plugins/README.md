# Doc

## Grafana Operation

- [configuration](https://grafana.com/docs/grafana/v7.5/administration/configuration/)

- [Error Loading Plugin, as it is a unsigned one](https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/)

## panel usage

1. doc

- [How to build a panel type plugin](https://grafana.com/tutorials/build-a-panel-plugin/)

- [](https://grafana.com/tutorials/#results)

1. Create plugin steps attention

- 1. At `plugins/panel`, create folder as `untitled-shape`

- 2. Into that folder, then create a `img` to put one svg image into it which will be showed when choose the `Panel's Visualization`

2. Scan List

- [plugin.json](https://grafana.com/docs/grafana/v7.5/developers/plugins/metadata/)

- [tutorials](https://grafana.com/tutorials/)

3. coding part

- [export class PanelPlugin...](https://github.com/grafana/grafana/blob/08bf2a54523526a7f59f7c6a8dafaace79ab87db/packages/grafana-data/src/types/panel.ts#L73)