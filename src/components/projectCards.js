import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img1 from '../assets/project-img1.png'
import img2 from '../assets/project-img2.png'
import img3 from '../assets/project-img3.png'

function Cards(){
  return(
   <section className="myProject">
    <div className='container bg-black'>
      
    <CardGroup className='CardGroup bg-black'>
      <Card className='Card'>
        <Card.Img className='card_img' variant="top" src={img1} />
         
         <div className='card_info'>
            <h2>Business StartUp</h2>
            <p>Desighn & Development</p>
         </div>
      </Card>

      <Card className='Card card2'>
        <Card.Img className='card_img' variant="top" src={img2} />
         <div className='card_info'>
            <h2>Business StartUp</h2>
            <p>Desighn & Development</p>
         </div>
      </Card>
      
      <Card className='Card'>
        <Card.Img className='card_img' variant="top" src={img3} />
         <div className='card_info'>
            <h2>Business StartUp</h2>
            <p>Desighn & Development</p>
         </div>
      </Card>
    </CardGroup>
    
    <CardGroup className='CardGroup '>
    <Card className='Card'>
      <Card.Img className='card_img' variant="top" src={img1} />
       
       <div className='card_info'>
          <h2>Business StartUp</h2>
          <p>Desighn & Development</p>
       </div>
    </Card>

    <Card className='Card card2'>
      <Card.Img className='card_img' variant="top" src={img2} />
       <div className='card_info'>
          <h2>Business StartUp</h2>
          <p>Desighn & Development</p>
       </div>
    </Card>
    
    <Card className='Card'>
      <Card.Img className='card_img' variant="top" src={img3} />
       <div className='card_info'>
          <h2>Business StartUp</h2>
          <p>Desighn & Development</p>
       </div>
    </Card>
  </CardGroup>
  </div>
  </section>
  )
}
export default Cards;