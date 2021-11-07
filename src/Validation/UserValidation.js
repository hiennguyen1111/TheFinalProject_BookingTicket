import * as yup from "yup";

export const userSchema = yup.object().shape({
  hoTen: yup
    .string()
    .min(2, "Độ dài tối thiểu họ tên là 2 ký tự")
    .max(50, "Độ dài tối thiểu họ tên là 50 ký tự")
    .matches(/^[A-Z a-z]+$/, "Họ tên không được chứa dấu")
    .trim()
    .required("Vui lòng nhập họ tên"),
  matKhau: yup
    .string()
    .min(8, "Độ dài mật khẩu tối thiểu là 8 ký tự")
    .trim()
    .required("Vui lòng nhập mật khẩu"),
  email: yup
    .string()
    .trim()
    .required("Vui lòng nhập email")
    .email("Vui lòng nhập đúng định dạng email!"),
  soDt: yup
    .string()
    .min(10, "Số điện thoại phải là 10 số")
    .max(10, "Số điện thoại phải là 10 số")
    .required("Vui lòng nhập số điện thoại"),
});

export const addUserSchema = yup.object().shape({
  hoTen: yup.string().trim().required("Vui lòng nhập họ tên"),
  taiKhoan: yup.string().trim().required("Vui lòng nhập tài khoản"),
  matKhau: yup.string().trim().required("Vui lòng nhập mật khẩu"),
  email: yup
    .string()
    .trim()
    .required("Vui lòng nhập email")
    .email("Vui lòng nhập đúng định dạng email!"),
  soDt: yup.string().trim().required("Vui lòng nhập số điện thoại"),
  maLoaiNguoiDung: yup
    .string()
    .trim()
    .required("Vui lòng chọn loại người dùng"),
});

export const signInSchema = yup.object().shape({
  taiKhoan: yup.string().trim().trim().required("Vui lòng nhập tài khoản"),
  matKhau: yup.string().trim().required("Vui lòng nhập mật khẩu"),
});
