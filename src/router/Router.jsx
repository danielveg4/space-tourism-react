import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Destination from '../pages/Destination';
import Crew from '../pages/Crew';
import Technology from '../pages/Technology';
import Layout from '../layouts/Layout';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/crew" element={<Crew />} />
                <Route path="technology" element={<Technology />} />
            </Route>
        </Routes>
    )
};

export default Router;