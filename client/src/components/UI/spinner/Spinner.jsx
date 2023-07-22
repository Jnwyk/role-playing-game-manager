import BarLoader from "react-spinners/BarLoader";

const Spinner = () => {
  return (
    <BarLoader
      color="#3E5948"
      height={10}
      loading
      speedMultiplier={1}
      width={200}
    />
  );
};

export default Spinner;
