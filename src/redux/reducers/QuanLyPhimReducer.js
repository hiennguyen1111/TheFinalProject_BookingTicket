



const stateDefault = {
    arrFilm: [
        {
            "maPhim": 7981,
            "tenPhim": "Harry Potter and the Deathly Hallowss",
            "biDanh": "harry-potter-and-the-deathly-hallowss",
            "trailer": "https://www.youtube.com/embed/mObK5XD8udk",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/harry-potter-and-the-deathly-hallowss_gp01.jpg",
            "moTa": "IIn the epic finale, the battle between the good and evil forces of the wizarding world escalates into an all-out war.  The stakes have never been higher and no one is safe.  But it is Harry Potter who may be called upon to make the ultimate sacrifice as he draws closer to the climactic showdown with Lord Voldemort.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-08-24T00:00:00",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "maPhim": 7981,
            "tenPhim": "Harry Potter and the Deathly Hallowss",
            "biDanh": "harry-potter-and-the-deathly-hallowss",
            "trailer": "https://www.youtube.com/embed/mObK5XD8udk",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/harry-potter-and-the-deathly-hallowss_gp01.jpg",
            "moTa": "IIn the epic finale, the battle between the good and evil forces of the wizarding world escalates into an all-out war.  The stakes have never been higher and no one is safe.  But it is Harry Potter who may be called upon to make the ultimate sacrifice as he draws closer to the climactic showdown with Lord Voldemort.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-08-24T00:00:00",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
          }
    ]
}

export const QuanLyPhimReducer = (state=stateDefault,action) => {
    switch(action.type){


        default: return {...state};
    }
}