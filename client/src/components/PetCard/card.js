import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import React from "react";
import "./style.css";

// import { Card } from 'reactstrap';


function PetCard(props) {
    
    return (

        <div>
            <h1>Pet(s)</h1>
      {props.posts.length ? (
            <List>
                {props.posts.map(post => (
                    <ListItem key={post._id}>
                                <h1>Name: {post.name}</h1>
                                <p>Age: {post.age}</p>
                                <p>Gender: {post.gender}</p>
                                <p>Species: {post.species}</p>
                                <p>Breed: {post.breed}</p>
                                <p>Microchip: {post.microchip}</p>
                                <p>Weight: {post.weight}</p>
                                <p>Location: {post.location}</p>
                        <DeleteBtn onClick={() => props.removePost(post._id)} />
                    </ListItem>
                ))
                }
                
            </List>
     ) : (
            <h3 className="noPet">Add your pet to make profile</h3>
      )}
        </div>
    );
}

export default PetCard;
