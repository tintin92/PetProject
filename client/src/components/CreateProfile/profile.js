import React, { useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import "./style.css";
import { Card } from 'reactstrap';


// import tracker component here like navbar above

// use state that will be changed and saved to profile
function CreateProfile() {
  const [name, changeName] = useState('');
  const [age, changeAge] = useState('');
  const [breed, changeBreed] = useState('');
  const [microchip, changeMicrochip] = useState('');
  const [species, changeSpecies] = useState('');
  const [weight, changeWeight] = useState('');
  const [location, changeLocation] = useState('');
  const [gender, changeGender] = useState('');

  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    console.log("form submitted");
    console.log(name, age, species, breed, microchip, weight, location, gender)
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveProfile({
      name,
      age,
      breed,
      species,
      microchip,
      weight,
      location,
      gender
    })
      .then(result => {
        console.log("result", result)
        window.location.replace("/Profile")
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    changeName("");
    changeAge("");
    changeBreed("");
    changeSpecies("");
    changeMicrochip("");
    changeWeight("");
    changeLocation("");
    changeGender("");
  };
  // Form and submit
  return (
    <div>
      {/* to add tracker/budget render it here like below with navbar*/}
      {/* <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://via.placeholder.com/300"
          alt="placeholder"
        />
      </div> */}
      <h1>Add your Pet</h1>
      <Card className="petForm">
        <form className="form-group mt-5 mb-1" onSubmit={handleSubmit}>
          <input className="form-control mb-1" required onChange={(event) => changeName(event.target.value)} value={name} placeholder="Name" />
          <input className="form-control mb-1" required onChange={(event) => changeAge(parseInt(event.target.value))} value={age} placeholder="Age" />
          <input className="form-control mb-1" required onChange={(event) => changeGender(event.target.value)} value={gender} placeholder="Gender" />
          <input className="form-control mb-1" required onChange={(event) => changeSpecies(event.target.value)} value={species} placeholder="Species" />
          <input className="form-control mb-1" required onChange={(event) => changeBreed(event.target.value)} value={breed} placeholder="Breed" />
          <input className="form-control mb-1" required onChange={(event) => changeMicrochip(parseInt(event.target.value))} value={microchip} placeholder="Microchip Number" />
          <input className="form-control mb-1" required onChange={(event) => changeWeight(parseInt(event.target.value))} value={weight} placeholder="Weight" />
          <input className="form-control mb-1" required onChange={(event) => changeLocation(event.target.value)} value={location} placeholder="Location" />
          <button className="btn btn-success mt-3 mb-5 prof" disabled={state.loading} type="submit">
            Save Profile
        </button>
        </form>
      </Card>
    </div>
  );
}

export default CreateProfile;
