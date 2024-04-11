import React, { FC } from "react";
import { UploadFile } from "./upload";
import Icon from "../Icon/icon";
import Progress from "../Progress";

interface UploadListProps {
    fileList: UploadFile[];
    onRemove: (_file: UploadFile) => void;
}

export const UploadList: FC<UploadListProps> = props => {
    const { fileList, onRemove } = props;
    return (
        <ul className="lighting-upload-list">
            {fileList.map(item => {
                return (
                    <li className="lighting-upload-list-item" key={item.uid}>
                        <span className={`file-name file-name-${item.status}`}>
                            <Icon name="paperclip" size="16" theme="secondary" />
                            {item.name}
                        </span>
                        <span className="file-status">
                            {(item.status === "uploading" || item.status === "ready") && (
                                <Icon name="loader" className="spin-loading" size="16" theme="primary" />
                            )}
                            {item.status === "success" && (
                                <Icon name="check-circle" size="16" theme="success" />
                            )}
                            {item.status === "error" && (
                                <Icon name="x-circle" size="16" theme="danger" />
                            )}
                        </span>
                        <span className="file-actions">
                            <Icon
                                name="x-circle"
                                size="16"
                                theme="danger"
                                onClick={() => {
                                    onRemove(item);
                                }}
                            />
                        </span>
                        {item.status === "uploading" && (
                            <Progress percent={item.percent || 0} />
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default UploadList;
