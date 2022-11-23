export type DiagramNodeType = 'page' | 'element' | 'element-item'

export interface PanelItem {
    id: string 
    title: string 
    subTitle: string 
    type?: DiagramNodeType
}