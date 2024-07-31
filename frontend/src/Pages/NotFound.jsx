
import { FaExclamationTriangle } from 'react-icons/fa';
import notFoundImage from '../assets/svgs/404.png'; // Update with your actual image path

function NotFound() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
            <FaExclamationTriangle style={{ fontSize: '4rem', color: '#ff6b6b' }} />
            <h1>404 Not Found</h1>
            <p>The page you're looking for doesn't exist!</p>
            <img src={notFoundImage} alt="404 Not Found" style={{ width: '50%', maxWidth: '400px', height: 'auto', marginTop: '20px' }} />
        </div>
    );
}

export default NotFound;
