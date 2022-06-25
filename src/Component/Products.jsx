import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton";
const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState();
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/Products");

            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading();
                console.log(filter)

            }
            return () => {

                componentMounted = false;
            }

        }
        getProducts();
    }, []);

    const Loading = () => {

        return (

            <>
                <div className="col-md-3">
                    <Skeleton height={ 350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={ 350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={ 350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={ 350}/>
                </div>
            </>

        )
    }


const filterProducts = (cat) => {
    const updatedlist = data.filter((x)=>x.category === cat);
    setFilter(updatedlist);
}


    const ShowProducts = () => {

        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2 "onClick={()=>setFilter(data)}>ALL</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProducts("Men's clothing")}>Men's clothing</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProducts("Women's clothing")}>Women's clothing</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProducts("Jewelary")}>Jewelery's clothing</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProducts("Electronic")}> Electronic</button>


                </div>

                {filter.map((Products) => {

                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4 "key={Products.id} >
                                    <img src={Products.image} class="card-img-top" alt={Products.title} 
                                    height="250px"/>
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{Products.title.substring(0,12)}...</h5>
                                        <p class="card-text lead fw-bold">${Products.price}</p>
                                        <a href="#" class="btn btn-outline-dark">Buy Now </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}

            </>

        )


    }

    return (
        <div>
            <div className="container my-5 py-5" ></div>
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6  fw-bolder text-center">LATEST PRODUCTS </h1>
                    <hr />
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products
