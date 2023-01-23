import React, {useContext, useState, useEffect} from 'react'
import styled from 'styled-components'
import Context from '../context/Context'

const Wrapper = styled.div`
    width: 100%;
    height: 80vh; 
     /* border: 2ppx solid rebeccapurple; */
     margin-top: 20px;
`

const Container = styled.div`
    display: flex;
    width: 95%;
    height: 100%;
    margin: 0 auto;
    /* border: 2px solid red; */
    box-shadow: 0 0 4px 2px;
`

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
    flex-flow: column;
    /* border: 2px solid rebeccapurple; */
`

const MainImg = styled.div`
    width: 90%;
    height: 60%;
    margin-top: 30px;
    /* display: flex; */
    /* align-items: flex-start; */
    /* border: 2px solid black; */
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const MiniImageContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 2px solid; */
    margin-top: 20px;
    width: 90%;
    height: 30%;
`


const InformationContainer = styled.div`
    flex: 1;
    height: 100%;
    margin: 0 auto;
    /* border: 2px solid green; */
    overflow-y: auto;
    box-shadow: 0 0 4px 2px;
`

const Title = styled.h1`
    font-size: 30px;
    padding: 20px;
`

const Description = styled.div`
    /* color: gray; */
    padding: 20px;
    margin: 20px;
    background-color: teal;
    color: white;
`

const Price = styled.h2`
    background-color: #ffd17b;
    margin:0 20px;
    padding: 20px;
`

const ButtonContainer = styled.div`
    display: flex;
    padding: 20px;
    /* border: 2px solid black; */
    gap: 30px;
`

const BuyButton = styled.button`
    width: 130px;
    height: 45px;
    background-color: teal;
    color: white;
    border-radius: 6px;
    border: none;
    cursor: pointer;

    &:active{
        box-shadow: 0 0 6px red;
    }
`

const AddCartButton = styled.button`
    width: 130px;
    height: 45px;
    background-color: #ffd17b;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:active{
        box-shadow: 0 0 6px red;
    }
`

const FreeDeliveryContainer = styled.div`
    padding: 20px;
    background-color: teal;
    color: white;
    margin:0 20px;
`
const ReplaceContainer = styled.div`
    padding: 20px;
    background-color: #ffd17b;
    margin: 20px;
`

const SinglePage = () => {

    const [product, setProduct] = useState({images:[ "https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg"]})
    const context = useContext(Context);

    useEffect(() => {
      setProduct(context.getSingleProduct());
    }, [])
    

  return (
    <Wrapper>
        <Container>
            <ImageContainer>
                <MainImg>
                    <Image src={product.thumbnail}></Image> 
                </MainImg>
                <MiniImageContainer>
                    <input type="radio" name="a" id="1" class="input-hidden" />
                    <label htmlFor="1"><img src={product.images[0]} alt="" width={"120px"}/></label>
                    <input type="radio" name="a" id="2" class="input-hidden" />
                    <label htmlFor="2"><img src={product.images[1]} alt="" width={"120px"}/></label>
                    <input type="radio" name="a" id="3" class="input-hidden"/>
                    <label htmlFor="3"><img src={product.images[2]} alt="" width={"120px"}/></label>
                </MiniImageContainer>
            </ImageContainer>
            <InformationContainer>
                <Title>
                    {product.title}
                </Title>
                <Description>
                    {product.description}
                </Description>
                <Price>
                    {product.price}$
                </Price>
                <ButtonContainer>
                    <BuyButton>Buy Now</BuyButton>
                    <AddCartButton>Add to Cart</AddCartButton>
                </ButtonContainer>
                <FreeDeliveryContainer>
                    Free Delivery Avilable on this Product
                </FreeDeliveryContainer>
                <ReplaceContainer>
                    Free 30 Days, Retuen Policy
                </ReplaceContainer>
            </InformationContainer>
        </Container>
    </Wrapper>
  )
}

export default SinglePage