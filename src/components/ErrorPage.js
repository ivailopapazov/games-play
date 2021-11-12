const ErrorPage = ({
    children
}) => {
    return (
        
        <section id="catalog-page">
            <h1>Page Not Found</h1>

            { children && <p className="no-articles">{children}</p> }
        </section>
    );
}

export default ErrorPage;