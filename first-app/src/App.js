import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
    <form>
      <h2>Form Pembelian Buah</h2>
      <div class="namaPelanggan">
        <label for="nama" class="label-first"
          ><strong>Nama Pelanggan</strong></label
        >
        <input type="text" name="nama" id="nama" />
      </div>
      <div class="daftarItem">
        <div>
          <label for="daftarItem" class="label-first"
            ><strong>Daftar Item</strong></label
          >
        </div>
        <div class="item">
          <div>
            <input type="checkbox" name="item" id="" value="Semangka" />
            <label for="semangka">Semangka</label>
          </div>

          <div>
            <input type="checkbox" name="item" id="" value="Jeruk" />
            <label for="Jeruk">Jeruk</label>
          </div>
          <div>
            <input type="checkbox" name="item" id="" value="Nanas" />
            <label for="Nanas">Nanas</label>
          </div>
          <div>
            <input type="checkbox" name="item" id="" value="Salak" />
            <label for="Salak">Salak</label>
          </div>
          <div>
            <input type="checkbox" name="item" id="" value="Anggur" />
            <label for="Anggur">Anggur</label>
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

export default App;
