// To know how many pages to create
export const getStaticPaths = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(hero => {
        return {
            params: { id: hero.id.toString() }
        }
    })

    return {
        paths, //10 paths returned
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();

    return {
        props: { hero: data }
    }
}

const Details = ({ hero }) => {
    return ( 
        <div>
            <h1>Details Page</h1>
            <h1>{ hero.name }</h1>
            <h1>{ hero.email }</h1>
            <h1>{ hero.website }</h1>
            <h1>{ hero.address.city }</h1>
        </div>
     );
}
 
export default Details;