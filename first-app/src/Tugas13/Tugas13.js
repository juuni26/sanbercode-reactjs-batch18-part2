import React, { useState, useEffect } from "react";
import axios from "axios";

const Tugas13 = () => {
  const [dataHargaBuah, setDataHargaBuah] = useState(null);
  const [inputName, setinputName] = useState("");
  const [inputHarga, setinputHarga] = useState("");
  const [inputBerat, setinputBerat] = useState("");
  const [edit, setEdit] = useState(false);
  const [idEdit, setEditId] = useState(0);

  const fetchData = () => {
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  const editBuah = (id) => {
    setEdit(true);
    setEditId(id);
    setinputName(dataHargaBuah.filter((val) => val.id === id)[0].nama);
    setinputBerat(dataHargaBuah.filter((val) => val.id === id)[0].berat);
    setinputHarga(dataHargaBuah.filter((val) => val.id === id)[0].harga);
  };

  const deleteBuah = (id) => {
    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
      .then((res) => {
        setDataHargaBuah(dataHargaBuah.filter((val) => val.id !== id));
      });
  };

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
          setinputName("");
          setinputHarga("");
          setinputBerat("");
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
          setinputName("");
          setinputHarga("");
          setinputBerat("");
          setEdit(false);
          console.log("berhasil edit id :", idEdit);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "inputName":
        setinputName(value);
        break;
      case "inputBerat":
        setinputBerat(value);
        break;
      case "inputHarga":
        setinputHarga(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="ct">
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
          {edit ? <h3> Edit Buah </h3> : <h3> Tambah Buah </h3>}
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
        </div>
      </div>
    </div>
  );
};

export default Tugas13;
