import { storage } from "../../helpers/storage";

export default function ({ next }) {
  if (storage.get("token")) {
    return next({ name: "AdminHomePage" });
  }
  return next();
}
