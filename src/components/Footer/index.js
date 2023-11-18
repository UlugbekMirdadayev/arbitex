import "./style.scss";
import logoImg from "../../assets/img/footer/logo.png";
import _1Img from "../../assets/img/footer/1.png";
import _2Img from "../../assets/img/footer/2.png";
import _3Img from "../../assets/img/footer/3.png";
import _4Img from "../../assets/img/footer/4.png";
import _5Img from "../../assets/img/footer/5.png";
import _6Img from "../../assets/img/footer/6.png";
import _7Img from "../../assets/img/footer/7.png";
import _8Img from "../../assets/img/footer/8.png";
import _9Img from "../../assets/img/footer/9.png";
import Text from "../Common/Text";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={logoImg} alt="___" />
      </div>
      <div className="footer-right">
        <Text text={"Payment Currency"} className={"H6 dark_1"} />
        <img src={_1Img} alt="___" />
        <img src={_2Img} alt="___" />
        <img src={_3Img} alt="___" />
        <img src={_4Img} alt="___" />
        <img src={_5Img} alt="___" />
        <img src={_6Img} alt="___" />
        <img src={_7Img} alt="___" />
        <img src={_8Img} alt="___" />
        <img src={_9Img} alt="___" />
      </div>
    </div>
  );
}

export default Footer;
