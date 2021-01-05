import React from "react";
import s from './ProfileStatus.module.scss';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }


    render() {
        return (
            <div className={s.profileStatus}>
                { !this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                { this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} className={s.profileStatus__input} value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;