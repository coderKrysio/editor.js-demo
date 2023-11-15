"use client";

import { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import { EDITOR_TOOLS } from './editortool';

const Editor = () => {
    const [isMounted, setIsMounted] = useState(true)
    const ref = useRef<EditorJS | null>(null);

    const initializeEditor = async () => {
        const EditorJS = (await import("@editorjs/editorjs")).default;
        if(!ref.current) {
            const editor = new EditorJS({
                holder: "editorjs",
                onReady: () => {
                    ref.current = editor;
                },
                autofocus: true,
                tools: EDITOR_TOOLS,
            });
            ref.current = editor;
        }
    }

    // useEffect(() => {
    //     if(typeof window !== "undefined") {
    //         setIsMounted(true);
    //     }
    // }, [])

    // useEffect(() => {
    //     const init = async () => {
    //         await initializeEditor();
    //     }

    //     if(isMounted) {
    //         init();
    //         return () => {
    //             if(ref.current) {
    //                 ref.current.destroy();
    //                 ref.current = null;
    //             }
    //         }
    //     }
    // }, [isMounted])

    useEffect(() => {
        if (ref.current === null) {
            initializeEditor();
        }
        return () => {
            ref?.current?.destroy();
            ref.current = null;
        }
    }, []);
    
    return (
        <div id="editorjs" className='prose max-w-full min-h-screen'></div>
    )
}

export default Editor