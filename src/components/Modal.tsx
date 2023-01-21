import { Icon } from "@fluentui/react";
import { styles } from "./Modal.css";
import * as React from "react";
import { fetchAdvice } from "../utils/helper";

export const Modal = (props: any) => {
 const [data, setData] = React.useState<any>({});

  const fetchData = (response: any) => {
    if (response) {
      setData(response);
    }
  };
 React.useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
    fetch(url,{
        method:"GET",
        cache:"reload"
    })
      .then((response) => response.json())
      .then((data) => {
        fetchData(data);
      })
      .catch((error) => {
        console.error(
          `Something went wrong with the request: ${error.message}`
        );
      });
  }, []);
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContentContainer}>
        <div className={styles.modalHeader}>ADVICE #{data?.slip?.id}</div>
        <div className={styles.modalAdvice}>{`"${data?.slip?.advice}"`}</div>
        <div className={styles.modalSeparator}>
          <Icon className={styles.modalDivider} iconName={"divider-desktop"} />
        </div>
        <div className={styles.diceContainer}>
          <Icon className={styles.dice} iconName={"icon-dice"} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
