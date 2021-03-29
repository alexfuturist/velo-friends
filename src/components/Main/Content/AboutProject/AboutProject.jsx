import React from "react";
import { withAuthRedirect } from "../../../../hoc/AuthRedirect";

const AboutProject = () => {
    return (
        <div>
            тут будет все о проекте
        </div>
    )
}

export default withAuthRedirect(AboutProject);