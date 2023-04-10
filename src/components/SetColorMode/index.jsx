import { theme } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon } from "../Icons";
import styles from "./setcolormode.module.css";
import { selectLightMode, setColorMode } from "../../redux/colorSlice";

export default function SetColorMode() {
   const { token: { colorTextBase } } = theme.useToken();

   const lightMode = useSelector(selectLightMode);
   const dispatch = useDispatch();

   const toggleColor = () => {
      dispatch(setColorMode(!lightMode))
   }

   return (
      <span onClick={toggleColor} className={styles.modeIcon} >
         {
            lightMode ? (
               <Sun color={colorTextBase} className={styles.icon} />
            ) : (
               <Moon color={colorTextBase} className={styles.icon} />
            )
         }
      </span>
   );
}
