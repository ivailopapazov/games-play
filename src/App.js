function App() {
    return (
        <div id="box">
            <header>
                <h1><a className="home" href="#">GamesPlay</a></h1>
                <nav>
                    <a href="#">All games</a>
                    <div id="user">
                        <a href="#">Create Game</a>
                        <a href="#">Logout</a>
                    </div>
                    <div id="guest">
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                    </div>
                </nav>
            </header>

            <main id="main-content">
            </main>

            <section id="welcome-world">

                <div className="welcome-message">
                    <h2>ALL new games are</h2>
                    <h3>Only in GamesPlay</h3>
                </div>
                <img src="./images/four_slider_img01.png" alt="hero" />

                <div id="home-page">
                    <h1>Latest Games</h1>

                    <div className="game">
                        <div className="image-wrap">
                            <img src="./images/CoverFire.png" />
                        </div>
                        <h3>Cover Fire</h3>
                        <div className="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className="data-buttons">
                            <a href="#" className="btn details-btn">Details</a>
                        </div>
                    </div>
                    <div className="game">
                        <div className="image-wrap">
                            <img src="./images/ZombieLang.png" />
                        </div>
                        <h3>Zombie Lang</h3>
                        <div className="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className="data-buttons">
                            <a href="#" className="btn details-btn">Details</a>
                        </div>
                    </div>
                    <div className="game">
                        <div className="image-wrap">
                            <img src="./images/MineCraft.png" />
                        </div>
                        <h3>MineCraft</h3>
                        <div className="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className="data-buttons">
                            <a href="#" className="btn details-btn">Details</a>
                        </div>
                    </div>
                    <div className="game">
                        <div className="image-wrap">
                            <img src="./images/MineCraft.png" />
                        </div>
                        <h3>MineCraft</h3>
                        <div className="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className="data-buttons">
                            <a href="#" className="btn details-btn">Details</a>
                        </div>
                    </div>
                    <div className="game">
                        <div className="image-wrap">
                            <img src="./images/MineCraft.png" />
                        </div>
                        <h3>MineCraft</h3>
                        <div className="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className="data-buttons">
                            <a href="#" className="btn details-btn">Details</a>
                        </div>
                    </div>

                    <p className="no-articles">No games yet</p>
                </div>
            </section>

            <section id="login-page" className="auth">
                <form id="login">

                    <div className="container">
                        <div className="brand-logo"></div>
                        <h1>Login</h1>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                        <label htmlFor="login-pass">Password:</label>
                        <input type="password" id="login-password" name="password" />
                        <input type="submit" className="btn submit" value="Login" />
                        <p className="field">
                            <span>If you don't have profile click <a href="#">here</a></span>
                        </p>
                    </div>
                </form>
            </section>

            <section id="register-page" className="content auth">
                <form id="register">
                    <div className="container">
                        <div className="brand-logo"></div>
                        <h1>Register</h1>

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="maria@email.com" />

                        <label htmlFor="pass">Password:</label>
                        <input type="password" name="password" id="register-password" />

                        <label htmlFor="con-pass">Confirm Password:</label>
                        <input type="password" name="confirm-password" id="confirm-password" />

                        <input className="btn submit" type="submit" value="Register" />

                        <p className="field">
                            <span>If you already have profile click <a href="#">here</a></span>
                        </p>
                    </div>
                </form>
            </section>

            <section id="create-page" className="auth">
                <form id="create">
                    <div className="container">

                        <h1>Create Game</h1>
                        <label htmlFor="leg-title">Legendary title:</label>
                        <input type="text" id="title" name="title" placeholder="Enter game title..." />

                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" placeholder="Enter game category..." />

                        <label htmlFor="levels">MaxLevel:</label>
                        <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                        <label htmlFor="game-img">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary"></textarea>
                        <input className="btn submit" type="submit" value="Create Game" />
                    </div>
                </form>
            </section>

            <section id="edit-page" className="auth">
                <form id="edit">
                    <div className="container">

                        <h1>Edit Game</h1>
                        <label htmlFor="leg-title">Legendary title:</label>
                        <input type="text" id="title" name="title" />

                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" />

                        <label htmlFor="levels">MaxLevel:</label>
                        <input type="number" id="maxLevel" name="maxLevel" min="1" />

                        <label htmlFor="game-img">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl" />

                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary"></textarea>
                        <input className="btn submit" type="submit" value="Edit Game" />

                    </div>
                </form>
            </section>

            <section id="game-details">
                <h1>Game Details</h1>
                <div className="info-section">

                    <div className="game-header">
                        <img className="game-img" src="images/MineCraft.png" />
                        <h1>Bright</h1>
                        <span className="levels">MaxLevel: 4</span>
                        <p className="type">Action, Crime, Fantasy</p>
                    </div>

                    <p className="text">
                        Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work
                        with an Orc to find a weapon everyone is prepared to kill for. Set in a world where fantasy
                        creatures live side by side with humans. A human cop is forced
                        to work with an Orc to find a weapon everyone is prepared to kill for.
                    </p>

                    <div className="details-comments">
                        <h2>Comments:</h2>
                        <ul>
                            <li className="comment">
                                <p>Content: I rate this one quite highly.</p>
                            </li>
                            <li className="comment">
                                <p>Content: The best game.</p>
                            </li>
                        </ul>
                        <p className="no-comment">No comments.</p>
                    </div>

                    <div className="buttons">
                        <a href="#" className="button">Edit</a>
                        <a href="#" className="button">Delete</a>
                    </div>
                </div>

                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form">
                        <textarea name="comment" placeholder="Comment......"></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>

            </section>

            <section id="catalog-page">
                <h1>All Games</h1>
                <div className="allGames">
                    <div className="allGames-info">
                        <img src="./images/avatar-1.jpg" />
                        <h6>Action</h6>
                        <h2>Cover Fire</h2>
                        <a href="#" className="details-button">Details</a>
                    </div>

                </div>
                <div className="allGames">
                    <div className="allGames-info">
                        <img src="./images/avatar-1.jpg" />
                        <h6>Action</h6>
                        <h2>Zombie lang</h2>
                        <a href="#" className="details-button">Details</a>
                    </div>

                </div>
                <div className="allGames">
                    <div className="allGames-info">
                        <img src="./images/avatar-1.jpg" />
                        <h6>Action</h6>
                        <h2>MineCraft</h2>
                        <a href="#" className="details-button">Details</a>
                    </div>
                </div>

                <h3 className="no-articles">No articles yet</h3>
            </section>
        </div>
    );
}

export default App;
