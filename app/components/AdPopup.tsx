import React, { useState, useEffect } from "react";
import styles from "./home.module.scss"; // 导入样式

export function AdPopup() {
  const [showAd, setShowAd] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAd(false), 3000); // 3秒后关闭
    return () => clearTimeout(timer); // 清理定时器
  }, []);

  if (!showAd) return null;

  return (
    <div className={styles["ad-popup"]}>
      <div className={styles["ad-content"]}>
        <img src="path/to/your/image.jpg" alt="广告" />
        <button onClick={() => setShowAd(false)}>关闭</button>
      </div>
    </div>
  );
}
