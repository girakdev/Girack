import { girakV } from "@/socketIo/soket";

girakV.emit(
  "auth",
  {
    username: "",
    password: "",
  },
  "alpha_20231212"
);
