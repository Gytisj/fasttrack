import style from "./message.module.css";

const Message = ({ text, severity }) => {
  return (
    <div
      className={
        (style.message, severity === "error" ? style.error : style.success)
      }
    >
      <p>{text}</p>
    </div>
  );
};
export default Message;
