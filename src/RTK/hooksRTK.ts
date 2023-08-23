
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState, ToolkitDispatch} from "./state";

export const useToolkitDispatch: () => ToolkitDispatch = useDispatch
export const useToolkitSelector: TypedUseSelectorHook<RootState> = useSelector