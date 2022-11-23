export type DiagramNodeType = 'pageNode' | 'elementNode' | 'elementNodeItem'

export type PanelDataTypes = 'page' | 'element' | 'element-item'

export const panelTypeMapsToDiagramNode = {
    page: 'pageNode',
    element: 'elementNode',
    'element-item': 'elementNodeItem'
}

export interface PanelItemData {
    id: string 
    title: string 
    subTitle: string 
    type: PanelDataTypes
}