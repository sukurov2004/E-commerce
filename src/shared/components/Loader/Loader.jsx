import { ClipLoader } from "react-spinners";

import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <ClipLoader
        color="#7c3aed"
        size={55}
      />
    </div>
  );
};

export default Loader;