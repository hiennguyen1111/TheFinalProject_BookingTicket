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
});