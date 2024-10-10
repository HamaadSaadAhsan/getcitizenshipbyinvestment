import React, {useState} from 'react';
import CKEditorComponent from "@/Components/BlogEditor.jsx";

const Editor = ({data, onChange}) => {

    const handleEditorChange = (editor) => {
        onChange(editor)
    }

    return (
        <CKEditorComponent data={data} onChange={(editor) => handleEditorChange(editor)}/>
    );
};

export default Editor;
