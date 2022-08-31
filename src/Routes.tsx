import {BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/">
                <Home />
            </Route>

        </BrowserRouter>
    );
}

export default Routes;