import LogoAndText from "../components/logo-and-text/LogoAndText";
import SortInput from "../components/sort-input/SortInput";

const Tests = () => {
  return (
    <main>
      <br />
      <h2>&lt;LogoAndText /&gt;</h2>
      <LogoAndText iconName="BiWorld" text="The Witcher" />
      <LogoAndText iconName="FaCrown" text="Jnwyk" />
      <LogoAndText iconName="BsPeopleFill" text="4" />
      <LogoAndText iconName="test" text="no icon" />
      <br />
      <h2>&lt;Sort /&gt;</h2>
      <SortInput />
    </main>
  );
};

export default Tests;
