import NavBar from "../components/NavBar";

function ErrorPage() {
    return (
      <>
        <NavBar />
        <main>
          <h1>Error loading page...</h1>
          <p>Could not find page. [Error.jsx]</p>
        </main>
      </>
    );
}

export default ErrorPage;