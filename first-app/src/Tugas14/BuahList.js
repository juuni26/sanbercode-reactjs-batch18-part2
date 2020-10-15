import React, { useContext } from "react";
import { BuahContext } from "./BuahContext";
import axios from "axios";

const BuahList = () => {
  const {
    dataHargaBuah,
    setDataHargaBuah,
    setEdit,
    setEditId,
    setInputName,
    setInputBerat,
    setInputHarga,
  } = useContext(BuahContext);

  const editBuah = (id) => {
    setEdit(true);
    setEditId(id);
    setInputName(dataHargaBuah.filter((val) => val.id === id)[0].nama);
    setInputBerat(dataHargaBuah.filter((val) => val.id === id)[0].berat);
    setInputHarga(dataHargaBuah.filter((val) => val.id === id)[0].harga);
  };

  const deleteBuah = (id) => {
    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
      .then((res) => {
        setDataHargaBuah(dataHargaBuah.filter((val) => val.id !== id));
      }).catch(()=>{
          
        window.location.reload();
      });
  };

  return (
    <div className="table">
      <h2>Tabel Harga Buah</h2>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataHargaBuah != null
            ? dataHargaBuah.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row.nama}</td>
                    <td>{row.harga}</td>
                    <td>{row.berat / 1000} kg</td>
                    <td>
                      <button
                        onClick={() => {
                          editBuah(row.id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          deleteBuah(row.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default BuahList;
