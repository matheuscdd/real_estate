import { dataValid } from "./validateData.middleware";
import { emailValid } from "./validateEmail.middleware";
import { idValidUser } from "./validateIdUser.middleware";
import { adminValid } from "./validateAdmin.middleware";
import { tokenValid } from "./validateToken.middleware";
import { idValidCategory } from "./validateIdCategory.middleware";
import { nameValidCategory } from "./validateNameCategory.middleware";
import { userTokenValid } from "./validateTokenUser.middleware";

export default {
    userTokenValid,
    dataValid,
    emailValid,
    idValidUser,
    adminValid,
    tokenValid,
    nameValidCategory,
    idValidCategory
}