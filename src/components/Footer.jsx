function Footer() {
    return <footer className="page-footer green lighten-2">
        <div className="footer-copyright">
            <div className="container">
                В© {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="https://github.com/Deni007a">https://github.com/Deni007a</a>
            </div>
        </div>
    </footer>
}

export {Footer};