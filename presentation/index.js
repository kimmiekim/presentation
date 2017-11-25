// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "black",
  secondary: "#20E20C",
  tertiary: "#C0FFEE",
  quartenary: "#CECECE"
}, {
  // primary: { name: "BWHaasTextMonoB", googleFont: true, styles: ["400", "700i"]},
  primary: "Courier",
  secondary: "Helvetica"
});

const slidesImports = [
  import("./slides/1"),
  import("./slides/2"),
  import("./slides/3"),
  import("./slides/4")
]

  export default class Presentation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        slides: Array(slidesImports.length).fill(<Slide key="loading" />)
      }
    }

    componentDidMount() {
        const importedSlides = [];
        Promise.all(slidesImports).then((slidesImportsResolved) => {
        slidesImportsResolved.forEach((slide) => {
          importedSlides.push(slide.default);
        });
        this.setState({ slides: importedSlides });
      });
    }

    render() {
      const { slides } = this.state;
      return (
        <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {
          slides.map((slide, index) => {
            return React.cloneElement(slide, {key: index});
          })
        }
        </Deck>
      );
    }
  }
