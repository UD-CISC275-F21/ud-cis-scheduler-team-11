type Course = {
    id: string
}

export const findCourseIndexById = <TCourse extends Course>(
    Courses: TCourse[],
    id: string
):number => {
    return Courses.findIndex((Course: TCourse) => Course.id === id);
};
export const moveCourse = <TCourse>(array: TCourse[], from: number, to: number): TCourse[] => {
    const Course = array[from];
    return insertCourseAtIndex(removeCourseAtIndex(array, from), Course, to);
};

export function removeCourseAtIndex<TCourse>(array: TCourse[], index: number)
:TCourse[]{
    return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function insertCourseAtIndex<TCourse>(
    array: TCourse[],
    Course: TCourse,
    index: number
): TCourse[] {
    return [...array.slice(0, index), Course, ...array.slice(index)];
}
    