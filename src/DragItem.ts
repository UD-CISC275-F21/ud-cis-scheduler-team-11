export type CardDragItem = {
    id: string
    semesterId: string
    text: string
    type: "CARD"
}
export type SemesterDragItem = {
    id: string
    text: string
    type: "SEMESTER"
}
export type DragItem = CardDragItem | SemesterDragItem
