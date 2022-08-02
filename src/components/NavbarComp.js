import React from 'react'
import { Navbar, Container, Nav, Form, FormControl, Row } from 'react-bootstrap'
import { useState } from 'react';

export const NavbarComp = ({ filterBySearch }) => {

  const [searchValue, setSearchValue] = useState('')


  const onSearch = (e) => {
    e.preventDefault();
    filterBySearch(searchValue)
    setSearchValue('')
  }
  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant='dark'>
        <Container >
          <Navbar.Brand href="#">
            <div className=" brand-color" >مطعم دمشق</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-between" id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className='d-flex'>
              <FormControl
                type="text"
                placeholder='ابحث'
                className="mx-2"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <button onClick={(e) => onSearch(e)} className=" btn-search">بحث</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>

  )
}
