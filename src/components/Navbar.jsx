import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 10vh;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: ghostwhite;
    /* border: 2px solid red; */
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    /* border: 2px solid black; */
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.div`
    padding: 0 30px;
`

const NavLinks = styled.div`
    display: flex;
    justify-content: space-between;
    list-style: none;
    gap: 30px;
`

const NavLink = styled.a`
    text-decoration: none;
`

const SerachInput = styled.div`
    width: 30vw;
`



const Navbar = () => {
  return (
    <>
        <Wrapper>
            <Container>
                <Logo>
                    <h1>ShopCart</h1>
                </Logo>
                <NavLinks>
                    <NavLink href="#" >Categories</NavLink>
                    <NavLink href="#" >Deals</NavLink>
                    <NavLink href="#" >Whats New</NavLink>
                    <NavLink href="#" >Delivery</NavLink>
                    <SerachInput>
                        <input type="text" style={{width:"100%"}}/>
                    </SerachInput>
                    <NavLink href="#" >Account</NavLink>
                    <NavLink href="#" >Cart</NavLink>
                </NavLinks>
            </Container>
        </Wrapper>
    </>
  )
}

export default Navbar