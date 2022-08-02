import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Zoom, Fade } from "react-awesome-reveal";


export const ItemsList = ({ itemsData }) => {
  return (
    <Row >
      <Fade left>
        <Col className="mt-5">

          {

            itemsData && itemsData.length !== null ? (
              itemsData.map(item => {
                return (
                  <Card key={item.id} className='d-flex flex-row mb-2' style={{ backgroundColor: "#f8f8f8" }}>
                    <Card.Img variant="right" className="img-item" src={item.imgUrl} />
                    <Card.Body className='px-5 mt-3'>
                      <Card.Title className='d-flex justify-content-between mb-3'>
                        <div className='item-title '>
                          {item.title}

                        </div>

                        <div className='item-price '>
                          {item.price}


                        </div>
                      </Card.Title>
                      <Card.Text className='item-description '>
                        {item.description}


                      </Card.Text>
                    </Card.Body>
                  </Card>


                )
              })



            ) : null
          }


        </Col>
      </Fade>


    </Row >
  )
}
