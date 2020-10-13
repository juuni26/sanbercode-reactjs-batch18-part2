import React from "react";

class Tugas12 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHargaBuah: [
        { nama: "Semangka", harga: 10000, berat:  1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
      ],
      ...this.initialState,
      edit: false,
      indexEdit: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editBuah = this.editBuah.bind(this);
    this.deleteBuah = this.deleteBuah.bind(this);
  }

  initialState = {
    inputName: "",
    inputHarga: "",
    inputBerat: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const buahBaru = {
      nama: this.state.inputName,
      harga: this.state.inputHarga,
      berat: this.state.inputBerat,
    };
    if (!this.state.edit) {
      this.setState({
        dataHargaBuah: [...this.state.dataHargaBuah, buahBaru],
        ...this.initialState, 
      });
    } else {
      this.setState({
        dataHargaBuah:  this.state.dataHargaBuah.map((buah, index) => {
              if (index === this.state.indexEdit) {
                return buahBaru;
              } else {
                return buah;
              }
            }), 
        ...this.initialState,
        edit:false
      });
    }
  };

  deleteBuah = ({ index }) => {
    this.setState({
      dataHargaBuah: this.state.dataHargaBuah.filter(
        (val, ind) => ind !== index
      ),
    });
  };

  editBuah = ({ index }) => {
    const editState = {
      edit: true,
      indexEdit: index,
      inputName: this.state.dataHargaBuah[index].nama,
      inputBerat: this.state.dataHargaBuah[index].berat,
      inputHarga: this.state.dataHargaBuah[index].harga,
    };
    this.setState(editState);
  };

  rows() {
    return this.state.dataHargaBuah.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.nama}</td>
          <td>{row.harga}</td>
          <td>{row.berat/1000} kg</td>
          <td>
            <button
              onClick={() => {
                this.editBuah({ index });
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                this.deleteBuah({ index });
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
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
              <tbody>{this.rows()}</tbody>
            </table>
            { 
        this.state.edit
          ? <h3> Edit Buah </h3> 
          : <h3> Tambah Buah </h3> 
      }
            <form onSubmit={this.handleSubmit} style={{width:"35rem",marginLeft:"2rem"}}>
              <label style={{ marginRight: "4px" }} htmlFor="inputName">
                Nama Buah
              </label>
              <input
                type="text"
                name="inputName"
                value={this.state.inputName}
                onChange={this.handleChange}
                placeholder="Masukkan Nama..."
              />
              <br />
              <label style={{ marginRight: "4px" }} htmlFor="inputHarga">
                Harga
              </label>
              <input
                type="number"
                name="inputHarga"
                value={this.state.inputHarga}
                onChange={this.handleChange}
                placeholder="Masukkan Harga..."
              />
              <br />
              <label style={{ marginRight: "4px" }} htmlFor="inputBerat">
                Berat
              </label>
              <input
                type="number"
                name="inputBerat"
                value={this.state.inputBerat}
                onChange={this.handleChange}
                placeholder="dalam satuan gram..."
              />
              <br />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Tugas12;
