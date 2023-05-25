import {
    addMessageActionCreator,
    InitialStateType,
} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import WithAuthRedirect from "../hoc/WithAuthRedirect";
import {getMessageSelector} from "../../redux/dialogs-selectors";

type MapStatePropsType = {
    messagesPage: InitialStateType
}

type MapDispatchPropsType = {
    addMessage: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messagesPage: getMessageSelector(state),
    }
}

export const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (text: string) =>  dispatch(addMessageActionCreator(text ? text : '')),
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
) (Dialogs)