import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Upload, { UploadFile } from "./upload";
import Icon from "../Icon/icon";

const defaultFileList: UploadFile[] = [
  {
    uid: "123",
    size: 1234,
    name: "hello.md",
    status: "uploading",
    percent: 30
  },
  { uid: "122", size: 1234, name: "xyz.md", status: "success", percent: 30 },
  { uid: "121", size: 1234, name: "eyiha.md", status: "error", percent: 30 }
];

// const checkFileSize = (file: File) => {
//   if (Math.round(file.size / 1024 ) > 50) {
//     alert("file too big");
//     return false;
//   }
//   return true;
// };

// const filePromise = (file: File) => {
//   const newFile = new File([file], "new_name.docx", { type: file.type });
//   return Promise.resolve(newFile);
// };


const SimpleUpload = () => {
  console.log(action, "action");
  return (
    <Upload
      action="https://jsonplaceholder.typicode.com/posts"
      // onProgress={action('progress')}
      // onSuccess={action('success')}
      // onError={action('error')}
      onChange={action("changed")}
      defaultFileList={defaultFileList}
      // beforeUpload={filePromise}
      onRemove={action("removed")}
      name="filename"
      data={{ key: "value" }}
      headers={{ "X-Powered-By": "lighting-ui-react" }}
      accpet=".jpg"
      multiple
      drag={true}
    >
      {/* <Icon icon="upload" size="5x" theme="secondary" /> */}
      
      
      <span style={{'fontSize': '44px'}}><Icon name="upload-cloud" size="32" /></span>
      <p>Drag file over to upload</p>
    </Upload>
  );
};

storiesOf("Upload", module).add("上传", SimpleUpload);
