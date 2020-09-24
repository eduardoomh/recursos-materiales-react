import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes, routesAdmin, errorRoute } from "./routes";
import { map } from "lodash";
import useIdentity from "../utils/hooks/useIdentity";

export default function Navigation() {
    const { identity } = useIdentity();
    const array = [...routes, ...errorRoute];
    const adminArray = [...routes, ...routesAdmin, ...errorRoute];
    console.log(identity)

    return (
        <Router>
            {
                identity.estatus === "administrador" ? (
                    <Switch>
                        {map(adminArray, (route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={(props) => (
                                    <route.layout>
                                        <route.component {...props} />
                                    </route.layout>
                                )}
                            />
                        ))}
                    </Switch>
                )
                    :
                    (
                        <Switch>
                            {map(array, (route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    render={(props) => (
                                        <route.layout>
                                            <route.component {...props} />
                                        </route.layout>
                                    )}
                                />
                            ))}
                        </Switch>

                    )
            }
        </Router>
    )
}