function Navig() {
    return (
        <div className="navigacija">
            <div className="left">
                <h1>BIBLIOTEKA</h1>
            </div>
            <div className="right">
                <a href="/kontakt">Kontakt</a>
                <a href="/knjige">Knjige</a>
                <a href="/prijava">Prijavi se</a>
                <a href="/registracija">
                    <button>Registruj se</button>
                </a>
            </div>
        </div>
    );
}

export default Navig;