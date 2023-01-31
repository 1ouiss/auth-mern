import { useEffect } from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../src/context/UserContext";
import UserService from "../../../../src/services/user.service";

const UpdateUserPassword = () => {
  const { user } = useContext(UserContext);
  const [credentials, setCredentials] = useState({});

  useEffect(() => {
    setCredentials(user);
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/account");
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log(credentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.newPassword !== credentials.verifyPassword) {
      return alert("Les mots de passe ne correspondent pas");
    }
    try {
      console.log(credentials);
      await UserService.update(credentials);
      navigate("/account");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form>
        <div>
          <p>Mot de pass actuel</p>
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
            placeholder="Mot de pass actuel"
          />
        </div>
        <div>
          <p>Nouveau mot de passe</p>
          <input
            type="password"
            name="newPassword"
            onChange={(e) => handleChange(e)}
            placeholder="Nouveau mot de passe"
          />
        </div>
        <div>
          <p>Confirmez votre mot de passe</p>
          <input
            type="password"
            name="verifyPassword"
            onChange={(e) => handleChange(e)}
            placeholder="Confirmez votre mot de passe"
          />
          <button onClick={(e) => handleSubmit(e)}>Confirmez</button>
        </div>
      </form>
      <button onClick={handleClick}>cancel</button>
    </>
  );
};

export default UpdateUserPassword;
