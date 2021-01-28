import React from "react";
import s from './ProfileStatus.module.scss';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps) {
        // console.log("componentDidUpdate");
        if ( prevProps.status !== this.props.status ) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        // console.log("render");
        return (
            <div className={s.profileStatus}>
                { !this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                { this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                            className={s.profileStatus__input} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;