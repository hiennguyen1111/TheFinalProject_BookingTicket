import * as yup from "yup";

const passwordExpression = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
export const signupSchema = yup.object().shape({
  taiKhoan: yup.string().trim().required("Vui lòng nhập tài khoản"),
  matKhau: yup.string().trim().required("Vui lòng nhập mật khẩu").matches(passwordExpression,"Mật khẩu tối thiểu 8 ký tự, bao gồm chữ in hoa và số"),
  xacNhanMatKhau: yup
    .string()
    .trim()
    .required("Vui lòng xác nhận mật khẩu")
    .when("matKhau", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("matKhau")], "Mật khẩu xác nhận không khớp"),
    }),
  email: yup
    .string()
    .trim()
    .required("Vui lòng nhập email")
    .email("Vui lòng nhập đúng định dạng email!"),
  soDt: yup.string().trim().required("Vui lòng nhập số điện thoại"),
  hoTen: yup.string().trim().required("Vui lòng nhập họ tên"),
});
