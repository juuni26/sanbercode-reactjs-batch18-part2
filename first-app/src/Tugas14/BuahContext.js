import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const BuahContext = createContext();

export const BuahProvider = (props) => {
  const [dataHargaBuah, setDataHargaBuah] = useState(null);
  
  const [inputName, setInputName] = useState("");
  const [inputHarga, setInputHarga] = useState("");
  const [inputBerat, setInputBerat] = useState("");
  const [edit, setEdit] = useState(false);
  const [idEdit, setEditId] = useState(0);

  const contextItems = {
    dataHargaBuah:dataHargaBuah,
    setDataHargaBuah:setDataHargaBuah,

    inputName:inputName,
    setInputName:setInputName,

    inputHarga:inputHarga,
    setInputHarga:setInputHarga,

    inputBerat:inputBerat,
    setInputBerat:setInputBerat,

    edit:edit,
    setEdit:setEdit,

    idEdit:idEdit,
    setEditId:setEditId
  } 


  useEffect(() => {
    axios
      .get(`http://backendexample.sanbercloud.com/api/fruits`)
      .then((res) => {
        let result = res.data;
        setDataHargaBuah(
          result.map((buah) => {
            return {
              id: buah.id,
              nama: buah.name,
              harga: buah.price,
              berat: buah.weight,
            };
          })
        );
      });
  }, []);


  return (
    <BuahContext.Provider value={contextItems}>
      <div className="container">
        <div className="ct">{props.children}</div>
      </div>
    </BuahContext.Provider>
  );
};


