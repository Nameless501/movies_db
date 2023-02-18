import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import useDataFetch from "../../../hooks/useDataFetch";
import { apiConfig } from '../../../utils/configs';

export function CurrentUserProvider({ children }) {
    const [userData, setUserData] = useState({});
    const [userIsLogged, setUserStatus] = useState(false);

    const location = useLocation();
    const history = useHistory();

    const { handleFetch } = useDataFetch();

    function setCurrentUser(data) {
        setUserData(data);
        setUserStatus(true);
    }

    function removeCurrentUser() {
        setUserData({});
        setUserStatus(false)
    }

    useEffect(() => {
        handleFetch(apiConfig.tokenCheck)
            .then(setCurrentUser)
            .catch(err => {
                err === 401 ?
                    console.log('Необходима авторизация')
                    :
                    console.log(`Не удалось авторизовать пользователя. Ошибка: ${err}`)
            });
    }, [handleFetch]);

    // если пользователь перенаправлен с защищенного маршрута
    // перенаправить его обратно после успешной аутентификации и получения данных пользователя с API

    useEffect(() => {
        const redirect = location.state?.from;

        if(userIsLogged && redirect) {
            history.push(redirect);
        }
    }, [userIsLogged, location, history]);

    return (
        <UserContext.Provider
            value={{
                userIsLogged,
                userData,
                setCurrentUser,
                removeCurrentUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}