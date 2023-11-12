import { Link } from "react-router-dom"


function CaseCard({data, index}){
  return(
    <Link
    to='/cases/id'
    onMouseEnter={()=> {
        const title_elemento = document.getElementById(index)
        title_elemento.classList.add('text-celestial-button')
        const img = document.getElementById(data.id)
        img.classList.add('object-scale-down')
    }}
    onMouseLeave={()=> {
      const title_elemento = document.getElementById(index)
      title_elemento.classList.remove('text-celestial-button')
      const img = document.getElementById(data.id)
      img.classList.remove('object-scale-down')
  }}
   className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img id={data.id} className="h-96 w-full object-cover" src={data.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-xl font-medium text-gray-800">
                      <a href={data.category.href} className="hover:underline">
                        {data.category.name}
                      </a>
                    </p>
                    <a href={data.href} className="mt-2 block">
                      <p id={index}className="lg:text-4xl pt-2 pb-6 text-2xl font-semibold transition duration-500 ease-in-out text-gray-900">{data.title}</p>
                      <p className="mt-3 text-2xl leading-9 text-gray-500">{data.description}</p>
                    </a>
                  </div>
                </div>
              </Link>
  )

}

export default CaseCard