import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import GameCatalog from './components/GameCatalog';
import CreateGame from './components/CreateGame';

function App() {
    const routes = {
        '/home': WelcomeWorld,
        '/games': GameCatalog,
        '/create-game':CreateGame,
    };

    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <WelcomeWorld />
            </main>

        </div>
    );
}

export default App;
