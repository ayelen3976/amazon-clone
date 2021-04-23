import React , { Component } from 'react';
import './Home.css'
import Product from './Product.js';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactPlayer from 'react-player'

 function Home(){
    return(
      <div className='home'> 
       <div className='home_container'>
         
   <Carousel className='home_image'>
  <Carousel.Item  >
    <img
      className="d-block w-100"
      src="https://www.xtrafondos.com/descargar.php?id=5036&resolucion=3840x2160"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/120309-phones-buyer-s-guide-best-smartphones-2020-the-top-mobile-phones-available-to-buy-today-image1-eagx1ykift.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cms-assets.tutsplus.com/uploads/users/1631/posts/32590/image/Gaming%20Vlogger%20Channel%20Banner%20Maker%20copy.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
  
       
   <div className='home_row'>
      <Product
            id='11'
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={200}
            rating={1}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
     <Product
       id='222'
     title="Notebook ASUS Um431 Ryzen 5 8gb Ssd 512gb 14 Lector Huella"
     price={127.395}
     rating={3}
     image="https://pccenter.com.ar/wp-content/uploads/2020/07/Um431.jpg"
   />
   <Product
     id='333'
     title="Skullcandy Crusher ANC Wireless Headphones"
     price={230}
     rating={5}
     image="https://www.cornellstore.com/site/Product_images/10015212_media-01.jpg?resizeid=3&resizeh=300&resizew=300"
   />
     <Product
            id='000'
            title="Notebook HP Probook 450 G7 Core I5 10ma 8gb 1tb Win10 Pro"
            price={117}
            rating={5}
            image="https://pccenter.com.ar/wp-content/uploads/2020/08/HP450-1.jpg"
     />
 </div> 
       <div className="home_row">
          <Product
            id='444'
            title="Sillón Pro Gamer Legend Negro con Rojo"
            price={200}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRHva7Yt2sZ55BgJbtajihalOUkDvTfwKf5JVWXnG1yTGRYXZb93PxFieO7wnW6TWLTBH0MwkVxs-k&usqp=CAc"
          />
          
          <Product
            id='555'
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={10}
            rating={1}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
               <Product
            id='66'
            title="Logitech C270 Webcam"
            price={10}
            rating={1}
            image="https://www.cornellstore.com/site/Product_images/1565877_media-01.jpg?resizeid=3&resizeh=300&resizew=300"
          />
        </div>
        <div>
        <ReactPlayer
          url='https://youtu.be/tUUElxEGo0U'
          className='react-player'
          playing
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          width='100%'
          height='500px'
        />
      </div>
        <div className="home_row">
          <Product
            id='777'
            title="PlayStation®4 de 1 TB con FIFA 20 Standard EditionPS4 1 TB + FIFA 20 Standard EditionExperimenta la inteligencia futbolística"
            price={200}
            rating={3}
            image="https://arsonyb2c.vteximg.com.br/arquivos/ids/282769-370-370/PS4-1TB-FIFA-20.jpg?v=637063966561870000"
          />
          <Product
            id='888'
            title="PlayStation®4 de 1 TB con FIFA 20 Standard EditionPS4 1 TB + FIFA 20 Standard EditionExperimenta la inteligencia futbolística"
            price={30}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id='999'
            title="Logitech M310 Wireless Mouse"
            price={10}
            rating={1}
            image="https://www.cornellstore.com/site/Product_images/9005056_media-Red-01.jpg?resizeid=3&resizeh=300&resizew=300"
          />
        </div>
        <div className="home_row">
          <Product
            id='10101'
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor -  Super Ultra Wide Dual WQHD 5120 x1440"
            price={3500}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
               <Product
            id='1212'
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={10}
            rating={1}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGxzzguMgbj-Vc77bcJuIrtpxKQIypNOHWGq8HRzRTu1zSBdKRyb--m6azFwHAR9fofnee9Pve6zx-cq1STI18F2UM21S0aJEiFJyQN5LxMgcmRoPvYomL&usqp=CAE"
          />
        </div>
   </div>
  </div>
   )  
 }
 export default Home;