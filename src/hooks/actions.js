import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {projectSliceActions} from "../features/projectSlice";

const actions = {
  ...projectSliceActions
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}