import CKEditorComponent from "@/Components/BlogEditor.jsx";
import {useEffect, useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";

const Test = () => {


    return (
        <Authenticated>
            <Head title="Test"/>
            <CKEditorComponent />
        </Authenticated>
    )
}

export default Test
