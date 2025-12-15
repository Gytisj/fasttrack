import Message from "./components/message";

export const App = () => {
  return (
    <div className="App">
      <Message text="Paduodu koki noriu teksta!" severity={"error"} />
      <Message text="Paduodu koki noriu teksta1!" severity={"success"} />
      <Message text="Paduodu koki noriu teksta2!" severity={"error"} />
      <Message text="Paduodu koki noriu teksta3!" severity={"success"} />
    </div>
  );
};
