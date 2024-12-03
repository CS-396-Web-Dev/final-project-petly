import "./pet-name-input.css";

const PetNameInput = ({ petName, onPetNameChange }) => {
  return (
    <>
      <p className="pet-name-heading">What’s your pet name?</p>
      <div className="pet-name-input-wrapper">
        <input
          className="pet-name-input"
          type="text"
          placeholder="Pet name here..."
          value={petName}
          onChange={(e) => onPetNameChange(e.target.value)}
        ></input>
      </div>
    </>
  );
};

export default PetNameInput;
