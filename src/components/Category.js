import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { JackInTheBox } from "react-awesome-reveal";



export const Category = ({ filterByCategory, allCats }) => {

  const onFilter = (cat) => {

    filterByCategory(cat)

  }
  return (
    <Row>
      <JackInTheBox>
        <Col sm="12" className='d-flex justify-content-center'>
          <div>

            {
              allCats && allCats !== null ? (
                allCats.map((cat, index) => {
                  return (
                    <button key={index} onClick={() => onFilter(cat)} style={{ border: "1px solid #b45b35" }} className='btn mx-3'> {cat}</button>


                  )
                })


              ) : null
            }


          </div>


        </Col>
      </JackInTheBox>


    </Row>
  )
}
