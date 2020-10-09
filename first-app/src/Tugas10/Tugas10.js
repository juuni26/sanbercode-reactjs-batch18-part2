import React from "react";

function Bodyy() {
  let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 },
  ];

  const rows = dataHargaBuah.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.nama}</td>
        <td>{row.harga}</td>
        <td>{row.berat}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

class Tugas10 extends React.Component {
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
                </tr>
              </thead>
              <Bodyy />
            </table>
          </div>
        </div>
      </div>    
    );
  }
}

export default Tugas10;
