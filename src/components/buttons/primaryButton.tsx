// Types
import type { ButtonProps } from "@/types/commons";

// Custom Styles
import "./primaryButton.scss"

export default function PrimaryButton(buttonInfo: ButtonProps) {
   return (
      <button className="primary-button-container" onClick={buttonInfo.onClick}>
         <img src={buttonInfo.img} alt={buttonInfo.text} />
         {buttonInfo.text}
      </button>
   );
}