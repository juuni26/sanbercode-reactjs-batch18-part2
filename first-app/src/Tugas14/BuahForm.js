import React, { useContext } from "react";
import { BuahContext } from "./BuahContext";
import axios from "axios";

const BuahForm = () => {
  const {
    dataHargaBuah,
    setDataHargaBuah,
    edit,
    idEdit,
    setEdit,
    inputName,
    inputHarga,
    inputBerat,
    setInputName,
    setInputBerat,
    setInputHarga,
  } = useContext(BuahContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const buahBaru = {
      nama: inputName,
      harga: inputHarga,
      berat: inputBerat,
    };

    const buahBaruApi = {
      name: inputName,
      price: inputHarga,
      weight: inputBerat,
    };

    if (!edit) {
      axios
        .post(`http://backendexample.sanbercloud.com/api/fruits`, buahBaruApi)
        .then((res) => {
          buahBaru.id = res.data.id;
          setDataHargaBuah([...dataHargaBuah, buahBaru]);
          setInputName("");
          setInputHarga("");
          setInputBerat("");
        });
    } else {
      axios
        .put(
          `http://backendexample.sanbercloud.com/api/fruits/${idEdit}`,
          buahBaruApi
        )
        .then((res) => {
          setDataHargaBuah(
            dataHargaBuah.map((buah) => {
              if (buah.id === idEdit) {
                return {
                  id: buah.id,
                  nama: inputName,
                  harga: inputHarga,
                  berat: inputBerat,
                };
              } else {
                return buah;
              }
            })
          );
          setInputName("");
          setInputHarga("");
          setInputBerat("");
          setEdit(false);
          console.log("berhasil edit id :", idEdit);
        })
        .catch(()=>{
            alert("ada kesalahan data pada api");
            window.location.reload();
          });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "inputName":
        setInputName(value);
        break;
      case "inputBerat":
        setInputBerat(value);
        break;
      case "inputHarga":
        setInputHarga(value);
        break;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      {edit ? (
        <h3 style={{ textAlign: "center" }}> Edit Buah </h3>
      ) : (
        <h3 style={{ textAlign: "center" }}> Tambah Buah </h3>
      )}
      <form
        onSubmit={handleSubmit}
        style={{ width: "35rem", marginLeft: "2rem" }}
      >
        <label style={{ marginRight: "4px" }} htmlFor="inputName">
          Nama Buah
        </label>
        <input
          type="text"
          name="inputName"
          value={inputName}
          onChange={handleChange}
          placeholder="Masukkan Nama..."
        />
        <br />
        <label style={{ marginRight: "4px" }} htmlFor="inputHarga">
          Harga
        </label>
        <input
          type="number"
          name="inputHarga"
          value={inputHarga}
          onChange={handleChange}
          placeholder="Masukkan Harga..."
        />
        <br />
        <label style={{ marginRight: "4px" }} htmlFor="inputBerat">
          Berat
        </label>
        <input
          type="number"
          name="inputBerat"
          value={inputBerat}
          onChange={handleChange}
          placeholder="dalam satuan gram..."
        />
        <br />
        <button>Submit</button>
      </form>
    </React.Fragment>
  );
};

export default BuahForm;
