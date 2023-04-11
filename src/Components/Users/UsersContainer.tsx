import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/users-reducer";
import Users from "./UsersC";


export type MapsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    users: UsersType[]
}

type MapDispatchPropsType = {
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    setUsers: (users: UsersType[]) => void
}

const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (usersId: number) => {
            dispatch(followAC(usersId))
        },
        unFollow: (usersId: number) => {
            dispatch(unFollowAC(usersId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);