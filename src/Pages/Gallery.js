import React from 'react';
import {Row, Col, Container, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Demo from './../Components/Slideshow';
class Gallery extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  make_gallery(){
    var text_list, text_dict;
    [text_list, text_dict] = this.get_text()
    var gallery_key = 'gallery_1'
    text_list = text_list[gallery_key];
    text_dict = text_dict[gallery_key]
    var gallery_items = text_list.map((key) => {
      return (
            <Carousel.Item style = {{'text-align' : 'center', 'height' : '200px', 'border' : '1px solid black', 'background-color' : 'white'}}>
              <div style = {{'verticalAlign' : 'middle'}}>
                <img

                  src={"Resources/Gallery/" + text_dict[key]['image']}
                  alt={text_dict[key]['alt']}
                  style = {{'max-width' : '200px','max-height' : '200px'}}
                />
              </div>

            </Carousel.Item>
      );
    });
    return (
      <Carousel style ={{'background-color' : 'grey'}} >
        {gallery_items}
      </Carousel>
    )
  }
  render(){
    var val = this.get_text()
    return (
      <Container>
        <Row><Col><h1 className = 'Title'>Gallery</h1></Col></Row>
  <Row>

  </Row>
  <Demo />
</Container>

    );
  }
  get_text(){
    var text_list = {'gallery_1' : [
      'switcheroo',
      'higrid',
      'zotbins'
      ]
    }
    var text_dict = {'gallery_1' : {
      'switcheroo' : {
        'caption' : 'Switcheroo',
        'alt' : 'switcheroo',
        'image' : 'switcheroo.png'
      },
      'higrid' : {
        'caption' : 'HiGRID',
        'alt' : 'higrid',
        'image' : 'higridplusdatabase.png'
      },
      'zotbins' : {
        'caption' : 'Zotbins',
        'alt' : 'zotbins',
        'image' : 'full_zotbins_logo.png'
        }

      }
    }

    return [text_list, text_dict];
  }
}
export default Gallery;
