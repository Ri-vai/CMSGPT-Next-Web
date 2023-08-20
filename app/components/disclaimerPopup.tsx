import React from "react";
import styles from "./home.module.scss"; // 导入样式
import { Certificate } from "crypto";
interface disclaimerPopupProps {
  onClose: () => void;
}

const disclaimerPopup: React.FC<disclaimerPopupProps> = ({ onClose }) => {
  return (
    <div className={styles["ad-popup"]}>
      <div className={styles["ad-content"]} style={{ width: 800 }}>
        <div className={styles["ad-sections"]}>
          <div className={styles["ad-section"]}>
            <div className={styles["disclaimer"]}>
              <h2 style={{ textAlign: "center" }}>免责声明</h2>
              <p>
                <b>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  本免责声明适用于本公益BitzhChat_Lite站点（以下简称“本站”）。在使用本站服务之前，
                  请您务必仔细阅读并充分理解本免责声明的内容。一旦您开始使用本站服务，即表示您已充分阅读、
                  理解并同意接受本免责声明的所有条款和条件。如您不同意本免责声明的内容，请立即停止使用本站服务。
                </b>
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.
                本站为公益性质，旨在让更多的人体验到最新的人工智能技术，并从中思考、探索让自己进步的方法。
                本网站原则上仅供北京理工大学珠海学院和北京师范大学珠海分校的师生体验使用。
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.
                本站仅提供技术支持及学习用途，不对用户在使用过程中可能遇到的问题或损失承担任何法律责任。
                使用者应自行确保其行为符合所在国家/地区的法律法规及相关政策要求。使用者应对其在使用本站服
                务过程中的行为及相关后果承担全部法律责任。
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.
                如因不可抗力或其他无法控制的原因导致本站服务中断或受到影响，本站不承担任何责任。
                <b>
                  本站会对
                  访问日志进行脱敏处理，日志内容无法关联到任何用户。日志仅保留不超过3天，用于调试网站运行，
                  本站不会主动泄露或用于其他任何用处。
                </b>
                尽管我们会尽力确保数据安全，但对于因黑客攻击、计算机病
                毒、硬件故障等不可抗力因素导致的意外数据泄露，本站不承担任何责任。
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.
                本站有权在任何时候对本免责声明进行修改。修改后的免责声明一经公布，即对所有使用者产生
                法律约束力。使用者有义务定期查阅本免责声明的最新版本，如继续使用本站服务，则视为已充分阅读、
                理解并同意接受修改后的免责声明的所有条款和条件。
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.
                如您对本免责声明有任何疑问或需要与我们联系，请访问：
                <a href="https://wj.qq.com/s2/11968649/dc0c/" target="_blank">
                  项目留言板
                </a>
                。我们将尽快回复您。
              </p>
            </div>
          </div>
        </div>
        <div className={styles["disclaimer-section"]}>
          <button onClick={onClose}>同意免责声明</button>
        </div>
      </div>
    </div>
  );
};

export default disclaimerPopup;
