import { dataValid } from "./validateData.middleware";
import { emailValid } from "./validateEmail.middleware";
import { idValid } from "./validateId.middleware";
import { adminValid } from "./validateAdmin.middleware";
import { tokenValid } from "./validateToken.middleware";

export default {
    dataValid,
    emailValid,
    idValid,
    adminValid,
    tokenValid
}