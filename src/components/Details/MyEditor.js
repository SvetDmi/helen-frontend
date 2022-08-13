import React from 'react';
import {Editor} from '@tinymce/tinymce-react';

export default function MyEditor({onEditorChange, initialValue, value}) {
    // const editorRef = React.useRef(null);
    // const log = () => {
    //   if (editorRef.current) {
    //     console.log(editorRef.current.getContent());
    //   }
    // };


    return (
        <>

            <Editor
                apiKey='k8x0nywnci7858fgfvujxwkge7bkbgcofwefzpii1fpb3ttj'
                // onInit={(evt, editor) => editorRef.current = editor}
                initialValue={initialValue}
                value={value}
                onEditorChange={onEditorChange}

                init={{
                    height: 300,
                    menubar: false,
                    selector: 'textarea',
                    outputFormat: 'text',
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media image table paste code help autoresize'
                    ],
                    toolbar: 'undo redo | ' +
                        'bold italic underline strikethrough superscript charmap   backcolor removeformat | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'fullscreen  preview searchreplace   |   code',
                    content_style: 'body {  font-family: Helvetica,Arial,sans-serif; font-size:14px}'
                }}
            />
            {/*<button onClick={log}>Log editor content</button>*/}

        </>
    );
}

// toolbar: 'undo redo | formatselect | ' +
// 'bold italic underline strikethrough superscript backcolor | alignleft aligncenter ' +
// 'alignright alignjustify | bullist numlist outdent indent | ' +
// 'removeformat | image media code',
//     content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
