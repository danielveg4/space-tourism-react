import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/crew">Crew</Link>
                    </li>
                    <li>
                        <Link to="/technology">Technology</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
