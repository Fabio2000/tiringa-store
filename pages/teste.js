import styles from '../style/styles.module.css'
import React, { Component, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, Col, Card, Row, Input, CardText, ModalHeader, ModalBody, Container } from 'reactstrap';
import Image from 'next/image'
import cearense from '../public/imagens/cearense.png';
import person from '../public/imagens/person.png';
import promo from '../public/imagens/promocao.png'
import inaugura from '../public/imagens/inaugura.jpeg'
import mas from '../public/imagens/masculina/mas.png'
import masc from '../public/imagens/masculina/ternoUm.jpg'
import mascOne from '../public/imagens/masculina/socialUm.jpeg'


// Fotos
import camisaOne from '../public/imagens/masculina/camisaOne.png'
import camisaTwo from '../public/imagens/masculina/camisaTwo.jpg'
import camisaTree from '../public/imagens/masculina/camisaTree.png'

import socialUm from '../public/imagens/masculina/socialUm.jpeg'
import socialTwo from '../public/imagens/masculina/socialTwo.png'
import socialTree from '../public/imagens/masculina/socialTree.png'

import ternoOne from '../public/imagens/masculina/ternoOne.png'
import ternoTwo from '../public/imagens/masculina/ternoTwo.png'
import ternoTree from '../public/imagens/masculina/ternoTree.png'





import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function () {

    const [oneShow, setoneShow] = useState(false);
    const [twoShow, settwoShow] = useState(false);
    const [treeShow, settreeShow] = useState(false);

    


    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);



    return (
        <Col className={styles.teste}>
            <Nav className="navbar navbar-expand navbar-dark bg-dark col-12">
                <div id="informa" className={styles.informa}>
                    <div>
                        <a className="navbar-brand" href="home"><Image src={cearense} width={60} height={60} /></a>
                    </div>
                    <Col className="collapse navbar-collapse">
                        <Container className='col-12'>
                            <Col className="">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/home">Pagina inicial</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/produtos">Produtos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/criadores">Criadores</a>
                                    </li>
                                </ul>
                            </Col>
                        </Container>
                    </Col>
                </div>
                <Col style={{ textAlign: 'end' }}>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle style={{ backgroundColor: 'transparent', borderColor: 'transparent' }} ><Image src={person} width={50} height={50} /></DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href='/perfil'>Perfil</DropdownItem>
                            <DropdownItem href='/carinho'>Carinho</DropdownItem>
                            <DropdownItem href='/historico'>Histórico</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
            </Nav>

            <div>
                <Carousel className={styles.corousel}>
                    <div>
                        <Image src={mas} width={990} height={250} alt="imagem1" />

                    </div>

                    <div>
                        <Image src={promo} width={990} height={300} alt="imagem2" />

                    </div>

                    <div>
                        <Image src={inaugura} width={990} height={250} alt="imagem3" />

                    </div>

                </Carousel>
            </div>
            <div class="row" style={{ justifyContent: 'center', paddingTop: '1px', paddingBottom: '20px' }} className={styles.cards}>

                <Col sm="3">
                    <Card body>
                        <Image src={mascOne} />
                        <br />
                        <h4>Camiseta masculina tiringa</h4>
                        <CardText>Compre agora a camiseta social que o tiringa usa diáriamente em sua fazenda.</CardText>
                        <Button class="btn btn-warning" onClick={() => setoneShow(true)}>R$ 59,99</Button>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card body>
                        <Image src={camisaOne} />
                        <br />
                        <h4>Camiseta Unisex Tiringa Oficial</h4>
                        <CardText>Camiseta Unisex com diferentes tamanhos e diferentes cores para gostos de ambos genêros.</CardText>
                        <Button class="btn btn-warning" onClick={() => settwoShow(true)}>R$ 39,90</Button>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card body>
                        <Image src={masc} />
                        <br />
                        <h4>Terno completo estilo tiringa</h4>
                        <br />
                        <CardText>Compromisso importante? Escolha já nosso lindo terno tiringa.</CardText>
                        <Button class="btn btn-warning" onClick={() => settreeShow(true)}>R$ 359,90</Button>
                    </Card>
                </Col>
            </div>



            <Modal
                size="lg"
                show={oneShow}
                onHide={() => setoneShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm" style={{ marginLeft: 'auto' }}>
                        Camiseta masculina tiringa
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <Image src={socialUm} width={990} height={250} alt="imagem3" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={twoShow}
                onHide={() => settwoShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" style={{ marginLeft: 'auto' }}>
                        Camiseta Unisex Tiringa Oficial
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Container>
                        <Row>
                            <Col>
                                <div>
                                    <Image src={camisaTwo} width={990} height={250} alt="imagem2" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={treeShow}
                onHide={() => settreeShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" style={{ marginLeft: 'auto' }}>
                        Terno completo estilo tiringa
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Container>
                        <Row>
                            <Col>
                                <div>
                                    <Image src={ternoOne} width={424} height={290} alt="imagem3" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>




        </Col >
    )
}
