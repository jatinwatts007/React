import React, { lazy, ReactComponentElement } from "react";
import pet, { Photo, AnimalResponse } from "@frontendmasters/pet";
import { navigate, RouteComponentProps } from "@reach/router";
import Modal from "./Modal";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
// import _ from "lodash";
import moment from "moment";

// const Modal = lazy(() => import("./Modal"));
console.log(moment);
class Details extends React.Component<RouteComponentProps<{ id: string }>> {
  // constructor(props) {
  //  super(props);

  // this.state = {
  //   loading: true
  // };
  // }
  public state = {
    loading: true,
    showModal: false,
    animal: "",
    breed: "",
    url: "",
    location: "",
    name: "",
    media: [] as Photo[],
    description: ""
  };
  public componentDidMount() {
    if (!this.props.id) {
      navigate("/");
      return;
    }
    pet.animal(+this.props.id).then(({ animal }) => {
      this.setState({
        url: animal.url,
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }
  public toggleModal = () =>
    this.setState({ showModal: !this.state.showModal });
  public adopt = () => navigate(this.state.url);
  public render() {
    if (this.state.loading) {
      return <h1>loading....</h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {themeHook => (
              // ([theme]    backgroundColor:theme)
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: themeHook[0] }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1> Would you like to adopt {name}? </h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>NO, I am a monster</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

// const Details = props => {
// return (
//   <pre>
//    <code>{JSON.stringify(props, null, 4)}</code>
//  </pre>
// );
// };

export default function DetailsWithErrorBoundary(
  props: RouteComponentProps<{ id: string }>
) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
