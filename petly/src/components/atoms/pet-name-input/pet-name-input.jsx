import "./pet-name-input.css";

const PetNameInput = () => {
  return (
    <>
      <p className="pet-name-heading">What’s your pet name?</p>
      <div className="pet-name-input-wrapper">
        <input
          className="pet-name-input"
          type="text"
          placeholder="Pet name here..."
        ></input>
      </div>
    </>
  );
};

export default PetNameInput;
