import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import EditorToolbar, { modules, formats } from "./EditorToolbar";

interface EditorProps {
	title: string 
	setTitle: Function
	postText: any
	setPostText: any
}

const Editor = ({title, setTitle, postText, setPostText}: EditorProps) => {

	// const [title, setTitle] = useState("")
  // const [postText, setPostText] = useState<string | null>("")

	console.log("EDITOR LAUNCHED", typeof postText, postText)

  return (
    <div>        
        <input 
            className='titleBox'
            placeholder='Title...' 
						defaultValue={title}
            onChange={(event) => {setTitle(event.target.value)}}
        />
				
        <EditorToolbar />
        <ReactQuill 
            className='Quill-Editor'
            theme="snow" 
						defaultValue={postText}
            onChange={setPostText}
            placeholder={"Write something awesome..."}
            modules={modules}
            formats={formats}
        />
    </div>
  )
}

export default Editor