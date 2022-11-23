export type DiagramNodeType = 'page' | 'element' | 'element-item'

export interface PanelItemData {
    id: string 
    title: string 
    subTitle: string 
    type: DiagramNodeType
}