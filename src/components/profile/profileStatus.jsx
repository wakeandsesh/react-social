import React, { useState, useEffect } from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.setStatusThunk(status);
    }
    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);
    return (
            <>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status || 'Статус отсутствует.'}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onChangeStatus} onBlur={deactivateEditMode} autoFocus={true} type="text" value={status}/>
                    </div>
                }
            </>
    )
}

export default ProfileStatus;