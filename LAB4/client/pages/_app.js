import "../styles/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main style={{ padding: "1.5rem 2rem" }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
