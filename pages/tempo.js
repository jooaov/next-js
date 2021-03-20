import Link from 'next/link';

function Tempo(props) {
    const  dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return(
        <div>
            <div>{ dynamicDateString } (Dinâmico)</div>
            <div>{ props.staticDateString } (Statico)</div>
        </div>

    )
    
}

export function getStaticProps() {
    const  staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
    return {
        props:{
            staticDateString
        },
        revalidate:1
    }

}
export default Tempo