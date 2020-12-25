import React from "react";
import { Keypad } from "../../components";
import Icon, { Stack } from "@mdi/react";
import {
  mdiShieldLock,
  mdiCircleOutline,
  mdiShield,
} from "@mdi/js";

import styles from "./home.module.css";

const Home = ({}) => {
  return (
    <div className={styles.home}>
      <div className={styles.notificationArea}>
        <div className={styles.button}>
          <Stack size={2}>
            {/* <Icon path={mdiCheckboxBlankCircleOutline} /> */}
            <Icon path={mdiCircleOutline} color="#FFF" size={2} />
            <Icon path={mdiShieldLock} color="#FF0000" size={1} />
          </Stack>
        </div>
        <div className={styles.target}></div>
      </div>
      <Keypad />
    </div>
  );
};

export default Home;
