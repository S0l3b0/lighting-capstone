function LightsInfo ({name, description, image}){
    return(
    <div>
        <h1 className = "text-center text-indigo-500 font-bold border border-dashed border-2 border-indigo-50">{name}</h1>
        <img className = "flex justify-start m-4 w-100" src = {image}/>
        <h3 className = "text-indigo-500 flex justify-end m-4 ">{description}</h3>
    </div>
    );
};

export default LightsInfo;