export type CourseCardDragItem = {
    id: string
    semesterId: string
    text: string
    type: "COURSECARD"
}
export type SemesterDragItem = {
    id: string
    text: string
    type: "SEMESTER"
}
export type DragItem = CourseCardDragItem | SemesterDragItem
