import React, {ChangeEvent, ChangeEventHandler} from 'react';

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode = () => {

        this.setState({
            editMode: true
        })
    }
    deActivateMode = () => {
        debugger
        this.setState({
            editMode: false
        } )
        this.props.updateStatus(this.state.status)
    }

    onStatuChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: event.currentTarget.value
        } )
    }
    render(): React.ReactNode {
        return (
            <div>

                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateMode}>{this.props.status || 'No status'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input  autoFocus={true} onBlur={this.deActivateMode} type="text" value={this.state.status}
                    onChange={this.onStatuChange}
                    />
                </div>
                }

            </div>
        );
    }


};

export default ProfileStatus;