import * as yup from "yup";

export const addNewFilmSchema = yup.object().shape({
  tenPhim: yup
  .string()
  .min(2, "Độ dài tối thiểu tên phim là 2 ký tự")
  .max(30, "Độ dài tối thiểu tên phim là 30 ký tự")
  .trim()
  .required("Vui lòng nhập tên phim"),
  trailer: yup
  .string()
  .min(2, "Độ dài tối thiểu trailer là 20 ký tự")
  .trim()
  .required("Vui lòng thêm trailer"),
  moTa: yup
  .string()
  .min(2, "Độ dài tối thiểu mô tả là 20 ký tự")
  .trim()
  .required("Vui lòng thêm mô tả phim"),
  hinhAnh: yup.string().required("Vui lòng nhập liên kết ảnh"),
});

export const editFilmSchema = yup.object().shape({
  tenPhim: yup
  .string()
  .min(2, "Độ dài tối thiểu tên phim là 2 ký tự")
  .max(50, "Độ dài tối đa tên phim là 50 ký tự")
  .trim()
  .required("Vui lòng nhập tên phim"),
  trailer: yup
  .string()
  .min(2, "Độ dài tối thiểu trailer là 2 ký tự")
  .max(100, "Độ dài tối đa trailer là 100 ký tự")
  .trim()
  .required("Vui lòng thêm trailer"),
  moTa: yup
  .string()
  .min(2, "Độ dài tối thiểu mô tả là 2 ký tự")
  .max(1500, "Độ dài tối đa mô tả là 1500 ký tự")
  .trim()
  .required("Vui lòng thêm mô tả phim"),
});