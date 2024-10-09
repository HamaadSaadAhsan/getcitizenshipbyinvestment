import CKEditorComponent from "@/Components/BlogEditor.jsx";
import {useEffect, useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";

const Test = () => {

    const [editorContent, setEditorContent] = useState(null)

    useEffect(() => {
        console.log(editorContent)
    }, [editorContent]);

    return (
        <Authenticated>
            <Head title="Test"/>
            <CKEditorComponent />
        </Authenticated>
    )
}

export default Test
