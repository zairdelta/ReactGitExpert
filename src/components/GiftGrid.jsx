import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GiftGrid = ({ category }) => {
    const { images,isloading} = useFetchGifs( category )

  return (
    <>
      <h3>{category}</h3>
      {
        isloading && (<h1>Cargando...</h1>)
      }
      <br /><br /><br />
       <div className="card-grid">
       {

       images.map((image)=>(
        <GifItem 
        key={image.id} 
        {...image}
        />
       ))
       
      }
       </div>
    </>
  );
};
