import { useContext } from "react";
import { UserContext } from "../../../../src/context/UserContext";

const UserInformations = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <p>Email: {user.email}</p>
      <p>firstName: {user.firstName}</p>
      <p>lastName: {user.lastName}</p>
    </div>
  );
};

export default UserInformations;
