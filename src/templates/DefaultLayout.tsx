import React from "react";
import Footer from "../screens/marketing/footer";
import Header from "../screens/marketing/menu";
// import Footer from "./Footer";
// import Header from "./Header";

interface Props {
    children: React.ReactNode
}

const DefaultLayout: React.FunctionComponent<Props> = (props:Props) => {
    return <>
        <Header />
        <main>
            {props.children}
        </main>
        <Footer />
    </>
}

export default DefaultLayout;