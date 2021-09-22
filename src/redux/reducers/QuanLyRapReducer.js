import { SET_HE_THONG_RAP_CHIEU } from "../actions/types/QuanLyRapType";


const stateDefault = {
    heThongRapChieu:[],
    //     {
    //       "lstCumRap": [
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 16585,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16586,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16587,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16588,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16589,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16590,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16591,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16592,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16593,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16594,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16595,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16596,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16597,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16598,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16599,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16600,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16601,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16602,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16603,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16604,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16605,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16606,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16607,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16608,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16609,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16610,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16611,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16612,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16613,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16614,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16615,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16616,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16617,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16618,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16619,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16620,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16621,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16622,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16623,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16624,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16625,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16626,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16627,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16628,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16629,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16630,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16631,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16632,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16633,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16634,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16635,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16636,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16637,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 16638,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40353,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-06-12T04:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40354,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-06-05T15:20:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40355,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-06-06T16:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40356,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-06-07T16:20:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40357,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-05-02T15:55:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40363,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-05-19T20:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40411,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-07-11T12:28:00",
    //                   "giaVe": 80000
    //                 },
    //                 {
    //                   "maLichChieu": 40440,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-08-30T20:14:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40500,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-09-20T19:44:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1323,
    //               "tenPhim": "test cập nhật",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/test-cap-nhat_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40273,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-03-20T03:19:48",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40365,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-05-21T17:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40441,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-08-31T20:14:00",
    //                   "giaVe": 80000
    //                 }
    //               ],
    //               "maPhim": 2027,
    //               "tenPhim": "Mắt biếc",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/mat-biec_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40372,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-05-31T20:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40442,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-08-30T20:15:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 3104,
    //               "tenPhim": "SA MẠC CHẾT",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sa-mac-chet_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40471,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-08-29T16:35:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 3178,
    //               "tenPhim": "Trận Chiến Midway",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tran-chien-midway_gp10.png",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 42817,
    //                   "maRap": "480",
    //                   "tenRap": "Rạp 10",
    //                   "ngayChieuGioChieu": "2021-05-26T20:20:30",
    //                   "giaVe": 90000
    //                 }
    //               ],
    //               "maPhim": 1383,
    //               "tenPhim": "Avenger",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avenger_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43439,
    //                   "maRap": "476",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2021-07-17T09:40:00",
    //                   "giaVe": 82000
    //                 }
    //               ],
    //               "maPhim": 7040,
    //               "tenPhim": "Mortal Kombat ",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/mortal-kombat_gp10.jpg",
    //               "hot": null,
    //               "dangChieu": null,
    //               "sapChieu": null
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43526,
    //                   "maRap": "473",
    //                   "tenRap": "Rạp 3",
    //                   "ngayChieuGioChieu": "2021-07-08T19:02:00",
    //                   "giaVe": 120000
    //                 }
    //               ],
    //               "maPhim": 7034,
    //               "tenPhim": "Chìa khóa trăm tỷ",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/chia-khoa-tram-ty_gp10.jpg",
    //               "hot": null,
    //               "dangChieu": null,
    //               "sapChieu": null
    //             }
    //           ],
    //           "maCumRap": "bhd-star-cineplex-pham-hung",
    //           "tenCumRap": "BHD Star Cineplex - Phạm Hùng",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 17395,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17396,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17397,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17398,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17399,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17400,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17401,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17402,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17403,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17404,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17405,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17406,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17407,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17408,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17409,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17410,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17411,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17412,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17413,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17414,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17415,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17416,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17417,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17418,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17419,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17420,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17421,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17422,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17423,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17424,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17425,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17426,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17427,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17428,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17429,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17430,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17431,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17432,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17433,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17434,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17435,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17436,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17437,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17438,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17439,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17440,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17441,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17442,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17443,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17444,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17445,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17446,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17447,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 17448,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40364,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-06-01T20:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40443,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-08-30T20:16:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1338,
    //               "tenPhim": "Fight for my way",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fight-for-my-way_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40349,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-06-01T15:45:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40444,
    //                   "maRap": "491",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-08-31T20:16:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 3099,
    //               "tenPhim": "BÀ HOÀNG NÓI DỐI 2020",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ba-hoang-noi-doi-2020_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             }
    //           ],
    //           "maCumRap": "bhd-star-cineplex-vincom-quang-trung",
    //           "tenCumRap": "BHD Star Cineplex - Vincom Quang Trung",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "B1-Vincom QT, 190 Quang Trung, Gò Vấp"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 18205,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18206,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18207,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18208,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18209,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18210,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18211,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18212,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18213,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18214,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18215,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18216,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18217,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18218,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18219,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18220,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18221,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18222,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18223,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18224,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18225,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18226,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18227,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18228,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18229,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18230,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18231,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18232,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18233,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18234,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18235,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18236,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18237,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18238,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18239,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18240,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18241,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18242,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18243,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18244,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18245,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18246,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18247,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18248,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18249,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18250,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18251,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18252,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18253,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18254,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18255,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18256,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18257,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 18258,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40323,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-04-30T17:30:00",
    //                   "giaVe": 89000
    //                 },
    //                 {
    //                   "maLichChieu": 40366,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-05-31T18:45:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40445,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-08-31T20:17:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1353,
    //               "tenPhim": "Bloodshot 1",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40274,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-03-20T03:24:39",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40367,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-05-31T21:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40446,
    //                   "maRap": "506",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-09-01T20:17:00",
    //                   "giaVe": 80000
    //                 }
    //               ],
    //               "maPhim": 2026,
    //               "tenPhim": "Joker 2020",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/joker-2020_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             }
    //           ],
    //           "maCumRap": "bhd-star-cineplex-vincom-thao-dien",
    //           "tenCumRap": "BHD Star Cineplex - Vincom Thảo Điền",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "L5-Megamall, 159 XL Hà Nội, Q.2"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40240,
    //                   "maRap": "460",
    //                   "tenRap": "Rạp 10",
    //                   "ngayChieuGioChieu": "2020-01-05T01:00:00",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 40368,
    //                   "maRap": "451",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-05-30T16:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40447,
    //                   "maRap": "451",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-09-01T20:18:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 2026,
    //               "tenPhim": "Joker 2020",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/joker-2020_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40243,
    //                   "maRap": "451",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-01-06T01:00:00",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 40275,
    //                   "maRap": "451",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-03-28T18:30:00",
    //                   "giaVe": 89000
    //                 },
    //                 {
    //                   "maLichChieu": 40369,
    //                   "maRap": "451",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-06-01T09:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40448,
    //                   "maRap": "451",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-08-29T20:19:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 2027,
    //               "tenPhim": "Mắt biếc",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/mat-biec_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40472,
    //                   "maRap": "451",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-08-31T16:41:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 3104,
    //               "tenPhim": "SA MẠC CHẾT",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sa-mac-chet_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40770,
    //                   "maRap": "451",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-11-21T00:00:00",
    //                   "giaVe": 100000
    //                 },
    //                 {
    //                   "maLichChieu": 40771,
    //                   "maRap": "455",
    //                   "tenRap": "Rạp 5",
    //                   "ngayChieuGioChieu": "2020-11-21T00:00:00",
    //                   "giaVe": 123321
    //                 },
    //                 {
    //                   "maLichChieu": 40784,
    //                   "maRap": "457",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2020-12-11T07:30:00",
    //                   "giaVe": 99000
    //                 }
    //               ],
    //               "maPhim": 4742,
    //               "tenPhim": "Gia Đình Croods",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/gia-dinh-croods_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 41482,
    //                   "maRap": "451",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2021-01-06T15:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 41483,
    //                   "maRap": "451",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2021-01-14T03:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 41484,
    //                   "maRap": "451",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2021-01-13T18:00:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 41595,
    //                   "maRap": "451",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2021-02-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 43484,
    //                   "maRap": "459",
    //                   "tenRap": "Rạp 9",
    //                   "ngayChieuGioChieu": "2021-07-06T07:05:00",
    //                   "giaVe": 90000
    //                 }
    //               ],
    //               "maPhim": 1323,
    //               "tenPhim": "test cập nhật",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/test-cap-nhat_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 41486,
    //                   "maRap": "451",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2021-01-14T12:00:00",
    //                   "giaVe": 80000
    //                 }
    //               ],
    //               "maPhim": 5209,
    //               "tenPhim": "Thợ săn quái vật",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tho-san-quai-vat_gp10.png",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 41566,
    //                   "maRap": "451",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2021-01-13T06:00:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1398,
    //               "tenPhim": "Itawon class",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/itawon-class_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 41596,
    //                   "maRap": "455",
    //                   "tenRap": "Rạp 5",
    //                   "ngayChieuGioChieu": "2021-02-10T02:10:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1383,
    //               "tenPhim": "Avenger",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avenger_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 42795,
    //                   "maRap": "451",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2021-04-26T20:20:30",
    //                   "giaVe": 80000
    //                 }
    //               ],
    //               "maPhim": 6168,
    //               "tenPhim": " Bố Già",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bo-gia-vuong_gp10.jpg",
    //               "hot": null,
    //               "dangChieu": null,
    //               "sapChieu": null
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 42896,
    //                   "maRap": "457",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2021-05-05T01:14:40",
    //                   "giaVe": 130000
    //                 }
    //               ],
    //               "maPhim": 1368,
    //               "tenPhim": "Annabelle",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/annabelle_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43446,
    //                   "maRap": "451",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2021-07-14T14:40:00",
    //                   "giaVe": 80000
    //                 }
    //               ],
    //               "maPhim": 7033,
    //               "tenPhim": "Black Widow",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/black-widow_gp10.jpg",
    //               "hot": null,
    //               "dangChieu": null,
    //               "sapChieu": null
    //             }
    //           ],
    //           "maCumRap": "bhd-star-cineplex-3-2",
    //           "tenCumRap": "BHD Star Cineplex - 3/2",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "L5-Vincom 3/2, 3C Đường 3/2, Q.10"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43479,
    //                   "maRap": "467",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2021-06-07T19:55:00",
    //                   "giaVe": 90000
    //                 }
    //               ],
    //               "maPhim": 7209,
    //               "tenPhim": "ẤN QUỶ",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/an-quy_gp10.png",
    //               "hot": null,
    //               "dangChieu": null,
    //               "sapChieu": null
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43480,
    //                   "maRap": "465",
    //                   "tenRap": "Rạp 5",
    //                   "ngayChieuGioChieu": "2021-07-05T21:59:00",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 43521,
    //                   "maRap": "461",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2021-07-08T18:42:00",
    //                   "giaVe": 120000
    //                 },
    //                 {
    //                   "maLichChieu": 43522,
    //                   "maRap": "466",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2021-07-08T18:42:00",
    //                   "giaVe": 125000
    //                 }
    //               ],
    //               "maPhim": 1338,
    //               "tenPhim": "Fight for my way",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fight-for-my-way_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43483,
    //                   "maRap": "463",
    //                   "tenRap": "Rạp 3",
    //                   "ngayChieuGioChieu": "2021-07-06T06:05:00",
    //                   "giaVe": 90000
    //                 }
    //               ],
    //               "maPhim": 1323,
    //               "tenPhim": "test cập nhật",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/test-cap-nhat_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             }
    //           ],
    //           "maCumRap": "bhd-star-cineplex-bitexco",
    //           "tenCumRap": "BHD Star Cineplex - Bitexco",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "L3-Bitexco Icon 68, 2 Hải Triều, Q.1"
    //         }
    //       ],
    //       "maHeThongRap": "BHDStar",
    //       "tenHeThongRap": "BHD Star Cineplex",
    //       "logo": "https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    //       "mahom": "GP10"
    //     },
    //     {
    //       "lstCumRap": [
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 19015,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19016,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19017,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19018,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19019,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19020,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19021,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19022,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19023,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19024,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19025,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19026,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19027,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19028,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19029,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19030,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19031,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19032,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19033,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19034,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19035,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19036,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19037,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19038,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19039,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19040,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19041,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19042,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19043,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19044,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19045,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19046,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19047,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19048,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19049,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19050,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19051,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19052,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19053,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19054,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19055,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19056,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19057,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19058,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19059,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19060,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19061,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19062,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19063,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19064,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19065,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19066,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19067,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19068,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40371,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-06-04T20:00:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40449,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-08-30T20:19:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1368,
    //               "tenPhim": "Annabelle",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/annabelle_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40370,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-05-31T07:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40450,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-08-30T20:20:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1398,
    //               "tenPhim": "Itawon class",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/itawon-class_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40436,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-08-29T20:34:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1458,
    //               "tenPhim": "Fast And Furious",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fast-and-furious_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 42893,
    //                   "maRap": "521",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2021-05-03T07:59:59",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1413,
    //               "tenPhim": "Underwater",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/underwater_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             }
    //           ],
    //           "maCumRap": "cgv-aeon-tan-phu",
    //           "tenCumRap": "CGV - Aeon Tân Phú",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 19825,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19826,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19827,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19828,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19829,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19830,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19831,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19832,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19833,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19834,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19835,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19836,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19837,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19838,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19839,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19840,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19841,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19842,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19843,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19844,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19845,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19846,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19847,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19848,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19849,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19850,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19851,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19852,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19853,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19854,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19855,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19856,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19857,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19858,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19859,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19860,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19861,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19862,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19863,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19864,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19865,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19866,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19867,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19868,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19869,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19870,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19871,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19872,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19873,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19874,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19875,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19876,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19877,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 19878,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40451,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-08-30T20:21:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1383,
    //               "tenPhim": "Avenger",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avenger_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40475,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-09-01T20:53:00",
    //                   "giaVe": 80000
    //                 },
    //                 {
    //                   "maLichChieu": 40476,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-09-02T21:53:00",
    //                   "giaVe": 80000
    //                 },
    //                 {
    //                   "maLichChieu": 40477,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-08-29T07:24:00",
    //                   "giaVe": 80000
    //                 },
    //                 {
    //                   "maLichChieu": 40478,
    //                   "maRap": "536",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-08-30T07:25:00",
    //                   "giaVe": 80000
    //                 }
    //               ],
    //               "maPhim": 3292,
    //               "tenPhim": "Cơn Mưa Tình Đầu",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/con-mua-tinh-dau_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 41598,
    //                   "maRap": "535",
    //                   "tenRap": "Rạp 5",
    //                   "ngayChieuGioChieu": "2021-01-13T11:30:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1338,
    //               "tenPhim": "Fight for my way",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fight-for-my-way_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43433,
    //                   "maRap": "535",
    //                   "tenRap": "Rạp 5",
    //                   "ngayChieuGioChieu": "2021-07-17T09:32:00",
    //                   "giaVe": 82000
    //                 }
    //               ],
    //               "maPhim": 3117,
    //               "tenPhim": "King Of Fighter",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/king-of-fighter_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             }
    //           ],
    //           "maCumRap": "cgv-cgv-saigonres-nguyen-xi",
    //           "tenCumRap": "CGV - CGV Saigonres Nguyễn Xí",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P. 26, Bình Thạnh"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 20635,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20636,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20637,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20638,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20639,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20640,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20641,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20642,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20643,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20644,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20645,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20646,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20647,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20648,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20649,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20650,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20651,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20652,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20653,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20654,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20655,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20656,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20657,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20658,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20659,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20660,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20661,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20662,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20663,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20664,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20665,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20666,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20667,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20668,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20669,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20670,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20671,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20672,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20673,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20674,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20675,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20676,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20677,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20678,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20679,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20680,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20681,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20682,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20683,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20684,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20685,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20686,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20687,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 20688,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40452,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-08-30T20:21:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1398,
    //               "tenPhim": "Itawon class",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/itawon-class_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40282,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-04-02T21:30:00",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 40453,
    //                   "maRap": "551",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-08-31T20:22:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1353,
    //               "tenPhim": "Bloodshot 1",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43438,
    //                   "maRap": "557",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2021-07-12T09:39:00",
    //                   "giaVe": 80000
    //                 }
    //               ],
    //               "maPhim": 3117,
    //               "tenPhim": "King Of Fighter",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/king-of-fighter_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             }
    //           ],
    //           "maCumRap": "cgv-ct-plaza",
    //           "tenCumRap": "CGV - CT Plaza",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "60A Trường Sơn,P. 2, Tân Bình"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 21445,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21446,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21447,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21448,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21449,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21450,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21451,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21452,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21453,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21454,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21455,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21456,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21457,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21458,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21459,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21460,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21461,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21462,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21463,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21464,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21465,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21466,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21467,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21468,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21469,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21470,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21471,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21472,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21473,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21474,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21475,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21476,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21477,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21478,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21479,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21480,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21481,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21482,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21483,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21484,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21485,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21486,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21487,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21488,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21489,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21490,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21491,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21492,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21493,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21494,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21495,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21496,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21497,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 21498,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40454,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-08-31T20:23:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1413,
    //               "tenPhim": "Underwater",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/underwater_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40479,
    //                   "maRap": "566",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-08-30T07:27:00",
    //                   "giaVe": 80000
    //                 }
    //               ],
    //               "maPhim": 3292,
    //               "tenPhim": "Cơn Mưa Tình Đầu",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/con-mua-tinh-dau_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 41492,
    //                   "maRap": "564",
    //                   "tenRap": "Rạp 4",
    //                   "ngayChieuGioChieu": "2021-01-13T11:30:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1338,
    //               "tenPhim": "Fight for my way",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fight-for-my-way_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             }
    //           ],
    //           "maCumRap": "cgv-golden-plaza",
    //           "tenCumRap": "CGV - Golden Plaza",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "Tầng 4, Trung tâm thương mại Golden Plaza, 922 Nguyễn Trãi, P. 14, Q. 5"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 22255,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22256,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22257,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22258,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22259,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22260,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22261,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22262,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22263,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22264,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22265,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22266,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22267,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22268,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22269,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22270,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22271,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22272,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22273,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22274,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22275,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22276,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22277,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22278,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22279,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22280,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22281,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22282,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22283,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22284,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22285,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22286,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22287,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22288,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22289,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22290,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22291,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22292,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22293,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22294,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22295,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22296,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22297,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22298,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22299,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22300,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22301,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22302,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22303,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22304,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22305,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22306,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22307,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 22308,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1428,
    //               "tenPhim": "Iron man 3",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/iron-man-3_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40332,
    //                   "maRap": "582",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-04-25T18:30:00",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 40333,
    //                   "maRap": "581",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-04-26T06:30:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 2026,
    //               "tenPhim": "Joker 2020",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/joker-2020_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             }
    //           ],
    //           "maCumRap": "cgv-hung-vuong-plaza",
    //           "tenCumRap": "CGV - Hùng Vương Plaza",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "Lầu 7, 126 Hùng Vương, Q. 5"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 23065,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23066,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23067,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23068,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23069,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23070,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23071,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23072,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23073,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23074,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23075,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23076,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23077,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23078,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23079,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23080,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23081,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23082,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23083,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23084,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23085,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23086,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23087,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23088,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23089,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23090,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23091,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23092,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23093,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23094,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23095,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23096,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23097,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23098,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23099,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23100,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23101,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23102,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23103,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23104,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23105,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23106,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23107,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23108,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23109,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23110,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23111,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23112,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23113,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23114,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23115,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23116,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23117,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23118,
    //                   "maRap": "596",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1443,
    //               "tenPhim": "Shadow hunter",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/shadow-hunter_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             }
    //           ],
    //           "maCumRap": "cgv-imc-tran-quang-khai",
    //           "tenCumRap": "CGV - IMC Trần Quang Khải",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "T2&3, TTVH Đa Năng, 62 Trần Quang Khải, P.Tân Định, Q.1"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 23875,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23876,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23877,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23878,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23879,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23880,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23881,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23882,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23883,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23884,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23885,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23886,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23887,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23888,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23889,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23890,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23891,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23892,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23893,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23894,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23895,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23896,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23897,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23898,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23899,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23900,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23901,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23902,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23903,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23904,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23905,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23906,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23907,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23908,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23909,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23910,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23911,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23912,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23913,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23914,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23915,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23916,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23917,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23918,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23919,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23920,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23921,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23922,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23923,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23924,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23925,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23926,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23927,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 23928,
    //                   "maRap": "611",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1458,
    //               "tenPhim": "Fast And Furious",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fast-and-furious_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             }
    //           ],
    //           "maCumRap": "cgv-pandora-city",
    //           "tenCumRap": "CGV - Pandora City",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "Lầu 3, Pandora City, 1/1 Trường Chinh, Tân Phú"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 24685,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24686,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24687,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24688,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24689,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24690,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24691,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24692,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24693,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24694,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24695,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24696,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24697,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24698,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24699,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24700,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24701,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24702,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24703,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24704,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24705,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24706,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24707,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24708,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24709,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24710,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24711,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24712,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24713,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24714,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24715,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24716,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24717,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24718,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24719,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24720,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24721,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24722,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24723,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24724,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24725,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24726,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24727,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24728,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24729,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24730,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24731,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24732,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24733,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24734,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24735,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24736,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24737,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 24738,
    //                   "maRap": "626",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1473,
    //               "tenPhim": "Em chưa 18",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/em-chua-18_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43528,
    //                   "maRap": "624",
    //                   "tenRap": "Rạp 4",
    //                   "ngayChieuGioChieu": "2021-07-15T19:08:00",
    //                   "giaVe": 120000
    //                 }
    //               ],
    //               "maPhim": 7286,
    //               "tenPhim": "Vệ sĩ sát thủ 2",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ve-si-sat-thu-2_gp10.jpg",
    //               "hot": null,
    //               "dangChieu": null,
    //               "sapChieu": null
    //             }
    //           ],
    //           "maCumRap": "cgv-paragon",
    //           "tenCumRap": "CGV - Paragon",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "Tầng 5, toà nhà Parkson Paragon, 03 Nguyễn Lương Bằng, Q. 7"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 25495,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25496,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25497,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25498,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25499,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25500,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25501,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25502,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25503,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25504,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25505,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25506,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25507,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25508,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25509,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25510,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25511,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25512,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25513,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25514,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25515,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25516,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25517,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25518,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25519,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25520,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25521,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25522,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25523,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25524,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25525,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25526,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25527,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25528,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25529,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25530,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25531,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25532,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25533,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25534,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25535,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25536,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25537,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25538,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25539,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25540,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25541,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25542,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25543,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25544,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25545,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25546,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25547,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 25548,
    //                   "maRap": "641",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1488,
    //               "tenPhim": "The Walking Dead SS10",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-walking-dead-ss10_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             }
    //           ],
    //           "maCumRap": "cgv-pearl-plaza",
    //           "tenCumRap": "CGV - Pearl Plaza",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "Lầu 5, Pearl Plaza, 561 Điện Biên Phủ, Bình Thạnh"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 26305,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26306,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26307,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26308,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26309,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26310,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26311,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26312,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26313,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26314,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26315,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26316,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26317,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26318,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26319,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26320,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26321,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26322,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26323,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26324,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26325,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26326,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26327,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26328,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26329,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26330,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26331,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26332,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26333,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26334,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26335,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26336,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26337,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26338,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26339,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26340,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26341,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26342,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26343,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26344,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26345,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26346,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26347,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26348,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26349,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26350,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26351,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26352,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26353,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26354,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26355,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26356,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26357,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 26358,
    //                   "maRap": "656",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1503,
    //               "tenPhim": "Southpaw",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/southpaw.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             }
    //           ],
    //           "maCumRap": "cgv-satra-cu-chi",
    //           "tenCumRap": "CGV - Satra Củ Chi",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "T3, TTTM Satra Củ Chi, Số 1239, Tỉnh Lộ 8, Ấp Thạnh An, Trung An, Củ Chi, TP.HCM"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 27115,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27116,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27117,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27118,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27119,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27120,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27121,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27122,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27123,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27124,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27125,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27126,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27127,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27128,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27129,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27130,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27131,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27132,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27133,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27134,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27135,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27136,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27137,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27138,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27139,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27140,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27141,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27142,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27143,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27144,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27145,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27146,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27147,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27148,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27149,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27150,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27151,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27152,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27153,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27154,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27155,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27156,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27157,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27158,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27159,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27160,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27161,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27162,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27163,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27164,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27165,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27166,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27167,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27168,
    //                   "maRap": "671",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1518,
    //               "tenPhim": "Underwater 2020",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/underwater-2020_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             }
    //           ],
    //           "maCumRap": "cgv-vincom-dong-khoi",
    //           "tenCumRap": "CGV - Vincom Đồng Khởi",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "Tầng 3, TTTM Vincom Center B, 72 Lê Thánh Tôn, Bến Nghé, Q. 1"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 27925,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27926,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27927,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27928,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27929,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27930,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27931,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27932,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27933,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27934,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27935,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27936,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27937,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27938,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27939,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27940,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27941,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27942,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27943,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27944,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27945,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27946,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27947,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27948,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27949,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27950,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27951,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27952,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27953,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27954,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27955,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27956,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27957,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27958,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27959,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27960,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27961,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27962,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27963,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27964,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27965,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27966,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27967,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27968,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27969,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27970,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27971,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27972,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27973,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27974,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27975,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27976,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27977,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 27978,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1533,
    //               "tenPhim": "Avengers: Infinity Warr ",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avengers-infinity-warr_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40244,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-02-19T02:20:31",
    //                   "giaVe": 78000
    //                 }
    //               ],
    //               "maPhim": 1368,
    //               "tenPhim": "Annabelle",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/annabelle_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40245,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-02-19T02:22:19",
    //                   "giaVe": 78000
    //                 }
    //               ],
    //               "maPhim": 1518,
    //               "tenPhim": "Underwater 2020",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/underwater-2020_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40246,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-02-19T02:22:56",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1413,
    //               "tenPhim": "Underwater",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/underwater_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40247,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-02-19T02:47:34",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1443,
    //               "tenPhim": "Shadow hunter",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/shadow-hunter_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40248,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-02-19T02:55:53",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1398,
    //               "tenPhim": "Itawon class",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/itawon-class_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40249,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-02-19T02:57:27",
    //                   "giaVe": 78000
    //                 },
    //                 {
    //                   "maLichChieu": 40322,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-04-25T15:30:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1458,
    //               "tenPhim": "Fast And Furious",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fast-and-furious_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40250,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-02-19T03:02:43",
    //                   "giaVe": 78000
    //                 }
    //               ],
    //               "maPhim": 2026,
    //               "tenPhim": "Joker 2020",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/joker-2020_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40251,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-02-19T03:06:21",
    //                   "giaVe": 90000
    //                 }
    //               ],
    //               "maPhim": 1383,
    //               "tenPhim": "Avenger",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avenger_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40252,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-02-24T10:03:52",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 2212,
    //               "tenPhim": "End Game",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/end-game_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40388,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-06-30T17:30:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 3117,
    //               "tenPhim": "King Of Fighter",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/king-of-fighter_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40435,
    //                   "maRap": "686",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2020-08-30T20:27:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 3292,
    //               "tenPhim": "Cơn Mưa Tình Đầu",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/con-mua-tinh-dau_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43523,
    //                   "maRap": "684",
    //                   "tenRap": "Rạp 4",
    //                   "ngayChieuGioChieu": "2021-07-08T18:55:00",
    //                   "giaVe": 120000
    //                 }
    //               ],
    //               "maPhim": 7209,
    //               "tenPhim": "ẤN QUỶ",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/an-quy_gp10.png",
    //               "hot": null,
    //               "dangChieu": null,
    //               "sapChieu": null
    //             }
    //           ],
    //           "maCumRap": "cgv-vincom-go-vap",
    //           "tenCumRap": "CGV - Vincom Gò Vấp",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "Tầng 5 TTTM Vincom Plaza Gò Vấp, 12 Phan Văn Trị, P. 7, Gò Vấp"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 28735,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28736,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28737,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28738,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28739,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28740,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28741,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28742,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28743,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28744,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28745,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28746,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28747,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28748,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28749,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28750,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28751,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28752,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28753,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28754,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28755,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28756,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28757,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28758,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28759,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28760,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28761,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28762,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28763,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28764,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28765,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28766,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28767,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28768,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28769,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28770,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28771,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28772,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28773,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28774,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28775,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28776,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28777,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28778,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28779,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28780,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28781,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28782,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28783,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28784,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28785,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28786,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28787,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 28788,
    //                   "maRap": "701",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1548,
    //               "tenPhim": "Captain Marvel",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/captain-marvel_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             }
    //           ],
    //           "maCumRap": "cgv-vincom-thu-duc",
    //           "tenCumRap": "CGV - Vincom Thủ Đức",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "Tầng 5 Vincom Thủ Đức, 216 Võ Văn Ngân, Bình Thọ, Thủ Đức"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40238,
    //                   "maRap": "511",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-01-01T10:00:00",
    //                   "giaVe": 90000
    //                 }
    //               ],
    //               "maPhim": 1458,
    //               "tenPhim": "Fast And Furious",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fast-and-furious_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40239,
    //                   "maRap": "511",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-01-02T10:00:00",
    //                   "giaVe": 95000
    //                 }
    //               ],
    //               "maPhim": 2026,
    //               "tenPhim": "Joker 2020",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/joker-2020_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40777,
    //                   "maRap": "517",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2020-11-24T05:11:53",
    //                   "giaVe": 80000
    //                 }
    //               ],
    //               "maPhim": 2352,
    //               "tenPhim": "The Boss Baby 2",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-boss-baby-2_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 41481,
    //                   "maRap": "511",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2021-01-13T14:54:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1323,
    //               "tenPhim": "test cập nhật",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/test-cap-nhat_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 41485,
    //                   "maRap": "512",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2021-01-22T00:30:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1338,
    //               "tenPhim": "Fight for my way",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fight-for-my-way_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 42148,
    //                   "maRap": "519",
    //                   "tenRap": "Rạp 9",
    //                   "ngayChieuGioChieu": "2021-06-06T23:23:23",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1368,
    //               "tenPhim": "Annabelle",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/annabelle_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 42892,
    //                   "maRap": "520",
    //                   "tenRap": "Rạp 10",
    //                   "ngayChieuGioChieu": "2021-05-03T07:59:42",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1413,
    //               "tenPhim": "Underwater",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/underwater_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             }
    //           ],
    //           "maCumRap": "cgv-aeon-binh-tan",
    //           "tenCumRap": "CGV - Aeon Bình Tân",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "Tầng 3, TTTM Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, Bình Trị Đông B, Bình Tân"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40778,
    //                   "maRap": "719",
    //                   "tenRap": "Rạp 9",
    //                   "ngayChieuGioChieu": "2020-11-24T05:11:50",
    //                   "giaVe": 80000
    //                 }
    //               ],
    //               "maPhim": 4742,
    //               "tenPhim": "Gia Đình Croods",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/gia-dinh-croods_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             }
    //           ],
    //           "maCumRap": "cgv-vivocity",
    //           "tenCumRap": "CGV - VivoCity",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "Lầu 5, Trung tâm thương mại SC VivoCity - 1058 Nguyễn Văn Linh, Q. 7"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43434,
    //                   "maRap": "545",
    //                   "tenRap": "Rạp 5",
    //                   "ngayChieuGioChieu": "2021-07-10T09:33:00",
    //                   "giaVe": 80000
    //                 }
    //               ],
    //               "maPhim": 3099,
    //               "tenPhim": "BÀ HOÀNG NÓI DỐI 2020",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ba-hoang-noi-doi-2020_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             }
    //           ],
    //           "maCumRap": "cgv-crescent-mall",
    //           "tenCumRap": "CGV - Crescent Mall",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "Lầu 5, Crescent Mall, Đại lộ Nguyễn Văn Linh, Phú Mỹ Hưng, Q. 7"
    //         }
    //       ],
    //       "maHeThongRap": "CGV",
    //       "tenHeThongRap": "cgv",
    //       "logo": "https://movienew.cybersoft.edu.vn/hinhanh/cgv.png",
    //       "mahom": "GP10"
    //     },
    //     {
    //       "lstCumRap": [
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 30403,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30404,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30405,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30406,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30407,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30408,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30409,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30410,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30411,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30412,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30413,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30414,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30415,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30416,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30417,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30418,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30419,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30420,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30421,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30422,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30423,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30424,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30425,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30426,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30427,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30428,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30429,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30430,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30431,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30432,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30433,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30434,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30435,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30436,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30437,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30438,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30439,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30440,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30441,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30442,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30443,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30444,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30445,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30446,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30447,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30448,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30449,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30450,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30451,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30452,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30453,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30454,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30455,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 30456,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40358,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-06-01T16:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40359,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-06-02T20:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40360,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-06-05T21:00:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40361,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-06-07T17:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40362,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-06-03T22:00:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40455,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-08-30T20:24:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1323,
    //               "tenPhim": "test cập nhật",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/test-cap-nhat_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40276,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-04-25T05:30:00",
    //                   "giaVe": 79000
    //                 },
    //                 {
    //                   "maLichChieu": 40456,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-08-30T20:24:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 2352,
    //               "tenPhim": "The Boss Baby 2",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-boss-baby-2_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40347,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-06-27T18:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40457,
    //                   "maRap": "732",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-08-30T20:25:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 3098,
    //               "tenPhim": "AudioPhile (C18)",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/dau-an-vo-cuc-c18-_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43431,
    //                   "maRap": "731",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2021-07-01T19:46:00",
    //                   "giaVe": 80000
    //                 }
    //               ],
    //               "maPhim": 1533,
    //               "tenPhim": "Avengers: Infinity Warr ",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avengers-infinity-warr_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43445,
    //                   "maRap": "736",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2021-07-10T12:36:00",
    //                   "giaVe": 85000
    //                 }
    //               ],
    //               "maPhim": 7040,
    //               "tenPhim": "Mortal Kombat ",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/mortal-kombat_gp10.jpg",
    //               "hot": null,
    //               "dangChieu": null,
    //               "sapChieu": null
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43476,
    //                   "maRap": "737",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2021-07-13T18:23:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 7034,
    //               "tenPhim": "Chìa khóa trăm tỷ",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/chia-khoa-tram-ty_gp10.jpg",
    //               "hot": null,
    //               "dangChieu": null,
    //               "sapChieu": null
    //             }
    //           ],
    //           "maCumRap": "cns-quoc-thanh",
    //           "tenCumRap": "CNS - Quốc Thanh",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "271 Nguyễn Trãi, Q.1"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40241,
    //                   "maRap": "729",
    //                   "tenRap": "Rạp 9",
    //                   "ngayChieuGioChieu": "2020-01-05T01:00:00",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 40458,
    //                   "maRap": "729",
    //                   "tenRap": "Rạp 9",
    //                   "ngayChieuGioChieu": "2020-08-31T20:25:00",
    //                   "giaVe": 80000
    //                 }
    //               ],
    //               "maPhim": 2026,
    //               "tenPhim": "Joker 2020",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/joker-2020_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40474,
    //                   "maRap": "729",
    //                   "tenRap": "Rạp 9",
    //                   "ngayChieuGioChieu": "2020-08-31T17:50:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 3104,
    //               "tenPhim": "SA MẠC CHẾT",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sa-mac-chet_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40773,
    //                   "maRap": "721",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-11-21T05:44:42",
    //                   "giaVe": 77000
    //                 },
    //                 {
    //                   "maLichChieu": 40795,
    //                   "maRap": "722",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-12-10T07:00:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40796,
    //                   "maRap": "723",
    //                   "tenRap": "Rạp 3",
    //                   "ngayChieuGioChieu": "2020-12-10T07:00:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 4742,
    //               "tenPhim": "Gia Đình Croods",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/gia-dinh-croods_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 41487,
    //                   "maRap": "724",
    //                   "tenRap": "Rạp 4",
    //                   "ngayChieuGioChieu": "2021-01-13T10:30:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1338,
    //               "tenPhim": "Fight for my way",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fight-for-my-way_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 42891,
    //                   "maRap": "726",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2021-05-03T07:56:28",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1323,
    //               "tenPhim": "test cập nhật",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/test-cap-nhat_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 42897,
    //                   "maRap": "729",
    //                   "tenRap": "Rạp 9",
    //                   "ngayChieuGioChieu": "2021-05-05T01:17:02",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1398,
    //               "tenPhim": "Itawon class",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/itawon-class_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43432,
    //                   "maRap": "726",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2021-07-17T09:31:00",
    //                   "giaVe": 78900
    //                 },
    //                 {
    //                   "maLichChieu": 43437,
    //                   "maRap": "726",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2021-07-16T09:37:00",
    //                   "giaVe": 82000
    //                 }
    //               ],
    //               "maPhim": 7040,
    //               "tenPhim": "Mortal Kombat ",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/mortal-kombat_gp10.jpg",
    //               "hot": null,
    //               "dangChieu": null,
    //               "sapChieu": null
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43435,
    //                   "maRap": "724",
    //                   "tenRap": "Rạp 4",
    //                   "ngayChieuGioChieu": "2021-07-02T09:35:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 43436,
    //                   "maRap": "725",
    //                   "tenRap": "Rạp 5",
    //                   "ngayChieuGioChieu": "2021-07-02T09:35:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 7034,
    //               "tenPhim": "Chìa khóa trăm tỷ",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/chia-khoa-tram-ty_gp10.jpg",
    //               "hot": null,
    //               "dangChieu": null,
    //               "sapChieu": null
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43527,
    //                   "maRap": "722",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2021-07-08T19:07:00",
    //                   "giaVe": 100000
    //                 }
    //               ],
    //               "maPhim": 7286,
    //               "tenPhim": "Vệ sĩ sát thủ 2",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ve-si-sat-thu-2_gp10.jpg",
    //               "hot": null,
    //               "dangChieu": null,
    //               "sapChieu": null
    //             }
    //           ],
    //           "maCumRap": "cns-hai-ba-trung",
    //           "tenCumRap": "CNS - Hai Bà Trưng",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "135 Hai Bà Trưng, Bến Nghé, Q.1[Bản đồ]"
    //         }
    //       ],
    //       "maHeThongRap": "CineStar",
    //       "tenHeThongRap": "CineStar",
    //       "logo": "https://movienew.cybersoft.edu.vn/hinhanh/cinestar.png",
    //       "mahom": "GP10"
    //     },
    //     {
    //       "lstCumRap": [
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 31213,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31214,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31215,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31216,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31217,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31218,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31219,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31220,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31221,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31222,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31223,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31224,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31225,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31226,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31227,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31228,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31229,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31230,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31231,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31232,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31233,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31234,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31235,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31236,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31237,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31238,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31239,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31240,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31241,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31242,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31243,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31244,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31245,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31246,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31247,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31248,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31249,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31250,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31251,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31252,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31253,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31254,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31255,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31256,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31257,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31258,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31259,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31260,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31261,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31262,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31263,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31264,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31265,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 31266,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40459,
    //                   "maRap": "747",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2020-09-01T20:26:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1338,
    //               "tenPhim": "Fight for my way",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fight-for-my-way_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 42809,
    //                   "maRap": "750",
    //                   "tenRap": "Rạp 10",
    //                   "ngayChieuGioChieu": "2021-05-26T20:20:30",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 42818,
    //                   "maRap": "746",
    //                   "tenRap": "Rạp 6",
    //                   "ngayChieuGioChieu": "2021-05-26T20:20:30",
    //                   "giaVe": 90000
    //                 }
    //               ],
    //               "maPhim": 1323,
    //               "tenPhim": "test cập nhật",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/test-cap-nhat_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             }
    //           ],
    //           "maCumRap": "glx-huynh-tan-phat",
    //           "tenCumRap": "GLX - Huỳnh Tấn Phát",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "1362 Huỳnh Tấn Phát, KP1, Phú Mỹ, Q. 7"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 32023,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32024,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32025,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32026,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32027,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32028,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32029,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32030,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32031,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32032,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32033,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32034,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32035,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32036,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32037,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32038,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32039,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32040,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32041,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32042,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32043,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32044,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32045,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32046,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32047,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32048,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32049,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32050,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32051,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32052,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32053,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32054,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32055,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32056,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32057,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32058,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32059,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32060,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32061,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32062,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32063,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32064,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32065,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32066,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32067,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32068,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32069,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32070,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32071,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32072,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32073,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32074,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32075,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32076,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40460,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-08-31T20:27:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1353,
    //               "tenPhim": "Bloodshot 1",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 42898,
    //                   "maRap": "770",
    //                   "tenRap": "Rạp 10",
    //                   "ngayChieuGioChieu": "2021-05-26T20:20:30",
    //                   "giaVe": 90000
    //                 }
    //               ],
    //               "maPhim": 1323,
    //               "tenPhim": "test cập nhật",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/test-cap-nhat_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43524,
    //                   "maRap": "762",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2021-07-08T18:57:00",
    //                   "giaVe": 100000
    //                 }
    //               ],
    //               "maPhim": 7209,
    //               "tenPhim": "ẤN QUỶ",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/an-quy_gp10.png",
    //               "hot": null,
    //               "dangChieu": null,
    //               "sapChieu": null
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43525,
    //                   "maRap": "763",
    //                   "tenRap": "Rạp 3",
    //                   "ngayChieuGioChieu": "2021-07-08T19:01:00",
    //                   "giaVe": 100000
    //                 }
    //               ],
    //               "maPhim": 7034,
    //               "tenPhim": "Chìa khóa trăm tỷ",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/chia-khoa-tram-ty_gp10.jpg",
    //               "hot": null,
    //               "dangChieu": null,
    //               "sapChieu": null
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 43529,
    //                   "maRap": "767",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2021-07-13T19:09:00",
    //                   "giaVe": 100000
    //                 }
    //               ],
    //               "maPhim": 7286,
    //               "tenPhim": "Vệ sĩ sát thủ 2",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ve-si-sat-thu-2_gp10.jpg",
    //               "hot": null,
    //               "dangChieu": null,
    //               "sapChieu": null
    //             }
    //           ],
    //           "maCumRap": "glx-nguyen-du\r\n",
    //           "tenCumRap": "GLX - Nguyễn Du",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "116 Nguyễn Du, Q.1"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 32833,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32834,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32835,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32836,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32837,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32838,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32839,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32840,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32841,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32842,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32843,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32844,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32845,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32846,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32847,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32848,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32849,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32850,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32851,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32852,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32853,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32854,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32855,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32856,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32857,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32858,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32859,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32860,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32861,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32862,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32863,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32864,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32865,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32866,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32867,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32868,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32869,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32870,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32871,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32872,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32873,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32874,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32875,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32876,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32877,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32878,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32879,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32880,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32881,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32882,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32883,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32884,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32885,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 32886,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40461,
    //                   "maRap": "777",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2020-08-30T20:27:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1368,
    //               "tenPhim": "Annabelle",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/annabelle_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40776,
    //                   "maRap": "771",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-11-22T19:30:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40797,
    //                   "maRap": "771",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-12-11T18:00:00",
    //                   "giaVe": 80000
    //                 }
    //               ],
    //               "maPhim": 4742,
    //               "tenPhim": "Gia Đình Croods",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/gia-dinh-croods_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             }
    //           ],
    //           "maCumRap": "glx-nguyen-van-qua",
    //           "tenCumRap": "GLX - Nguyễn Văn Quá",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "119B Nguyễn Văn Quá, Đông Hưng Thuận, Q.12, TPHCM"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 33643,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33644,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33645,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33646,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33647,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33648,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33649,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33650,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33651,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33652,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33653,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33654,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33655,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33656,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33657,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33658,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33659,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33660,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33661,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33662,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33663,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33664,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33665,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33666,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33667,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33668,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33669,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33670,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33671,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33672,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33673,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33674,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33675,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33676,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33677,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33678,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33679,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33680,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33681,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33682,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33683,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33684,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33685,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33686,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33687,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33688,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33689,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33690,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33691,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33692,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33693,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33694,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33695,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 33696,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40462,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-08-30T20:28:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1383,
    //               "tenPhim": "Avenger",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avenger_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40308,
    //                   "maRap": "791",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-05-10T07:20:00",
    //                   "giaVe": 79000
    //                 },
    //                 {
    //                   "maLichChieu": 40463,
    //                   "maRap": "792",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-09-01T20:29:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 2026,
    //               "tenPhim": "Joker 2020",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/joker-2020_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             }
    //           ],
    //           "maCumRap": "glx-quang-trung",
    //           "tenCumRap": "GLX - Quang Trung",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "L3-Co.opmart Foodcosa, 304A Quang Trung, Gò Vấp"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 34453,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34454,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34455,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34456,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34457,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34458,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34459,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34460,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34461,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34462,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34463,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34464,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34465,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34466,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34467,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34468,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34469,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34470,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34471,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34472,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34473,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34474,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34475,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34476,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34477,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34478,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34479,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34480,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34481,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34482,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34483,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34484,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34485,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34486,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34487,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34488,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34489,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34490,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34491,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34492,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34493,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34494,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34495,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34496,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34497,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34498,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34499,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34500,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34501,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34502,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34503,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34504,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34505,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 34506,
    //                   "maRap": "807",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1398,
    //               "tenPhim": "Itawon class",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/itawon-class_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             }
    //           ],
    //           "maCumRap": "glx-tan-binh",
    //           "tenCumRap": "GLX - Tân Bình",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "246 Nguyễn Hồng Đào, Tân Bình"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 42802,
    //                   "maRap": "760",
    //                   "tenRap": "Rạp 10",
    //                   "ngayChieuGioChieu": "2021-05-26T20:20:30",
    //                   "giaVe": 90000
    //                 }
    //               ],
    //               "maPhim": 1323,
    //               "tenPhim": "test cập nhật",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/test-cap-nhat_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             }
    //           ],
    //           "maCumRap": "glx-kinh-duong-vuong",
    //           "tenCumRap": "GLX - Kinh Dương Vương",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "718bis Kinh Dương Vương, Q.6"
    //         }
    //       ],
    //       "maHeThongRap": "Galaxy",
    //       "tenHeThongRap": "Galaxy Cinema",
    //       "logo": "https://movienew.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
    //       "mahom": "GP10"
    //     },
    //     {
    //       "lstCumRap": [
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 35263,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35264,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35265,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35266,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35267,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35268,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35269,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35270,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35271,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35272,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35273,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35274,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35275,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35276,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35277,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35278,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35279,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35280,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35281,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35282,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35283,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35284,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35285,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35286,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35287,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35288,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35289,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35290,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35291,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35292,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35293,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35294,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35295,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35296,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35297,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35298,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35299,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35300,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35301,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35302,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35303,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35304,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35305,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35306,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35307,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35308,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35309,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35310,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35311,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35312,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35313,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35314,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35315,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 35316,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40464,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-09-01T20:29:00",
    //                   "giaVe": 80000
    //                 }
    //               ],
    //               "maPhim": 1413,
    //               "tenPhim": "Underwater",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/underwater_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40281,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-05-17T18:30:00",
    //                   "giaVe": 80000
    //                 },
    //                 {
    //                   "maLichChieu": 40465,
    //                   "maRap": "822",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-08-31T20:30:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 2027,
    //               "tenPhim": "Mắt biếc",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/mat-biec_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 41575,
    //                   "maRap": "821",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2021-01-23T18:30:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1353,
    //               "tenPhim": "Bloodshot 1",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             }
    //           ],
    //           "maCumRap": "lotte-cantavil",
    //           "tenCumRap": "Lotte - Cantavil",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "L7-Cantavil Premier, Xa Lộ Hà Nội, Q.2"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 36073,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36074,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36075,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36076,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36077,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36078,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36079,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36080,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36081,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36082,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36083,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36084,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36085,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36086,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36087,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36088,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36089,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36090,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36091,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36092,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36093,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36094,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36095,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36096,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36097,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36098,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36099,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36100,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36101,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36102,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36103,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36104,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36105,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36106,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36107,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36108,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36109,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36110,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36111,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36112,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36113,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36114,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36115,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36116,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36117,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36118,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36119,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36120,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36121,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36122,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36123,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36124,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36125,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36126,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40466,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2020-09-01T20:31:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1428,
    //               "tenPhim": "Iron man 3",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/iron-man-3_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40242,
    //                   "maRap": "838",
    //                   "tenRap": "Rạp 8",
    //                   "ngayChieuGioChieu": "2020-01-05T02:00:00",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 40468,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2020-08-31T20:31:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 2026,
    //               "tenPhim": "Joker 2020",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/joker-2020_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40348,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2020-06-27T15:45:00",
    //                   "giaVe": 80000
    //                 },
    //                 {
    //                   "maLichChieu": 40467,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2020-08-29T20:31:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 3098,
    //               "tenPhim": "AudioPhile (C18)",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/dau-an-vo-cuc-c18-_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40473,
    //                   "maRap": "837",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2020-08-31T17:18:00",
    //                   "giaVe": 80000
    //                 }
    //               ],
    //               "maPhim": 3104,
    //               "tenPhim": "SA MẠC CHẾT",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/sa-mac-chet_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             }
    //           ],
    //           "maCumRap": "lotte-cong-hoa",
    //           "tenCumRap": "Lotte - Cộng Hòa",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "L4-Pico Plaza, 20 Cộng Hòa, Tân Bình"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 36883,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36884,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36885,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36886,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36887,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36888,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36889,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36890,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36891,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36892,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36893,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36894,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36895,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36896,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36897,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36898,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36899,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36900,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36901,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36902,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36903,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36904,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36905,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36906,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36907,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36908,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36909,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36910,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36911,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36912,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36913,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36914,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36915,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36916,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36917,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36918,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36919,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36920,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36921,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36922,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36923,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36924,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36925,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36926,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36927,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36928,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36929,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36930,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36931,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36932,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36933,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36934,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36935,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 36936,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40469,
    //                   "maRap": "852",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2020-09-01T20:32:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1443,
    //               "tenPhim": "Shadow hunter",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/shadow-hunter_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             }
    //           ],
    //           "maCumRap": "lotte-go-vap",
    //           "tenCumRap": "Lotte - Gò Vấp",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "L3-Lotte Mart, 242 Nguyễn Văn Lượng, Gò Vấp"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 37693,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37694,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37695,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37696,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37697,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37698,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37699,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37700,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37701,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37702,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37703,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37704,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37705,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37706,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37707,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37708,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37709,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37710,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37711,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37712,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37713,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37714,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37715,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37716,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37717,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37718,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37719,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37720,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37721,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37722,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37723,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37724,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37725,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37726,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37727,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37728,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37729,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37730,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37731,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37732,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37733,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37734,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37735,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37736,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37737,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37738,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37739,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37740,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37741,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37742,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37743,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37744,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37745,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 37746,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 40470,
    //                   "maRap": "867",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2020-08-30T20:33:00",
    //                   "giaVe": 89000
    //                 }
    //               ],
    //               "maPhim": 1458,
    //               "tenPhim": "Fast And Furious",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fast-and-furious_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             }
    //           ],
    //           "maCumRap": "lotte-nam-sai-gon",
    //           "tenCumRap": "Lotte - Nam Sài Gòn",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "L3-Lotte Mart NSG, 469 Nguyễn Hữu Thọ, Q.7"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 38503,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38504,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38505,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38506,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38507,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38508,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38509,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38510,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38511,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38512,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38513,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38514,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38515,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38516,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38517,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38518,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38519,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38520,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38521,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38522,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38523,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38524,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38525,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38526,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38527,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38528,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38529,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38530,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38531,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38532,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38533,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38534,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38535,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38536,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38537,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38538,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38539,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38540,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38541,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38542,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38543,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38544,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38545,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38546,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38547,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38548,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38549,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38550,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38551,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38552,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38553,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38554,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38555,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 38556,
    //                   "maRap": "882",
    //                   "tenRap": "Rạp 2",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1473,
    //               "tenPhim": "Em chưa 18",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/em-chua-18_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 41597,
    //                   "maRap": "890",
    //                   "tenRap": "Rạp 10",
    //                   "ngayChieuGioChieu": "2021-02-10T16:30:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1353,
    //               "tenPhim": "Bloodshot 1",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             }
    //           ],
    //           "maCumRap": "lotte-phu-tho",
    //           "tenCumRap": "Lotte - Phú Thọ",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "L4-Lotte Mart Phú Thọ, Q.11"
    //         },
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 39313,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39314,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39315,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39316,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39317,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39318,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-01T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39319,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39320,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39321,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39322,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39323,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39324,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-02T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39325,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39326,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39327,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39328,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39329,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39330,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-03T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39331,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39332,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39333,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39334,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39335,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39336,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-04T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39337,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39338,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39339,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39340,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39341,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39342,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-05T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39343,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39344,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39345,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39346,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39347,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39348,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-06T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39349,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39350,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39351,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39352,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39353,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39354,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-07T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39355,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39356,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39357,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39358,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39359,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39360,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-08T20:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39361,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T10:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39362,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T12:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39363,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T14:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39364,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T16:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39365,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T18:10:00",
    //                   "giaVe": 75000
    //                 },
    //                 {
    //                   "maLichChieu": 39366,
    //                   "maRap": "897",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2019-01-09T20:10:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 1488,
    //               "tenPhim": "The Walking Dead SS10",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-walking-dead-ss10_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             }
    //           ],
    //           "maCumRap": "lotte-thu-duc",
    //           "tenCumRap": "Lotte - Thủ Đức",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "L2-Joy Citipoint, KCX Linh Trung, Thủ Đức"
    //         }
    //       ],
    //       "maHeThongRap": "LotteCinima",
    //       "tenHeThongRap": "Lotte Cinema",
    //       "logo": "https://movienew.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
    //       "mahom": "GP10"
    //     },
    //     {
    //       "lstCumRap": [
    //         {
    //           "danhSachPhim": [
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 40768,
    //                   "maRap": "905",
    //                   "tenRap": "Rạp 5",
    //                   "ngayChieuGioChieu": "2020-11-21T11:25:57",
    //                   "giaVe": 99000
    //                 },
    //                 {
    //                   "maLichChieu": 40769,
    //                   "maRap": "905",
    //                   "tenRap": "Rạp 5",
    //                   "ngayChieuGioChieu": "2020-12-12T18:30:00",
    //                   "giaVe": 77000
    //                 },
    //                 {
    //                   "maLichChieu": 40772,
    //                   "maRap": "901",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-11-21T00:00:00",
    //                   "giaVe": 111111
    //                 },
    //                 {
    //                   "maLichChieu": 40774,
    //                   "maRap": "901",
    //                   "tenRap": "Rạp 1",
    //                   "ngayChieuGioChieu": "2020-11-22T18:30:00",
    //                   "giaVe": 75000
    //                 }
    //               ],
    //               "maPhim": 4742,
    //               "tenPhim": "Gia Đình Croods",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/gia-dinh-croods_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 42803,
    //                   "maRap": "909",
    //                   "tenRap": "Rạp 9",
    //                   "ngayChieuGioChieu": "2021-05-26T20:20:30",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 42810,
    //                   "maRap": "910",
    //                   "tenRap": "Rạp 10",
    //                   "ngayChieuGioChieu": "2021-05-27T20:20:30",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 42811,
    //                   "maRap": "910",
    //                   "tenRap": "Rạp 10",
    //                   "ngayChieuGioChieu": "2021-05-25T20:20:30",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 42812,
    //                   "maRap": "910",
    //                   "tenRap": "Rạp 10",
    //                   "ngayChieuGioChieu": "2021-05-20T20:20:30",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 42813,
    //                   "maRap": "909",
    //                   "tenRap": "Rạp 9",
    //                   "ngayChieuGioChieu": "2021-05-19T20:20:30",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 42814,
    //                   "maRap": "907",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2021-05-18T20:20:30",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 42815,
    //                   "maRap": "910",
    //                   "tenRap": "Rạp 10",
    //                   "ngayChieuGioChieu": "2021-05-17T20:20:30",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 42816,
    //                   "maRap": "904",
    //                   "tenRap": "Rạp 4",
    //                   "ngayChieuGioChieu": "2021-05-16T20:20:30",
    //                   "giaVe": 90000
    //                 }
    //               ],
    //               "maPhim": 1323,
    //               "tenPhim": "test cập nhật",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/test-cap-nhat_gp10.jpg",
    //               "hot": false,
    //               "dangChieu": true,
    //               "sapChieu": false
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 42804,
    //                   "maRap": "910",
    //                   "tenRap": "Rạp 10",
    //                   "ngayChieuGioChieu": "2021-05-26T20:20:30",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 42805,
    //                   "maRap": "910",
    //                   "tenRap": "Rạp 10",
    //                   "ngayChieuGioChieu": "2021-06-26T20:20:30",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 42807,
    //                   "maRap": "909",
    //                   "tenRap": "Rạp 9",
    //                   "ngayChieuGioChieu": "2021-07-26T20:20:30",
    //                   "giaVe": 90000
    //                 },
    //                 {
    //                   "maLichChieu": 42808,
    //                   "maRap": "907",
    //                   "tenRap": "Rạp 7",
    //                   "ngayChieuGioChieu": "2021-07-26T20:20:30",
    //                   "giaVe": 90000
    //                 }
    //               ],
    //               "maPhim": 1338,
    //               "tenPhim": "Fight for my way",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fight-for-my-way_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             },
    //             {
    //               "lstLichChieuTheoPhim": [
    //                 {
    //                   "maLichChieu": 42899,
    //                   "maRap": "910",
    //                   "tenRap": "Rạp 10",
    //                   "ngayChieuGioChieu": "2021-05-26T20:20:30",
    //                   "giaVe": 90000
    //                 }
    //               ],
    //               "maPhim": 1368,
    //               "tenPhim": "Annabelle",
    //               "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/annabelle_gp10.jpg",
    //               "hot": true,
    //               "dangChieu": false,
    //               "sapChieu": true
    //             }
    //           ],
    //           "maCumRap": "megags-cao-thang",
    //           "tenCumRap": "MegaGS - Cao Thắng",
    //           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
    //           "diaChi": "19 Cao Thắng, Q.3"
    //         }
    //       ],
    //       "maHeThongRap": "MegaGS",
    //       "tenHeThongRap": "MegaGS",
    //       "logo": "https://movienew.cybersoft.edu.vn/hinhanh/megags.png",
    //       "mahom": "GP10"
    //     }
    // ]
}

export const QuanLyRapReducer = (state=stateDefault,action) => {
    switch (action.type) {
        case SET_HE_THONG_RAP_CHIEU : {
            state.heThongRapChieu = action.heThongRapChieu;
            return {...state};
        }


        default: return {...state}
        break;
    }
}