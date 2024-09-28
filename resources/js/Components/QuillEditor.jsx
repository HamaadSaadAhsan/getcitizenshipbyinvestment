import { useMemo, useRef, useState, useEffect } from 'react';
import 'quill/dist/quill.snow.css';
import { Controller } from 'react-hook-form';
import axios from 'axios';

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

const QuillEditor = ({ form, name }) => {
  const { setValue } = form;
  const { control } = form;
  const quillRef = useRef(null);
  const [ReactQuill, setReactQuill] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('react-quilljs').then((QuillModule) => {
        setReactQuill(() => QuillModule.default);
      });
    }

    // New MutationObserver to handle DOM changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {});
    });

    // Observe the editor's container
    const editorContainer = quillRef.current?.getEditor()?.container;
    if (editorContainer) {
      observer.observe(editorContainer, { childList: true, subtree: true });
    }

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // handle upload image and insert to editor
  const handleUploadImage = async () => {
    const quill = quillRef.current?.getEditor();

    if (quill) {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.click();

      input.onchange = async () => {
        const file = input.files[0];
        if (/^image\//.test(file.type)) {
          const res = await storeImageInPublicStorage(file);
          const range = quill.getSelection(true);
          if (range) {
            quill.insertEmbed(range.index, 'image', res.data.url);
          } else {
            quill.clipboard.dangerouslyPasteHTML(
              quill.getLength(),
              `<img src="${res.data[0].url}" alt=""/>`
            );
          }
        }
      };
    }
  };

  // handle change editor
  const handleChange = (html) => {
    setValue(name, html);
  };

  const module = useMemo(
    () => ({
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: handleUploadImage,
        },
      },
    }),
    []
  );

  const storeImageInPublicStorage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await axios.post(route('image.upload'), formData);

    if (response.status !== 200) { // Changed from response.ok to response.status
      throw new Error('Image upload failed');
    }

    console.log(response)

    return response;
  };

  return (
    <Controller
      name={name || ''}
      control={control}
      render={() => {
        if (typeof window !== 'undefined' && ReactQuill) {
          const Quill = ReactQuill; // Save a reference to ReactQuill

          return (
            <Quill
              ref={quillRef}
              value={form.watch(name)}
              theme='snow'
              modules={module}
              onChange={handleChange}
              placeholder='Write something awesome...'
            />
          );
        }
        return null;
      }}
    />
  );
};

export default QuillEditor;
