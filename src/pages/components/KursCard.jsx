
function KursCard(props) {
    return (
      <>

        <div className="card dark:bg-gray-800 bg-slate-300 shadow-xl shadow-gray-700 dark:shadow-gray-900 rounded-lg text-accent w-96 transition duration-2500 ">
          <div className="card-body">
            <h2 className="card-title text-3xl">{props.title}</h2>
            <p className="text-xl">{props.description}</p>
            <div className="card-actions align-middle justify-between">
              <label className="text-2xl mt-1">{props.price} zł</label>
              <button className="btn btn-ghost border-2 border-accent transition duration-2500">Dodaj do koszyka</button>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default KursCard
  