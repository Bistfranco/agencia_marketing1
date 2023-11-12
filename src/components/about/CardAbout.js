import header_about from 'assets/img/aboutCard.jpg'
import header_about1 from 'assets/img/aboutCard1.jpg'

function CardAbout(){
    return(
      <div className="relative px-12 lg:px-14 bg-case-card-color">
        <div className="xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-32 pb-20">
          <div>
            <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-10 sm:text-4xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris erat. Duis tristique elit vel efficitur tincidunt. Quisque tincidunt, justo nec consectetur hendrerit, ipsum ligula efficitur odio, eu sagittis ligula augue nec turpis. Vivamus tristique magna ut dui vestibulum, id aliquet lectus convallis.
                </h1>  
                <div className="relative flex justify-between">
                    <img className="h-96 w-full object-cover" src={header_about} alt="" />
                    <div className="w-4"></div> {/* Espacio entre las imágenes */}
                    <img className="h-96 w-full object-cover" src={header_about1} alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>


    )
}

export default CardAbout