import React from "react";
import { Card, Button, Modal } from "antd";
import { Editor } from "react-draft-wysiwyg";
import draftjs from "draftjs-to-html";
import style from "./index.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class Editors extends React.Component {
  state = {
    showRichText: false,
    editorContent: "",
    editorState: ""
  };
  handleClearContent = () => {
    //清空文本
    this.setState({
      editorState: ""
    });
  };
  handleGetText = () => {
    //获取文本内容
    console.log()
    this.setState({
      showRichText: true
    });
  };
  onEditorStateChange = editorState => {
    //编辑器的状态
    this.setState({
      editorState
    });
  };
  onEditorChange = editorContent => {
    //编辑器内容的状态
    this.setState({
      editorContent
    });
  };
  render() {
    const { editorState } = this.state;
    return (
      <div>
        <h2 className={style.tip}>添加试题</h2>
        <Card>
          <Button type="primary" onClick={this.handleClearContent}>
            清空内容
          </Button>
          <Button
            type="primary"
            onClick={this.handleGetText}
            style={{ marginLeft: 10 }}
          >
            获取html文本
          </Button>
        </Card>
        <Card title="富文本编辑器">
          <Editor
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
            onContentStateChange={this.onEditorChange}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
          />
        </Card>
        <Modal
          title="富文本"
          visible={this.state.showRichText}
          onCancel={() => {
            this.setState({
              showRichText: false
            });
          }}
          footer={null}
        >
          {draftjs(this.state.editorContent)}
        </Modal>
      </div>
    );
  }
}
