
import React from "react" ;
import "./App.css"
import {ThemeProvider} from "@material-ui/core"
import Navbar from "./components/Navbar/Navbar";
import theme from "./utils/theme";
import Hero from "./components/HeroComp/Hero"
import Article from "./components/ArticleComp/Article";
import Footer from "./Footer/Footer";



const App = () => {
  return ( 
     
     <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
        <Article />
        <Footer />      
     </ThemeProvider>
    
   );
}
 
export default App;
