let Building=(props)=>{
    let {name,design,construction,img1}=props;
    return(
        <div className="w-full md:w-1/2 bg-slate-300">
            <img src={img1} className="w-3/4 justify center" alt="" ></img>
            <h2>NAME:{name}</h2>
            <p>DESIGN:KSh.{design}</p>
            <p>CONSTRUCTION:KSh.{construction}</p>
        </div>
    );
}

export default Building;