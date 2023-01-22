import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/constants";

export const styles = mergeStyleSets({
    modalContainer:{
        backgroundColor:Colors.DarkGrayishBlue,
        width:"50%",
        height:"max-content",
        margin:'auto',
        borderRadius:"25px",
        boxShadow:`5px 5px 80px 5px rgba(0,0,0,0.2)`,
        "@media screen and (max-width:750px)":{
            width:"82%",
        }
    },
    modalContentContainer:{
        height:"100%",
        display:'flex',
        flexDirection:"column",
        alignItems:"center",
        position:'relative',
        padding:"5%",
        justifyContent:"center",
    },
    modalHeader:{
        color:Colors.NeonGreen,
        fontSize:'1.5vw',
        margin:'2.5%',
        letterSpacing:".3vw",
        "@media screen and (max-width:750px)":{
            fontSize:"2.5vw",
            letterSpacing:".65vw",
            margin:"4%"
        }
    },
    modalAdvice:{
        fontSize:"3vw",
        color:"#FFF",
        minHeight:'30%',        
        fontWeight:"600",
        textAlign:'center',
        "@media screen and (max-width:750px)":{
            fontSize:"5vw"
        }
    },
    modalDivider:{
        margin:"5% 0",
        transform:"scale(.65)"
    },
    modalSeparator:{},
    diceContainer:{
        height:"48px",
        width:"48px",
        backgroundColor:Colors.NeonGreen,
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
        borderRadius:"50%",
        position:"absolute",
        bottom:"-3.5vh",
        ":hover":{
            border:'.5px solid rgba(0,0,0,0.7)',
            boxShadow:`0px 0px 50px 1px ${Colors.NeonGreen}`,
            cursor:'pointer',
        },
        "@media screen and (max-width:750px)":{
            width:"10vw",
            height:"12vw",
            bottom:"-2.7vh"
        }
    },
    dice:{
        transform:"scale(.8)"
    }
})