import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <Loader
      style={{
        position: "fixed",
        left: 50 + "%",
        top: 50 + "%",
        transform: `translate(-50%,-50%)`,
      }}
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
    />
  );
};

export default Spinner;
