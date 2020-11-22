// import React, { useEffect, useState } from "react";
// import Jumbotron from "../components/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
// // import { ListItem, List } from "../components/List";
// // import DeleteBtn from "../components/DeleteBtn";
// // import React from "react";
// // import "./style.css";

// function Dashboard() {

//   const [pets, setPets] = useState([])
//   const [formObject, setFormObject] = useState({
//     name: "",
//     age: "", 
//     species: "",
//     breed: "",
//     gender: "", 
//     weight: "", 
//     location: "", 
//     microchip: "",


//   })

//   // Load all pets and store them in setPets
//   useEffect(() => {
//     loadPets()
//   }, [])

//   // set all pets and sets them to pets
//   function loadPets() {
//     API.getPets()
//       .then(res =>
//         setPets(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   return (
//     <Container fluid>
//       <Row>
//         <Col size="md-6">
//           <Jumbotron>
//             <h1>Start Your PetPal Profile</h1>
//           </Jumbotron>
//           <form>
//             <Input
//               onChange={() => { }}
//               name="pet"
//               placeholder="Pet Name (required)"
//             />
//             <Input
//               onChange={() => { }}
//               name="age"
//               placeholder="Age (required)"
//             />
//             <TextArea
//               onChange={() => { }}
//               name="species"
//               placeholder="Synopsis (Optional)"
//             />
//             <FormBtn
//               disabled={!(formObject.pet && setFormObject.name)}
//               onClick={() => { }}
//             >
//               Submit Pet
//               </FormBtn>
//           </form>
//         </Col>
//         <Col size="md-6 sm-12">
//           <Jumbotron>
//             <h1>Pet(s) Profile</h1>
//           </Jumbotron>
//           {pets.length ? (
//             <List>
//               {pets.map(pet => {
//                 return (
//                   <ListItem key={pet._id}>
//                     <a href={"/pets/" + pet._id}>
//                       <strong>
//                         {pet.title} by {pet.author}
//                       </strong>
//                     </a>
//                     <DeleteBtn onClick={() => { }} />
//                   </ListItem>
//                 );
//               })}
//             </List>
//           ) : (
//               <h3>No Results to Display</h3>
//             )}
//         </Col>
//       </Row>
//     </Container>
//   );
// }


// export default Dashboard;


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
