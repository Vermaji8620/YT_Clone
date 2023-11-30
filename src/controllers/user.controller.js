import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from the frontend
  // validation
  // check for already registered user using email and username
  // check for the images and avatar to be uploaded on cloudinary
  // create user object and then its entry in database
  // remove the password and the refresh token from the response
  // check for the user creation
  //  return response

  const { username, email, fullName, password } = req.body;
  if (
    [fullName, email, password, username].some((field) => field?.trim() === "")
  ) {

    throw new ApiError(400, "all fields are required")

  }
});

export { registerUser };
