import Button from "../components/button/Button";
import TextInput from "../components/text-input/TextInput";

const Tests = () => {
  return (
    <main>
      <h2>&lt;TextInput /&gt;</h2>
      <TextInput placeholder="Username" id="username" />
      <br />
      <h2>&lt;Button /&gt;</h2>
      <Button>Register</Button>
    </main>
  );
};

export default Tests;
