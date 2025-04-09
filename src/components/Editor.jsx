import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java";
import { oneDark } from "@codemirror/theme-one-dark";
import "./Editor.css";

const Editor = () => {
  const [code, setCode] = useState(`class Codechef {
    public static void main(String[] args) {
        System.out.println(9 - 2);
        System.out.println(30 / 5);
    }
  }`);

  return (
    <div className="editor-container">
      <h2>Code Editor</h2>
      <CodeMirror
        value={code}
        height="400px"
        extensions={[java()]}
        theme={oneDark}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
};

export default Editor;
