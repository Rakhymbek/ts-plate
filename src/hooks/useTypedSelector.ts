import { TypedUseSelectorHook, useSelector } from "react-redux";
import { iState } from "../store";

export const useTypedSelector: TypedUseSelectorHook<iState> = useSelector;
