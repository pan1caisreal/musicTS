import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";
import ActionCreators from "../store/action-creators";
import {bindActionCreators} from "@reduxjs/toolkit";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector
export const useActions = () =>{
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}