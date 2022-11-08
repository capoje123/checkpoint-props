import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

const Profile = (props) => (
  <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
    <Button
        variant="primary"
        size="lg"
        onClick={() => {
          props.handleName(props.fullName);
        }}
      >
        Prompt FullName
      </Button>
  <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol lg="6" className="mb-4 mb-lg-0">
        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
          <MDBRow className="g-0">
            <MDBCol md="4" className="gradient-custom text-center text-white"
              style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
              <MDBCardImage src={props.children}
                alt="Avatar" className="my-5" style={{ width: '180px' , height:'120px' ,borderRadius:'60px' }} fluid />
              <MDBTypography tag="h5">{props.fullName}</MDBTypography>
              <MDBCardText>{props.age}</MDBCardText>
              <MDBIcon far icon="edit mb-5" />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody className="p-4">
                <MDBTypography tag="h6">Information</MDBTypography>
                <hr className="mt-0 mb-4" />
                <MDBRow className="pt-1">
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Email</MDBTypography>
                    <MDBCardText className="text-muted">{props.email}</MDBCardText>
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Phone</MDBTypography>
                    <MDBCardText className="text-muted">{props.phone}</MDBCardText>
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">profession</MDBTypography>
                    <MDBCardText className="text-muted">{props.profession}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>

</section>

    );


    export default Profile;
