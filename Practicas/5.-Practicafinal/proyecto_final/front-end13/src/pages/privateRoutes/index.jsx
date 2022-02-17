

import { Route, Redirect } from 'react-router-dom';

import useAuth from '../../custom-hooks/useAuth';

function PrivateRoute({ children,  ...rest }) {
    //let auth = useAuth();
     let auth = true;

    return (
        <Route
        {...rest}
            render={(/*{ location }*/) =>
                auth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            /*state: { from: location }*/
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;