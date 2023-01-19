import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "./utils/constants";

export const styles = mergeStyleSets({
  appContainer:{
    height:"100vh",
    backgroundColor:Colors.DarkBlue,
    display:'flex',
  },
})