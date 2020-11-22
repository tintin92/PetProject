// import React, { useEffect, useState } from "react";
// // import AddPet from "../../components/AddPetForm";
// // import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// // import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
// import { ListItem, List } from "../components/List";
// import DeleteBtn from "../components/DeleteBtn";
// import "./style.css";

// class AddPet extends React.Component {

//   state = {
//     user: localStorage.getItem("user"),
//     name: "",
//     age: "",
//     species: "",
//     breed: "",
//     gender: "",
//     weight: "",
//     location: "",
//     microchip: "",


//   }
//   onSubmit = e => {
//     e.preventDefault();
//     console.log("this.state " + this.state.name, this.state.age, this.state.species, this.state.breed, this.state.gender, this.state.weight, this.state.location, this.state.microchip)
//   }

//   handleInputChange = e => {
//     const name = e.target.name;
//     const value = e.target.value;
//     this.setState({
//       [name]: value

// render() {
//   return (
//     <div>
//       <div className="column" style={{ height: "100%" }}>
//         <div className="column is-two-fifths">
//           <AddPetForm
//             onSubmit={this.onSubmit}
//             handleInputChange={this.handleInputChange}

//       </div>
// }
// }

//   set all pets and sets them to pets




// export default AddPet;


// function PetCard(props) {

//     return (
//         <div>
//             <h1>Pet(s)</h1>
//       {props.posts.length ? (
//             <List>
//                 {props.posts.map(post => (
//                     <ListItem key={post._id}>
//                                 <h1>Name: {post.name}</h1>
//                                 <p>Age: {post.age}</p>
//                                 <p>Gender: {post.gender}</p>
//                                 <p>Species: {post.species}</p>
//                                 <p>Breed: {post.breed}</p>
//                                 <p>Microchip: {post.microchip}</p>
//                                 <p>Weight: {post.weight}</p>
//                                 <p>Location: {post.location}</p>
//                         <DeleteBtn onClick={() => props.removePost(post._id)} />
//                     </ListItem>
//                 ))
//                 }

//             </List>
//      ) : (
//             <h3 className="noPet">You haven't added any pets yet!</h3>
//       )}
//         </div>
//     );
// }

// export default PetCard;
