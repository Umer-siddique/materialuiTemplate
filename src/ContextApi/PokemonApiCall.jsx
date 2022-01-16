import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonApiCall=()=>{
const [option,selectedOption]=useState();
const [name,setName]=useState();
const [moves,setMoves]=useState();

useEffect(()=>{
  async function getData(){
     const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${option}`);
     setName(res.data.name);
     setMoves(res.data.moves.length);
  }
  getData();
})

const selectItem=(event)=>{
  selectedOption(event.target.value);
}
    return(
        <>
        <h1>You selected Number <span style={{color:"red"}}>{option}</span></h1>
        <h1>Pokemon number {option} is <span style={{color:"red"}}>{name}</span></h1>
        <h1> {name} has<span style={{color:"red"}}> {moves} </span> moves</h1>
        <select onChange={selectItem} value={option}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        </>
    )

}
export default PokemonApiCall;