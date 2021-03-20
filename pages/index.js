import Link from 'next/link';
function Home(){
    return (
    <div>
        <h1>Home dev</h1>
        <Link href="/sobre">
            <a>Pagina sobre</a>
        </Link>
        <Link href="/tempo">
            <a>Pagina tempo</a>
        </Link>
    </div>)
}
export default Home