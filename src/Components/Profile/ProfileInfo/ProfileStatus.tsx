import React from 'react';

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false
    }

    activateMode() {
        this.setState({
            editMode: true
        })
    }
    deActivateMode() {
        this.setState({
            editMode: false
        })
    }

    render(): React.ReactNode {
        return (
            <div>

                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deActivateMode.bind(this)} type="text" value={this.props.status}/>
                </div>
                }

            </div>
        );
    }


};

export default ProfileStatus;