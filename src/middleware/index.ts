import { dataValid } from "./validateData.middleware";
import { emailValid } from "./validateEmail.middleware";
import { idValidUser } from "./validateIdUser.middleware";
import { adminValid } from "./validateAdmin.middleware";
import { tokenValid } from "./validateToken.middleware";

export default {
    dataValid,
    emailValid,
    idValidUser,
    adminValid,
    tokenValid
}