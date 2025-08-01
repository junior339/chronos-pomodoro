import { Heading } from './components/Heading';
import {Container} from './components/Container';
import {Logo} from './components/Logo';
import {Menu} from './components/Menu';

//meu css ////
import './styles/global.css';
import './styles/theme.css'


export function App(){
    return<>

        
      
          
           <Container> 
               <Logo/>
           </Container>
           
            <Container>
              <Menu/>
            </Container>

          <Heading>HEADING</Heading>

     
        
    
    
    
    </>
}

