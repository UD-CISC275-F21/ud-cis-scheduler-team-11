export type CardDragItem = {
    id: string
    columnId: string
    text: string
    type: "CARD"
}
export type ColumnDragItem = {
    id: string
    text: string
    button: JSX.Element
    type: "COLUMN"
}
export type DragItem = CardDragItem | ColumnDragItem