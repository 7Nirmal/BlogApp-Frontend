import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import "./write.css";


export default function Write(){
    const [image,setImage] = useState([]);
    const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
    );
    const updateTextDescription =  async (state) => {

        await setEditorState(state);
        
        const data = convertToRaw(editorState.getCurrentContent());
        console.log(data);
        
        };
    return(
        <div className="write">
            <div className="writegroup">
                <img src={image} alt="preview"/>
            <label htmlFor="file">
            <i className="fa-solid fa-plus"></i>
            </label>
            <input type="file"
            className="fileinput"
            id="file"
            style={{display:"none"}}  
            onChange={(e)=>setImage(e.target.files[0])}
            />
            <input type="text" placeholder="title" className="title"/>
            <button className="publish">Publish</button>

            </div>

<div className="editor">
<Editor

editorState={editorState}

toolbarClassName="toolbarClassName"

wrapperClassName="wrapperClassName"

editorClassName="editorClassName"

onEditorStateChange={updateTextDescription}

/>

</div>
        </div>
    )
}