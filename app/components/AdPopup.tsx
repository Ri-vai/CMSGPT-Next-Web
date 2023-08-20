import React, { useState, useEffect } from "react";
import DisclaimerPopup from "./disclaimerPopup"; // 引入新的弹窗组件
import styles from "./home.module.scss"; // 导入样式
import Wechat from "../icons/Wechat.svg";
export function AdPopup() {
  const [showAd, setShowAd] = useState(true);
  const [showDisclaimer, setShowDisclaimer] = useState(false); // 控制免责声明弹窗的显示与隐藏
  useEffect(() => {
    // const timer = setTimeout(() => setShowAd(false), 3000); // 3秒后关闭
    // return () => clearTimeout(timer); // 清理定时器
  }, []);

  if (!showAd) return null;
  return (
    <div className={styles["ad-popup"]}>
      <div className={styles["ad-content"]}>
        <div className={styles["ad-sections"]}>
          {/* <div className={styles["ad-section"]}>
            <h3>库迪咖啡新活动欢迎参加,给作者一点小小的支持吧！</h3>
            <Wechat width={200} height={200}/>
          </div> */}
          <div className={styles["ad-section"]}>
            <h3>若使用中遇到问题欢迎加入群组反馈&交流</h3>
            <Wechat width={200} height={200} />
          </div>
        </div>
        <div className={styles["disclaimer-section"]}>
          <p className={styles["disclaimer"]}>
            使用需同意
            <a
              style={{ color: "orange", cursor: "pointer" }}
              onClick={() => setShowDisclaimer(true)}
            >
              免责声明
            </a>
          </p>
          <button onClick={() => setShowAd(false)}>同意</button>
        </div>
      </div>
      {showDisclaimer && (
        <DisclaimerPopup onClose={() => setShowDisclaimer(false)} />
      )}
    </div>
  );
}
