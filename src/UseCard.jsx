import React, {useState} from 'react' ;
import './App.css' ;

function UseCard({title, body}) {
 const [clicked, setClicked] = useState(false);
   // Fungsi handler
  function handleClick() {
    setClicked(true);
  }
    return (
    <article
      onClick={handleClick}
      className={`cursor-pointer rounded-lg p-5 shadow-md transition-colors ${
        clicked ? "bg-blue-100" : "bg-white"
      }`}
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        {title}
      </h2>

      <p className="text-gray-600 leading-relaxed">
        {body}
      </p>
    </article>
  );
}


export default UseCard
