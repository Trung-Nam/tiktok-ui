import Header from "../components/Header";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;