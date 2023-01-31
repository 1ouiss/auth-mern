import { useState } from "react";
import { Link } from "react-router-dom";
import UpdateUserInformations from "../../components/user/informations/UpdateUserInformations";
import UserInformations from "../../components/user/informations/UserInformations";

const Account = () => {
  const [update, setUpdate] = useState(false);

  const handleClick = () => {
    setUpdate(!update);
  };

  return (
    <div>
      <div>
        <h1>Account</h1>
        {update ? (
          <UpdateUserInformations setUpdate={setUpdate} update={update} />
        ) : (
          <>
            <UserInformations />
            <button>
              <Link to="/account/change-password">Change password</Link>
            </button>
          </>
        )}
        <button onClick={handleClick}>
          {update ? "cancel" : "modify user informations"}
        </button>
      </div>
      <div>
        <button>
          <Link to="/create-shop">Create a Shop</Link>
        </button>
      </div>
    </div>
  );
};

export default Account;
