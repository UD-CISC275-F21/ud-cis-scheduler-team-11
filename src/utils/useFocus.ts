import { useRef, useEffect } from "react";

//refs react hook to reference DOM nodes of rendered React elements
export const useFocus = ():React.RefObject<HTMLInputElement> => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        ref.current?.focus();//ref will be immutable, use ?. to access it
    }, []);
    return ref;
};
//access the rendered input element