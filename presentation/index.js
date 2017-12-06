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
  import("./slides/4"),
  import("./slides/5"),
  import("./slides/6"),
  import("./slides/7"),
  import("./slides/8"),
  import("./slides/9"),
  import("./slides/10"),
  import("./slides/11"),
  import("./slides/12"),
  import("./slides/13"),
  import("./slides/14"),
  import("./slides/15"),
  import("./slides/16"),
  import("./slides/17"),
  import("./slides/18"),
  import("./slides/19"),
  import("./slides/20"),
  import("./slides/21"),
  import("./slides/22"),
  import("./slides/23"),
  import("./slides/24"),
  import("./slides/25"),
  import("./slides/26"),
  import("./slides/27"),
  import("./slides/28"),
  import("./slides/29"),
  import("./slides/30"),
  import("./slides/31")
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
