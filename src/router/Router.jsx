import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Destination from '../pages/destination/Destination';
import Crew from '../pages/crew/Crew';
import Technology from '../pages/technology/Technology';
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