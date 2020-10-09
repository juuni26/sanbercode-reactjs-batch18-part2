import React from "react";

function Tugas9() {
  return (
    <div className="container">
      <form>
        <h2>Form Pembelian Buah</h2>
        <div className="namaPelanggan">
          <label htmlFor="nama" className="label-first">
            <strong>Nama Pelanggan</strong>
          </label>
          <input type="text" name="nama" id="nama" />
        </div>
        <div className="daftarItem">
          <div>
            <label htmlFor="daftarItem" className="label-first">
              <strong>Daftar Item</strong>
            </label>
          </div>
          <div className="item">
            <div>
              <input type="checkbox" name="item" id="" value="Semangka" />
              <label htmlFor="semangka">Semangka</label>
            </div>

            <div>
              <input type="checkbox" name="item" id="" value="Jeruk" />
              <label htmlFor="Jeruk">Jeruk</label>
            </div>
            <div>
              <input type="checkbox" name="item" id="" value="Nanas" />
              <label htmlFor="Nanas">Nanas</label>
            </div>
            <div>
              <input type="checkbox" name="item" id="" value="Salak" />
              <label htmlFor="Salak">Salak</label>
            </div>
            <div>
              <input type="checkbox" name="item" id="" value="Anggur" />
              <label htmlFor="Anggur">Anggur</label>
            </div>
          </div>
        </div>
        <div>
          <button type="submit">kirim</button>
        </div>
      </form>
    </div>
  );
}

export default Tugas9;
