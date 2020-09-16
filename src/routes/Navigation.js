import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes, routesAdmin } from "./routes";
import { map } from "lodash";
import useIdentity from "../utils/hooks/useIdentity";

export default function Navigation() {
    const { identity } = useIdentity();
    const array = [...routes, ...routesAdmin];

    return (
        <Router>
            {
                identity.role === "administrador" ? (
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
                    :
                    (
                        <Switch>
                            {map(routes, (route, index) => (
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