import { Icon } from "@fluentui/react";
import { styles } from "./Modal.css";
import * as React from "react";
import { fetchAdvice } from "../utils/helper";

export const Modal = (props: any) => {
  const [data, setData] = React.useState<any>(null);
  React.useEffect(() => {
    if (data === null) {
      fetchAdvice().then((value) => {
        setData(value.slip);
      });
    }
  }, [data]);
  console.log(data);
  return (
    {data } &&
    <div className={styles.modalContainer}>
      <div className={styles.modalContentContainer}>
        <div className={styles.modalHeader}>ADVICE #{data.id}</div>
        <div className={styles.modalAdvice}>{`"${data.advice}"`}</div>
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
