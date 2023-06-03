import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusFCPropsType = {
    status: string
    updateStatus: any
}

export const ProfileStatusFC = (props: ProfileStatusFCPropsType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        // debugger
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true)
    }
    const deActivateMode = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
            setStatus(event.currentTarget.value)
    }



    return (
        <div>

            {!editMode &&
            <div>
                <b>Status: </b><span onDoubleClick={activateMode}>{props.status || 'No status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deActivateMode} type="text" value={status}
                       onChange={onStatusChange}
                />
            </div>
            }

        </div>
    );
}

