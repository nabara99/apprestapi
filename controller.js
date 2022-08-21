"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Application REST API running!", res);
};

// menampilkan semua data mahasiswa
exports.tampilsemuamahasiwa = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// menampilkan data mahasiswa berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM MAHASISWA WHERE id_mahasiswa = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
