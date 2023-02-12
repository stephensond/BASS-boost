import { EnterButton } from "./EnterButton";
import Logo from "./Logo";
import React from "react";
import styles from "./landing.module.css";

export default class Landing extends React.Component {
  render() {
    return (
      <div className={styles.outerLanding}>
        <div className={styles.Landing} id="Landing">
          <Logo />
          <div className={styles.IntroText} id="IntroText">
            <h3>Everyone can Bass Boost</h3>
            <h1>Few can 🐟 Boost!</h1>
          </div>
          <EnterButton setLandingFalse={this.props.setLandingFalse} className = {styles.EnterButton}/>
        </div>
      </div>
    );
  }
}
