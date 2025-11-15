import './style.scss';
import { Input } from 'koum-ui';

export default function Home() {
    return (
        <div className="project-container">
            <div className="content-wrapper">
                <h1>Around the world</h1>
                <Input
                    id="search-bar"
                    label="Search bar"
                    placeholder="Find your next destination..."
                    visibleLabel={false}
                />
            </div>
        </div>
    );
}
