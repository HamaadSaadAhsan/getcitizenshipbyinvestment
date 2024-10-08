import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';


const toolbarOptions = [
  [{ font: [] }],
  [{ align: [] }],
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ color: [] }, { background: [] }],
  ['link', 'image'],
  ['clean'],
];

const QuillEditor = forwardRef(({ defaultValue, onTextChange, onSelectionChange }, ref) => {

    const containerRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
        onTextChangeRef.current = onTextChange;
        onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
        const container = containerRef.current;
        const editorContainer = container.appendChild(
          container.ownerDocument.createElement('div'),
        );
        const quill = new Quill(editorContainer, {
          theme: 'snow',
          modules: {
            toolbar: {
                container: toolbarOptions
              },
          }
        });

        ref.current = quill;

        if (defaultValueRef.current) {
          quill.setContents(defaultValueRef.current);
          ref.current.root.innerHTML = defaultValueRef.current;
        }

        quill.on(Quill.events.TEXT_CHANGE, (...args) => {
          onTextChangeRef.current?.(...args);
        });

        quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
          onSelectionChangeRef.current?.(...args);
        });

        return () => {
          ref.current = null;
          container.innerHTML = '';
        };
    }, [ref]);


  const storeImageInPublicStorage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await axios.post(route('image.upload'), formData);

    if (response.status !== 200) { // Changed from response.ok to response.status
      throw new Error('Image upload failed');
    }

    return response;
  };

  return <div ref={containerRef}></div>;
});

QuillEditor.displayName = 'QuillEditor';

export default QuillEditor;
