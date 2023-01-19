import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/constants";

export const styles = mergeStyleSets({
    modalContainer:{
        backgroundColor:Colors.DarkGrayishBlue,
        width:"50%",
        height:"50%",
        margin:'auto',
        borderRadius:"25px",
        boxShadow:`5px 5px 80px 5px rgba(0,0,0,0.2)`
    },
    modalContentContainer:{
        height:"100%",
        display:'flex',
        flexDirection:"column",
        alignItems:"center",
        position:'relative',
        padding:"5%"
    },
    modalHeader:{
        color:Colors.NeonGreen,
        fontSize:'1.5vw',
        margin:'2.5%',
        letterSpacing:".3vw",
        
    },
    modalAdvice:{
        fontSize:"3vw",
        color:"#FFF",
        minHeight:'30%',        
        fontWeight:"600",
        textAlign:'center'
    },
    modalDivider:{
        margin:"5% 0"
    },
    modalSeparator:{},
    diceContainer:{
        height:"8vh",
        width:"5vw",
        backgroundColor:Colors.NeonGreen,
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
        borderRadius:"50%",
        position:"absolute",
        bottom:"6%",
        ":hover":{
            border:'.5px solid rgba(0,0,0,0.7)',
            boxShadow:`0px 0px 50px 1px ${Colors.NeonGreen}`,
            cursor:'pointer',
        }
    },
    dice:{}
})