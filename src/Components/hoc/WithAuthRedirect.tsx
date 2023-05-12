import React, {FC} from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";


const mapStateToPropsForRedirect = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any> {
        render(): React.ReactNode {
            if (!this.props.isAuth) return <Redirect to={'login'}/>
            return <Component {...this.props} />
        }
    }

    let RedirectComponentForConnect = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return RedirectComponentForConnect
};

export default WithAuthRedirect;